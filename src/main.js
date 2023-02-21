import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import store from './stores/index'
import setup from './service/setupInterceptors'
loadFonts()
setup(store)

createApp(App)
  .use(router)
  .use(store)
  .use(vuetify)
  .mount('#app')
