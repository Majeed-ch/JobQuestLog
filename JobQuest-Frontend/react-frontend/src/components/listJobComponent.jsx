import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import JobService from '../services/JobService';
import { useLocation } from 'react-router-dom';

function ListJobComponent() {
    const [jobs, setJobs] = useState([]);
    const location = useLocation();
    const deletedId = location.state?.deletedId;

    useEffect(() => {
        // Fetch the list of job applications, and optionally remove the deleted item
        JobService.getJobApplications()
            .then((res) => {
                const updatedJobs = res.data.filter((job) => job.id !== deletedId);
                setJobs(updatedJobs);
            })
            .catch((error) => {
                console.error('Error fetching job applications:', error);
            });
    }, [deletedId]);

    return (
        <div className="container mt-5">
            <h2 className="text-center">Job Applications List</h2>
            <Link to="/new-application" className='btn btn-outline-primary btn-lg w-auto mt-2 mb-2'>Add application</Link>
            <div className="row">
                <div className="col-md-12">
                    <table className="table table-striped">
                        <thead>
                        <tr>
                            <th>Position Title</th>
                            <th>Company Name</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {jobs.map((job) => (
                            <tr key={job.id}>
                                <td>{job.positionTitle}</td>
                                <td>{job.companyName}</td>
                                <td>{job.applicationStatus}</td>
                                <td>
                                    <Link to={`/applications/${job.id}`} className="btn btn-info btn-sm">
                                        View
                                    </Link>
                                    <Link to={`/applications/${job.id}/edit`} className="btn btn-info btn-sm">Edit</Link>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default ListJobComponent;





