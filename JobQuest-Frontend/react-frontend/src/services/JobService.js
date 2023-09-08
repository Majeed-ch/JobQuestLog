import axios from "axios";

const JOB_API_BASE_URL = "http://localhost:8080/api/v1/applications";
class JobService{

    getJobApplications(){
        return axios.get(JOB_API_BASE_URL);
    }

}
//Note: We are exporting object of this class.
//We can directly use object of this class inside a component.
export default new JobService();