import UserService from "@/service/user.service";
import tokenService from "../../service/token.service";
const state = {
    projects: null,
    projectAdd: false
}

const mutations = {
    GET_PROJECTS: (state, payload) => {
        state.projects = payload
    },
    ADD_PROJECT: (state, payload) => {
        state.projectAdd = true
        state.projects = [...state.projects, payload]
        state.projectAdd = false
    },
    LOG_OUT_PROJECTS: (state) => {
        state.projects = null
    }

}
const checkToken = tokenService.getRefreshToken() && tokenService.getAccessToken() ? true : false
const actions = {

    GET_PROJECTS: async (context) => {
        if (checkToken) {
            try {
                const response = await UserService.getProjects()
                context.commit('GET_PROJECTS', response.data)
            } catch (error) {
                console.log(error)
            }
        }

    },
    ADD_PROJECT: async (context, payload) => {
        if (checkToken) {
            try {
                const response = await UserService.addProject(payload)
                context.commit('ADD_PROJECT', response.data)

            } catch (error) {
                console.log(error)
            }
        }
    }
}

const getters = {
    getProjects(state) {
        return state.projects
    },
    projectAdd() {
        return state.projectAdd
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}
