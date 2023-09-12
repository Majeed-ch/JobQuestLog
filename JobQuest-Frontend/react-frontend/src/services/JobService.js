import axios from "axios";

const JOB_API_BASE_URL = "http://localhost:8080/api/v1/applications";
const SLASH = "/";
class JobService{

    getJobApplications(){
        return axios.get(JOB_API_BASE_URL);
    }

    addJopApplication(JobApplication){
        return axios.post(JOB_API_BASE_URL, JobApplication)
    }

    getJobApplicationById(applicationId){
        return axios.get(JOB_API_BASE_URL + SLASH + applicationId);
    }

}
//Note: We are exporting object of this class.
//We can directly use object of this class inside a component.
// assigning an instance to resolve the ESLint warning for a rule (import/no-anonymous-default-export)
let jobService = new JobService();

export default jobService