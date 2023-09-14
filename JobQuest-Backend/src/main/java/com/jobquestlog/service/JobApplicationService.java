package com.jobquestlog.service;

import com.jobquestlog.exception.ResourceNotFoundException;
import com.jobquestlog.model.JobApplication;
import com.jobquestlog.repository.JobApplicationRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class JobApplicationService {

    private final JobApplicationRepository repository;
    private static final Logger logger = LoggerFactory.getLogger(JobApplicationService.class);

    @Autowired
    public JobApplicationService(JobApplicationRepository repository) {
        this.repository = repository;
    }

    public List<JobApplication> getAll() {
        return repository.findAll();
    }

    @Transactional
    public JobApplication addJobApplication(JobApplication jobApplication){
        logger.info("Adding new job application for position: {}", jobApplication.getPositionTitle());
        return repository.save(jobApplication);
    }

    public Optional<JobApplication> getById(Long id) {
        logger.info("Fetching job application with ID: {}", id);
        return repository.findById(id);
    }

    @Transactional
    public JobApplication updateJobApplication(JobApplication jobApplication) {
        if (jobApplication == null || !repository.existsById(jobApplication.getId())) {
            logger.error("Attempt to update non-existing job application with ID: {}", jobApplication.getId());
            throw new ResourceNotFoundException("Job Application not found. ID: " + jobApplication.getId());
        }
        logger.info("Updating job application with ID: {}", jobApplication.getId());
        return repository.save(jobApplication);
    }
}
