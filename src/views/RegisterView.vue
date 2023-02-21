<template >
    
        <div class="login_view">
            <form @submit.prevent>
                <div class="username_email">
                    <Input class="input" :type="'email'" :placeholder="'email'" v-model="email"/>
                    <Input  :type="'text'" :placeholder="'username'" v-model="username"/>
                </div>
                <div class="passwords">
                    <Input class="input" :type="'password'" :placeholder="'Password'" v-model="password1"/>
                    <Input  :type="'password'" :placeholder="'Password'" v-model="password2"/>
                </div>
                <button class="btn" @click="registration">Registration</button>
                <p class="login_link" @click="routeLoginPage">Login</p>
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
            password1: '',
            password2: ''
        }
    },
    components: {
        Input
    },
    
    methods: {
      registration(){
        const newUser = {
          username: this.username,
          email: this.email,
          password1: this.password1,
          password2: this.password2
        }
        this.$store.dispatch('REGISTER', newUser)
      },
      routeLoginPage(){
        router.push('/login')
      }
    },
  
    
}
</script>
<style scoped>

.login_view{
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.username_email, .passwords{
    
    display: flex;
    justify-content: space-between;
}
.username_email .input{
  margin-right: 10px;
}
.passwords .input{
  margin-right: 10px;
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
.login_link{
    margin-top: 10px;
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
