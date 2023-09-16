import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import JobService from '../services/JobService';
import Modal from 'react-modal';
import '../index.css'

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

    const [isModalOpen, setModalOpen] = useState(false);

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
        setModalOpen(true);
    }

    const deleteApplication = () => {
        // Add the API method to delete the job application
        //JobService.deleteJobApplication(id);
        console.log(`Application #${id} is Deleted successfully!`);
        navigate("/applications");
        setModalOpen(false);
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
                        <button className="btn btn-outline-danger btn-sm ms-3" onClick={handleDeleteClick}>Delete</button>
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

export default ViewApplicationComponent;
