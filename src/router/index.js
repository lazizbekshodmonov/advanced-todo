import { createRouter, createWebHistory } from 'vue-router'
import RegisterView from '@/views/RegisterView.vue'
import LoginView from "@/views/LoginView.vue";
import Settings from "@/views/Settings.vue";
import HomeView from "@/views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HomeView',
      component: HomeView,

    },
    {
      path: '/settings',
      name: 'Settings',
      component: Settings
    },
    {
      path: "/login",
      name: 'Login',
      component: LoginView
    },
    {
      path: '/registration',
      name: 'Registration',
      component: RegisterView
    } ,

  ]
})
// router.beforeEach(async (to, from) => {
//   if (
//       // make sure the user is authenticated
//       !localStorage.getItem('access_token') &&
//       // ❗️ Avoid an infinite redirect
//       to.name !== 'Login'
//   ) {
//     // redirect the user to the login page
//     return { name: 'Login' }
//   }
// })
//  const token = localStorage.getItem('access_token')
// if(token){
//     await  router.push('/profile')
// }




export default router
