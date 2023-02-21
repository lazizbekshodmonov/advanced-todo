<template>
  <div class="main">
    <ProjectInput />
    <Projects />
  </div>
</template>

<script>
import Projects from "../components/Projects.vue";
import ProjectInput from "../components/ProjectInput.vue";
export default {
  name: "Main",
  components: {
    Projects,
    ProjectInput
  }

}
</script>

<style scoped></style>
