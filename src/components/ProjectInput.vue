<template>
  <v-sheet class="mx-auto">
    <v-form @submit.prevent class="d-flex" style="width: 100%;" @submit="addProject()">
      <v-container>
        <v-row>
          <v-col cols="12" md="10">
            <v-text-field style="width: 100%;" v-model="text" :rules="rules" label="Project name"></v-text-field>
          </v-col>
          <v-col cols="12" md="2" width="100px" class="d-flex">
            <v-btn type="submit" block width="100px" height="55px">Submit</v-btn>
          </v-col>

        </v-row>
      </v-container>

    </v-form>
  </v-sheet>
</template>

<script>
export default {
  name: "ProjectInput",
  data: () => ({
    text: '',
    rules: [value => {
      if (value) return true

      return 'You must enter a first name.'
    },],
  }),
  methods: {
    addProject() {

      if (this.text !== '') {
        this.rules = []
        this.$store.dispatch('ADD_PROJECT', this.text)
        if (!this.$store.getters.projectAdd) {
          this.text = ''
        }
      }
    }
  }
}
</script>

<style scoped></style>
