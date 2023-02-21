<template>
    <div class="project">
        <v-expansion-panel>
            <v-expansion-panel-title>{{ project.name }}</v-expansion-panel-title>
            <v-expansion-panel-text>
                <!-- Task -->
                <Task :upid="project.upid" />
                <!-- Task -->
            </v-expansion-panel-text>
        </v-expansion-panel>
    </div>
</template>
<script lang="ts">
import Task from './Task.vue'
export default {
    props: {
        project: {
            type: Object,
            required: true
        }
    },
    components: {
        Task
    }
}
</script>
<style scoped>
.project {
    width: 100%;
}
</style>