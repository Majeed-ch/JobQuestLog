package com.jobquestlog.service;

import com.jobquestlog.exception.ResourceNotFoundException;
import com.jobquestlog.model.JobApplication;
import com.jobquestlog.repository.JobApplicationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class JobApplicationService {

    private final JobApplicationRepository repository;

    @Autowired
    public JobApplicationService(JobApplicationRepository repository) {
        this.repository = repository;
    }

    public List<JobApplication> getAll() {
        return repository.findAll();
    }

    public JobApplication addJobApplication(JobApplication jobApplication){
        return repository.save(jobApplication);
    }

    public Optional<JobApplication> getById(Long id) {
        return repository.findById(id);
    }
}
