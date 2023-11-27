<template>
  <form action="#" class="new-task" @submit.prevent="saveTask">
    <input type="text" class="new-task__input" v-model="taskBody">
    <button type="submit" class="new-task__button">Add</button>
  </form>
</template>

<script>
  import { mapGetters, mapMutations, mapActions } from 'vuex'

  export default {
    computed: {
      ...mapGetters({
        task: 'getTask'
      }),
      taskBody: {
        get () {
          return this.task.body
        },
        set (value) {
          this.setTaskBody(value)
        }
      }
    },
    methods: {
      ...mapMutations({
        setTaskBody: 'setTaskBody'
      }),
      ...mapActions({
        saveTask: 'saveTask'
      })
    }
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
