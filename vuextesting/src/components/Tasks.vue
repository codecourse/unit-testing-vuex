<template>
  <div class="tasks">
    <div class="tasks__list">
      <p v-if="!tasks.length">No tasks, get adding some!</p>
      <task v-else v-for="task in tasks" :key="task.id" :task="task"></task>
    </div>

    <new-task></new-task>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  import Task from './Task'
  import NewTask from './NewTask'

  export default {
    components: {
      Task, NewTask
    },
    computed: {
      ...mapGetters({
        tasks: 'getTasks'
      })
    },
    methods: {
      ...mapActions({
        getTasks: 'getTasks'
      })
    },
    mounted () {
      this.getTasks()
    }
  }
</script>

<style scoped lang="scss">
  .tasks {
    width: 100%;
    max-width: 400px;
    margin: 40px 0;

    &__list {
      margin-bottom: 20px;
    }
  }
</style>
