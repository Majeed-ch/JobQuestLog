import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ListJobComponent from './listJobComponent';
import JobService from '../services/JobService';

class AddApplicationComponent extends Component {

    constructor(props){
        super(props)

        this.state = {
            positionTitle: "",
            companyName: "",
            applicationStatus: ""
        }
        this.changePositionHandler = this.changePositionHandler.bind(this);
        this.changeCompanyNameHandler = this.changeCompanyNameHandler.bind(this);
        this.changeApplicationStatusHandler = this.changeApplicationStatusHandler.bind(this);
        this.saveApplication = this.saveApplication.bind(this);
    }
    
    LABELS = {
        positionTitle: "Position Title",
        companyName: "Company Name",
        applicationStatus: "Status"
    };

    STATUS_OPTIONS = ['Applied', 'Heard Back', 'Interview', 'Offer', 'Rejected'];

    changePositionHandler = (event) => {
        this.setState({positionTitle: event.target.value});
    }
    changeCompanyNameHandler = (event) => {
        this.setState({companyName: event.target.value});
    }
    changeApplicationStatusHandler = (event) => {
        this.setState({applicationStatus: event.target.value});
    }

    saveApplication = (e) => {
        e.preventDefault();
        let jobApplication = {
            positionTitle: this.state.positionTitle,
            companyName: this.state.companyName,
            applicationStatus: this.state.applicationStatus
        };

        console.log('adding an application => ' + JSON.stringify(jobApplication));

        JobService.addJopApplication(jobApplication).then(res => {
            console.log("Added the job application!");
            // TODO: make it redirect to the applications page after successfully adding,
            // and consider a notification popup.
        });
    }

    render() {
        return (
            <div className='container'>
                <div className="row justify-content-center">
                    <div className="col-md-4 mt-5">
                        <div className="text-center mb-5">
                            <h3 className="customHeading">Add a new job application</h3>
                        </div>
                        <form id="addAppForm" method="post">
                            <div className="form-group mt-2">
                                <label  className="form-label">{this.LABELS.positionTitle}</label>
                                <input  className="form-control " placeholder="Position Title" name="positionTitle" aria-required="true"
                                        value={this.state.positionTitle} onChange={this.changePositionHandler}/>
                                
                            </div>
                            <div className="form-group mt-2">
                                <label  className="form-label">{this.LABELS.companyName}</label>
                                <input  className="form-control " placeholder="Company Name" name="companyName" aria-required="true"
                                        value={this.state.companyName} onChange={this.changeCompanyNameHandler}/>
                            </div>
                            <div className="form-group mt-2">
                                <label  className="form-label">{this.LABELS.applicationStatus}</label>
                                <select className="form-control" name="applicationStatus" onChange={this.changeApplicationStatusHandler}>
                                    <option defaultValue="Select application status">Select application status</option>
                                    {this.STATUS_OPTIONS.map((status, index) => (
                                        <option key={index} value={status}>
                                            {status}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="mt-3 mb-3">
                                <button type="submit" className="w-100 p-2 d-block btn btn-success" onClick={this.saveApplication}>ADD</button>
                                <Link to="/applications" className='w-100 p-2 d-block btn btn-outline-danger mt-2'>CANCEL</Link>
                            </div>
                        </form>
                    </div>
                </div>               
            </div>
        );
    }
}

export default AddApplicationComponent;