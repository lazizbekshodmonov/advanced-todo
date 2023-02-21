import axios from "@/service/axios";


const PROJECTS_API_URL = '/api-v1/projects/'
class UserService {
    getProjects() {
        return axios.userAxios(PROJECTS_API_URL)
    }
    addProject(name) {
        return axios.userAxios.post(PROJECTS_API_URL, { name: name })
    }
}

export default new UserService();
