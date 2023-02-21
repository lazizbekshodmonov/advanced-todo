<template >
    
    <div class="login_view">
        <form @submit.prevent>
                <p class="login_error" > {{loginError}}</p>
                <Input class="input" :type="'text'" :placeholder="'username'" v-model="username"/>
                <Input :type="'password'" :placeholder="'Password'" v-model="password"/>
            <button class="btn" @click="authUser">Login</button>
            <div class="rout_register">
                <p class="forgot_password">Forgot password?</p>
                <p class="login_link" @click="routeRegisterPage">Registration</p>
            </div>
        </form>
        
    </div>

</template>
<script>
import Input from '../components/Input.vue'
import router from '../router'
export default {
name: 'Registration',
data() {
    return {
        username: '',
        email: '',
        password: '',
    }
},
components: {
    Input
},
  computed: {
     loginError(){
       return this.$store.getters.getError || ' '
     }
  },

methods: {
  authUser(){
    const User = {
      username: this.username,
      password: this.password
    }
    
    this.$store.dispatch('AUTH_LOGIN', User)
  },
  routeRegisterPage(){
    router.push('/registration')
    console.log('done')
  }
}


}
</script>
<style scoped>
.login_error{
  height: 10px;
  margin-bottom: 15px;
  color: red;
  font-family: sans-serif;
  font-size: 15px;
  text-align: center;
}
.login_view{
width: 100vw;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
}



.btn{
width: 100%;
height: 45px;
background: #20DF7F;
box-shadow: 0 4px 4px rgba(0, 0, 0, 0.3);
border-radius: 10px;
outline: none;
border: none;
font-family: sans-serif;
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 20px;
text-align: center;
text-transform: capitalize;
cursor: pointer;
color: #FFFFFF;
}
.rout_register{
    display: flex;
    margin-top: 10px;
}
.forgot_password{
    margin-right: 10px;
    font-family: sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    text-transform: capitalize;
    cursor: pointer;
}
.login_link{
    font-family: sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    text-transform: capitalize;
    cursor: pointer;
    color: blue;
}


</style>
