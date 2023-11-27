<template>
  <div class="message" v-if="message">
    {{ message }}
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    computed: {
      ...mapGetters({
        message: 'getMessage'
      })
    }
  }
</script>

<style scoped lang="scss">
  .message {
    position: fixed;
    top: 0;
    left: 0;
    margin-bottom: 40px;
    padding: 20px;
    background-color: #F6B352;
    width: 100%;
    color: #fff;
    font-weight: 800;
    text-align: center;
  }
</style>
