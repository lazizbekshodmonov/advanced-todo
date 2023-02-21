<template>
    <div class="task">
        <v-expansion-panels>
            <v-expansion-panel>
                <v-expansion-panel-title>Task</v-expansion-panel-title>
                <!-- Sub tasks -->
                <v-expansion-panel-text>
                    Sub task
                </v-expansion-panel-text>
                <!-- Sub tasks -->
            </v-expansion-panel>
        </v-expansion-panels>
    </div>
</template>

<script lang="ts">

export default {
    name: 'Task',
    props: {
        upid: {
            type: Number,
            required: true
        }
    }
}
</script>
<style scoped>
.task {
    width: 100%;
}
</style>