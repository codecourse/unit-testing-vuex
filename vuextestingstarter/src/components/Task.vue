<template>
  <div class="task">
    <h1 class="task__title">New task</h1>
    <a href="#" class="task__delete">&times;</a>
  </div>
</template>

<script>
  export default {
    //
  }
</script>

<style scoped lang="scss">
  .task {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: flex-end;
    margin-bottom: 5px;

    &__title {
      font-weight: 800;
      font-size: 1.1em;
      margin: 0;
    }

    &__delete {
      color: red;
      text-decoration: none;
      font-weight: 800;
      padding: 5px;
      margin-right: 10px;
    }
  }
</style>
