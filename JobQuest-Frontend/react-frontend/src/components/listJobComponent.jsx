import React, {Component} from 'react';
import JobService from "../services/JobService";
import { withRouter } from 'react-router-dom';  

class ListJobComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            jobs: []
        }
        this.addApplication = this.addApplication.bind(this);
    }

    componentDidMount() {
        JobService.getJobApplications().then((res) => {
           this.setState({jobs: res.data});
        });
    }

    addApplication(){
        this.props.history.push('/add-application');
    }

    render() {
        return (
            <div>
                <div className="row">
                    
                </div>
                <div className="row">
                    <h2 className="text-center">JOBS LIST</h2>
                    <button className='btn btn-outline-primary btn-lg w-auto mt-2 mb-2' onClick={this.addApplication}>Add application</button>
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Position Title</th>
                                <th>Company Name</th>
                                <th>Status</th>
                                <th>Action</th>

                            </tr>
                        </thead>
                            <tbody>
                            {
                                this.state.jobs.map(
                                    job =>
                                        <tr key={job.id}>
                                            <td>{job.positionTitle}</td>
                                            <td>{job.companyName}</td>
                                            <td>{job.status}</td>
                                            <td><a href='#'>Update</a></td>
                                        </tr>
                                )
                            }
                            </tbody>
                    </table>
                </div>

            </div>
        );
    }
}

export default withRouter(ListJobComponent);