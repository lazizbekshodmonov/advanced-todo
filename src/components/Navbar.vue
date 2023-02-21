<template>
  <nav class="navbar">

    <div class="user">
      <div class="user_info" v-if="user">
        <h4 class="user_name">{{ this.user.username }}</h4>
        <p class="user_email">{{ this.user.email }}</p>
      </div>
      <div class="login" v-else-if="!user">
        <button class="" @click="pushLoginPage">Login</button>
      </div>
      <div class="logo" @click="onToggle">
        <img src="../components/icons/user-icon.png" alt="">
        <div v-if="this.getToggle" class="user_settings">
          <button>
            Settings
          </button>
          <button @click="logOut">
            Log out
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import router from "@/router";

export default {
  name: "Navbar",
  data() {
    return {
      toggle: false
    }
  },

  computed: {
    user() {
      return this.$store.getters.user
    },
    getToggle() {
      return this.toggle
    }
  },
  methods: {
    logOut() {
      this.$store.commit('LOG_OUT')
      this.$store.commit('LOG_OUT_PROJECTS')
    },
    onToggle: function () {
      this.toggle = !this.toggle
    },
    pushLoginPage: function () {
      router.push('/login')
    }
  },
  mounted: function () {
    if (!this.$store.getters.user) {
      this.$store.dispatch('GET_USER_INFO')
    }
  }
}
</script>

<style scoped>
.navbar {
  box-sizing: border-box;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 50px;
  padding: 5px;
  border-bottom: #464444 solid 1px;
}

.logo {
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-left: 10px;

}

.logo img {
  width: 40px;
  cursor: pointer;

}

.login {
  display: flex;
  align-items: center;

}

.login button {
  cursor: pointer;
  font-family: sans-serif;
  color: #2f2e2e;
  font-weight: bold;
  border: none;
  font-size: 20px;
  background: white;
}

.user {
  display: flex;
  margin-right: 15px;
}

.user .user_name,
.user_email {
  font-family: sans-serif;
  color: #2f2e2e;
}

.user_settings {
  position: absolute;
  top: 50px;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 90px;
  height: 90px;
  background: #737171;
  border-radius: 4px;
  z-index: 999;
}

.user_settings button {
  width: 100%;
  height: 30px;
  background: #9a9494;
  border: none;
  cursor: pointer;
  font-weight: 700;
  font-family: sans-serif;
}
</style>
