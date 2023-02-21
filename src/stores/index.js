import { createStore } from 'vuex'
import auth from "@/stores/modules/auth.module";
import user from "@/stores/modules/user.module";
const store = createStore({
  state: {},
  actions: {},
  mutations: {},
  modules:{auth, user},
})

export default store
