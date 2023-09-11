package com.jobquestlog.repository;

import com.jobquestlog.model.JobApplication;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

//By extending JpaRepository, JobApplicationRepository inherits a set of methods
// for performing common database operations on JobApplication entities, such as saving, updating, deleting, and querying.
// These methods include save, findById, findAll, delete, and more.
// Spring Data JPA will generate the necessary SQL queries based on method names.

@Repository
public interface JobApplicationRepository extends JpaRepository<JobApplication, Long> {

}
