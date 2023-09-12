//This class defines the structure and mapping of a job application entity in the database.
// We use this entity class in conjunction with a JPA repository to perform
// database operations (e.g., create, read, update, delete) on job applications.

package com.jobquestlog.model;

import jakarta.persistence.*;

@Entity
@Table(name = "job_application")
@Access(AccessType.FIELD)
public class JobApplication {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column(name = "position_title")
    private String positionTitle;
    @Column(name = "company_name")
    private String companyName;
    @Column(name = "status")
    private String applicationStatus;

    public JobApplication() {
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getPositionTitle() {
        return positionTitle;
    }

    public void setPositionTitle(String positionTitle) {
        this.positionTitle = positionTitle;
    }

    public String getCompanyName() {
        return companyName;
    }

    public void setCompanyName(String companyName) {
        this.companyName = companyName;
    }

    public String getApplicationStatus() {
        return applicationStatus;
    }

    public void setApplicationStatus(String status) {
        this.applicationStatus = status;
    }
}
