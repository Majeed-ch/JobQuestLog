import React, {Component} from 'react';
import JobService from "../services/JobService";

class ListJobComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            jobs: []
        }
    }

    componentDidMount() {
        JobService.getJobApplications().then((res) => {
           this.setState({jobs: res.data});
        });
    }

    render() {
        return (
            <div>
                <div className="row">
                    <h2 className="text-center">JOBS LIST</h2>
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

export default ListJobComponent;