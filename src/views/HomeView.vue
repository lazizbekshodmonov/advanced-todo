<template>
  <Navbar />
  <Main/>
</template>

<script>
import { defineComponent } from 'vue';
import Navbar from '@/components/Navbar.vue'
import Main from '@/components/Main.vue'

export default defineComponent({
  name: 'HomeView',

  components: {
    Navbar,
    Main
  },
});
</script>
