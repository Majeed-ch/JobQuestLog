import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ListJobComponent from './listJobComponent';
import JobService from '../services/JobService';

function AddApplicationComponent() {
    const navigate = useNavigate(); // Get the navigate function using the useNavigate hook

    const [state, setState] = useState({
        positionTitle: '',
        companyName: '',
        applicationStatus: '',
    });

    const LABELS = {
        positionTitle: 'Position Title',
        companyName: 'Company Name',
        applicationStatus: 'Status',
    };

    const STATUS_OPTIONS = ['Applied', 'Heard Back', 'Interview', 'Offer', 'Rejected'];

    const changePositionHandler = (event) => {
        setState({ ...state, positionTitle: event.target.value });
    };

    const changeCompanyNameHandler = (event) => {
        setState({ ...state, companyName: event.target.value });
    };

    const changeApplicationStatusHandler = (event) => {
        setState({ ...state, applicationStatus: event.target.value });
    };

    const toggleNotification = () => {
        setState({ ...state, showNotification: !state.showNotification });
    };

    const saveApplication = (e) => {
        e.preventDefault();
        const jobApplication = {
            positionTitle: state.positionTitle,
            companyName: state.companyName,
            applicationStatus: state.applicationStatus,
        };

        console.log('adding an application => ' + JSON.stringify(jobApplication));

        JobService.addJopApplication(jobApplication).then((res) => {
            console.log('Added the job application!');
            // TODO: make it redirect to the applications page after successfully adding,
            // and consider a notification popup.
            toggleNotification();
            // Redirect to the applications page after 1 second
            setTimeout(() => {
                navigate('/applications');
            }, 1000);
        });
    };

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-4 mt-5">
                    <div className="text-center mb-5">
                        <h3 className="customHeading">Add a new job application</h3>
                    </div>
                    <form id="addAppForm" method="post">
                        <div className="form-group mt-2">
                            <label className="form-label">{LABELS.positionTitle}</label>
                            <input
                                className="form-control"
                                placeholder="Position Title"
                                name="positionTitle"
                                aria-required="true"
                                value={state.positionTitle}
                                onChange={changePositionHandler}
                            />
                        </div>
                        <div className="form-group mt-2">
                            <label className="form-label">{LABELS.companyName}</label>
                            <input
                                className="form-control"
                                placeholder="Company Name"
                                name="companyName"
                                aria-required="true"
                                value={state.companyName}
                                onChange={changeCompanyNameHandler}
                            />
                        </div>
                        <div className="form-group mt-2">
                            <label className="form-label">{LABELS.applicationStatus}</label>
                            <select
                                className="form-control"
                                name="applicationStatus"
                                onChange={changeApplicationStatusHandler}
                            >
                                <option defaultValue="Select application status">Select application status</option>
                                {STATUS_OPTIONS.map((status, index) => (
                                    <option key={index} value={status}>
                                        {status}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="mt-3 mb-3">
                            <button
                                type="submit"
                                className="w-100 p-2 d-block btn btn-success"
                                onClick={saveApplication}
                            >
                                ADD
                            </button>
                            <Link to="/applications" className="w-100 p-2 d-block btn btn-outline-danger mt-2">
                                CANCEL
                            </Link>
                        </div>
                    </form>
                    {/* Notification */}
                    {state.showNotification && (
                        <div className="alert alert-success">Job application added successfully!</div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default AddApplicationComponent;
