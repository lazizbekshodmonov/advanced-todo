import router from "@/router";
import authService from "@/service/auth.service";
import tokenService from "@/service/token.service";

const state = {
    user: null,
    loginError: null
}

const mutations = {
    LOG_OUT: (state) => {
        state.user = null
        localStorage.clear()
        document.cookie.replace(/(?<=^|;).+?(?=\=|;|$)/g,
            name => location.hostname.split('.').reverse().reduce(
                domain => (domain = domain.replace(/^\.?[^.]+/, ''),
                    document.cookie = `${name}=;max-age=0;path=/;domain=${domain}`, domain),
                location.hostname));
    },
    NAVIGATE_HOME: async (state, payload) => {
        state.user = payload
        await router.push('/')
    },
    LOGIN_ERROR: (state, payload) => {
        state.loginError = payload
    }
}
const checkToken = tokenService.getRefreshToken() && tokenService.getAccessToken() ? true : false

const actions = {
    GET_USER_INFO: async (context) => {
        if (checkToken) {
            try {
                const response = await authService.user()
                context.commit('NAVIGATE_HOME', response.data)
            } catch (error) {
                console.log(error)
            }
        }

    },
    AUTH_LOGIN: async (context, payload) => {
        try {
            const response = await authService.login(payload)
            if (response) {
                localStorage.setItem('access_token', response.data.access_token)
                tokenService.setRefreshToken(response.data.refresh_token)
                context.commit('LOGIN_ERROR', null)
                context.commit('NAVIGATE_HOME', response.data.user)
            }
        } catch (error) {
            context.commit('LOGIN_ERROR', error.response.data.non_field_errors[0])
        }
    }
}
const getters = {
    getError(state) {
        return state.loginError
    },
    user(state) {
        return state.user
    }
}
export default {
    state,
    mutations,
    actions,
    getters
}
