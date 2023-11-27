<template>
  <form action="#" class="new-task">
    <input type="text" class="new-task__input">
    <button type="submit" class="new-task__button">Add</button>
  </form>
</template>

<script>
  export default {
    //
  }
</script>

<style scoped lang="scss">
  .new-task {
    display: flex;

    &__input, &__button {
      outline: none;
      border: 1px solid #ddd;
      border-radius: 8px;
    }

    &__input {
      font: inherit;
      padding: 8px;
      border-right: 0;
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
      width: 100%;
    }

    &__button {
      background-color: #fff;
      font: inherit;
      font-weight: 500;
      cursor: pointer;
      padding: 0 20px;
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
      transition: background-color, transform 100ms;

      &:hover, &:active {
        background-color: #f9f9f9;
      }

      &:active {
        transform: scale(.95);
      }
    }
  }
</style>
