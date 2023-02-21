// import tokenService from "@/service/token.service";
import axios from './axios'
const LOGIN_API_URL =  'api/auth/login/'
const USER_API_URL = '/api/auth/user/'

const AuthService = {
    login({username, password}) {
        return axios.authAxios.post( LOGIN_API_URL, {
            username, password
        })
    },
    user(){
        return axios.userAxios(USER_API_URL)
    }
}

export default AuthService
