
import router from "@/router";

const TokenService  = {
    getAccessToken(){
       return  localStorage.getItem('access_token')
    },

    getRefreshToken() {
            const nameEQ = "refresh_token=";
            const ca = document.cookie.split(';');
            for(let i=0;i < ca.length;i++) {
                let c = ca[i];
                while (c.charAt(0)===' ') c = c.substring(1,c.length);
                if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length,c.length);
            }
            return null;
        },

    setRefreshToken(token) {
            document.cookie = "refresh_token=" + (token)
        },

    setAccessToken(token){
        localStorage.setItem('access_token', token)
    }

}

export default TokenService;
