package com.jobquestlog.controller;

import com.jobquestlog.exception.ResourceNotFoundException;
import com.jobquestlog.model.JobApplication;
import com.jobquestlog.service.JobApplicationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

//The JobApplicationController is a typical example of a RESTful controller in Spring Boot.
// It provides an HTTP endpoint ("/applications") for retrieving a list of job applications,
// and it relies on the JobApplicationService to perform the actual data retrieval.
@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(path = "/api/v1/")
public class JobApplicationController {

    private final JobApplicationService service;



    @Autowired
    public JobApplicationController(JobApplicationService service) {
        this.service = service;
    }

    @GetMapping("/applications")
    public List<JobApplication> getAllApplications() {
        return service.getAll();
    }

    //create job application rest api
    @PostMapping("/applications")
    public JobApplication createJobApplication(@RequestBody JobApplication jobApplication){
        return service.addJobApplication(jobApplication);
    }

    @GetMapping("/applications/{applicationId}")
    public ResponseEntity<JobApplication> getApplicationById(@PathVariable Long applicationId){
        JobApplication application = service.getById(applicationId)
                .orElseThrow(()-> new ResourceNotFoundException("Job Application not found. ID: "+applicationId));

        return ResponseEntity.ok(application);
    }

    @PutMapping("/applications/{id}")
    public ResponseEntity<JobApplication> updateApplication(@PathVariable Long id, @RequestBody JobApplication applicationBody){
        JobApplication application = service.getById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Job Application not found with ID: "+id));

        if (applicationBody.getPositionTitle() != null){
            application.setPositionTitle(applicationBody.getPositionTitle());
        }
        if (applicationBody.getCompanyName() != null){
            application.setCompanyName(applicationBody.getCompanyName());
        }
        if (applicationBody.getApplicationStatus() != null){
            application.setApplicationStatus(applicationBody.getApplicationStatus());
        }

        JobApplication updatedApplication = service.updateJobApplication(application);
        return ResponseEntity.ok(updatedApplication);
    }

    @DeleteMapping("/applications/{id}")
    public ResponseEntity<Void> deleteJobApplication(@PathVariable Long id) {
        service.deleteJobApplication(id);
        return ResponseEntity.noContent().build();
    }

}
