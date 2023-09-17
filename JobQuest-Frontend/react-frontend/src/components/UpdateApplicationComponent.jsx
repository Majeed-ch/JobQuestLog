import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import JobService from '../services/JobService';
import Modal from 'react-modal';
import '../index.css';

function UpdateApplicationComponent() {
    const { id } = useParams(); // Get the 'id' parameter from the route
    const navigate = useNavigate(); // Hook for navigation
    const [isModalOpen, setModalOpen] = useState(false);

    // State initialization using useState
    const [application, setApplication] = useState({
        positionTitle: '',
        companyName: '',
        applicationStatus: ''
    });

    // Fetch the application data based on the 'id' from the route
    useEffect(() => {
        JobService.getJobApplicationById(id).then((res) => {
            const app = res.data;
            setApplication({
                positionTitle: app.positionTitle,
                companyName: app.companyName,
                applicationStatus: app.applicationStatus
            });
        });
    }, [id]); // Make sure to include 'id' in the dependency array

    const handleChange = (event) => {
        const { name, value } = event.target;
        setApplication((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // Submit the updated job application data
        JobService.updateJobApplication(id, application).then((res) => {
            // Handle successful update, e.g., show a success message or redirect
            console.log('Job application updated successfully:', res.data);

            // Redirect to the applications route after updating
            navigate('/applications');
        });
    };

    const handleDeleteClick = () => {
        setModalOpen(true);
    }

    const deleteApplication = () => {
        // Add the API method to delete the job application
        JobService.deleteJobApplication(id).then(() => {
            console.log(`Application #${id} is Deleted successfully!`);
            navigate('/applications');
        });
    }

    const closeModal = () => {
        setModalOpen(false);
    }

    return (
        <>
            <div className="container mt-5">
                <div className="card">
                    <div className="card-header d-flex justify-content-between">
                        <span>Job Application</span>
                        <div>
                            <span> <b>#{id}</b></span>
                            <button className="btn btn-outline-danger btn-sm ms-3" onClick={handleDeleteClick}>
                                Delete
                            </button>
                        </div>
                    </div>
                    <div className="card-body">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label>Position Title</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="positionTitle"
                                    value={application.positionTitle}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label>Company Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="companyName"
                                    value={application.companyName}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label>Status</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="applicationStatus"
                                    value={application.applicationStatus}
                                    onChange={handleChange}
                                />
                            </div>
                            <button type="submit" className="btn btn-primary">
                                Update
                            </button>
                        </form>
                    </div>
                </div>
                <button className="btn btn-outline-secondary w-25 mt-2" onClick={() => { navigate('/applications') }}>
                    Back
                </button>
            </div>
            <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                contentLabel="Delete Confirmation"
                className="customModal"
                overlayClassName="customOverlay"
            >
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Confirmation</h5>
                        <button type="button" className="close" onClick={closeModal}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        Are you sure you want to delete this job application?
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={closeModal}>Cancel</button>
                        <button type="button" className="btn btn-danger" onClick={deleteApplication}>Yes, Delete</button>
                    </div>
                </div>
            </Modal>
        </>
    );
}

export default UpdateApplicationComponent;
