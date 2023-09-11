package com.jobquestlog.controller;

import com.jobquestlog.model.JobApplication;
import com.jobquestlog.service.JobApplicationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
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
}
