import axios from "@/service/axios";
import tokenService from "@/service/token.service";
const REFRESH_TOKEN_URL = '/api/auth/token/refresh/'
const setup = (store) =>{
    axios.userAxios.interceptors.request.use(
        (config) => {
       const token = tokenService.getAccessToken()
            if (token){
                config.headers['Authorization'] = "Bearer " + token
            }
            return config
    },
        (error) => {
                 return Promise.reject(error)
        }  )
    axios.userAxios.interceptors.response.use(
        (response) => {
                return response ? response: null
        },
        async (error) =>{
            if (error.response.status === 401){
                try {
                    const response = await axios.authAxios.post(  REFRESH_TOKEN_URL, {
                        refresh: tokenService.getRefreshToken()
                    })
                    const accessToken = response.data.access
                    tokenService.setAccessToken(accessToken)
                    error.config.headers[
                        'Authorization'
                        ] = `Bearer ${accessToken}`;
                    return axios.userAxios(error.config)
                } catch (error){
                    return Promise.reject(error)
                }
            }else{
                return error
            }
        }
    )
}

export default setup
