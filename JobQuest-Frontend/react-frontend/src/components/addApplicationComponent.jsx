import React, { Component } from 'react';

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
                                        value={this.state.positionTitle} />
                                
                            </div>
                            <div className="form-group mt-2">
                                <label  className="form-label">{this.LABELS.companyName}</label>
                                <input  className="form-control " placeholder="Company Name" name="companyName" aria-required="true"
                                        value={this.state.companyName} />
                            </div>
                            <div className="form-group mt-2">
                                <label  className="form-label">{this.LABELS.applicationStatus}</label>
                                <select className="form-control" name="applicationStatus">
                                    {this.STATUS_OPTIONS.map((status, index) => (
                                        <option key={index} value={status}>
                                            {status}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="mt-3 mb-3">
                                <button id="registerSubmit" type="submit" className="w-100 p-2 d-block custom-btn">ADD</button>
                            </div>
                        </form>
                    </div>
                </div>               
            </div>
        );
    }
}

export default AddApplicationComponent;