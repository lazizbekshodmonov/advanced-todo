<template>
  <div class="projects">
    <v-container>
      <!-- Projects -->
      <v-expansion-panels>
        <!-- Project -->
        <Project v-if="projects" v-for="project in projects" :key="project.upid" :project="project" />
        <!-- Project -->
      </v-expansion-panels>
      <!-- Projects -->
    </v-container>

  </div>
</template>

<script>
import Project from '@/components/Project.vue'

export default {
  name: "Projects",
  components: {
    Project
  },
  computed: {
    projects() {
      return this.$store.getters.getProjects
    }
  },
  mounted() {
    this.$store.dispatch('GET_PROJECTS')
  }
}
</script>

<style scoped></style>
