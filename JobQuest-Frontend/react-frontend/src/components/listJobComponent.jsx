import React, {Component} from 'react';

class ListJobComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            jobs: []
        }
    }
    render() {
        return (
            <div>
                <div className="row">
                    <h2 className="text-center">JOBS LIST</h2>
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Job Title</th>
                                <th>Company Name</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                            <tbody>
                            {
                                this.state.jobs.map(
                                    job =>
                                        <tr key={`job-${job.id}`}>
                                            <td key={`job-${job.id}-title`}>{job.jobTitle}</td>
                                            <td key={`job-${job.id}-company`}>{job.companyName}</td>
                                            <td key={`job-${job.id}-status`}>{job.jobStatus}</td>
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