<template>
  <div class="tasks">
    <div class="tasks__list">
      <p>No tasks, get adding some!</p>
      <task></task>
      <task></task>
      <task></task>
    </div>

    <new-task></new-task>
  </div>
</template>

<script>
  import Task from './Task'
  import NewTask from './NewTask'

  export default {
    components: {
      Task, NewTask
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
