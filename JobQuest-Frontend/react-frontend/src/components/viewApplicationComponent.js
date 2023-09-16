import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import JobService from '../services/JobService';

function ViewApplicationComponent() {

    const LABELS = {
        positionTitle: "Position Title",
        companyName: "Company Name",
        applicationStatus: "Status"
    };

    // to navigate using router
    let navigate = useNavigate();
    // to get the parameter from the route and use it in the component
    let {id} = useParams();

    // State initialization using useState
    const [state, setState] = useState({
        positionTitle: "",
        companyName: "",
        applicationStatus: ""
    });

    // useEffect hook to replace componentDidMount
    useEffect(() => {
        JobService.getJobApplicationById(id).then((res) => {
            const app = res.data;
            setState(prevState => ({
                ...prevState,
                positionTitle: app.positionTitle,
                companyName: app.companyName,
                applicationStatus: app.applicationStatus
            }));
        });
    });

    const handleDeleteClick = () => {
        const userConfirmed = window.confirm("Are you sure you want to delete this Job Application?");
        if (userConfirmed){
            deleteEntry();
        }
    }

    const deleteEntry = () => {
        // Add the API method to delete the job application
        //JobService.deleteJobApplication(id);

        console.log(`Application #${id} is Deleted successfully!`);
        navigate("/applications");
    }

    
    return (
        <div className="container mt-5">
            <div className="card">
                <div className="card-header d-flex justify-content-between">
                    <span>Job Application</span>
                    <div>
                        <span> <b>#{id}</b></span>
                        <button className="btn btn-outline-danger ms-3" onClick={handleDeleteClick}>Delete</button>
                    </div>
                </div>
                <div className="card-body">
                    <table className="table">
                        {<tbody>
                            {
                                Object.entries(LABELS).map(([key, label]) => (
                                    <tr key={key}>
                                        <th scope="row" className='w-25'>{label}:</th>
                                        <td>{state[key]}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                        }
                    </table>
                </div>
            </div>
            <button className="btn btn-outline-secondary w-25 mt-2" onClick={() => {navigate("/applications")}} >Back</button>
        </div>
    );
}

export default ViewApplicationComponent;
