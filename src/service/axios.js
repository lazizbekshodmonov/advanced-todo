import axios from "axios";

const serverBaseUrl = 'https://47.254.127.151/'
// const localBaseUrl = "http://127.0.0.1:8000/"
const userAxios = axios.create({
    baseURL: serverBaseUrl,
    headers: {
        'Content-type': 'application/json'
    }

})
const authAxios = axios.create({
    baseURL: serverBaseUrl,
    headers: {
        'Content-Type': 'application/json'
    }
})



export default {
    userAxios,
    authAxios
};
