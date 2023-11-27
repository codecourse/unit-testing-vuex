<template>
  <div id="app">
    <message></message>
    <tasks></tasks>
  </div>
</template>

<script>
  import Tasks from './components/Tasks'
  import Message from './components/Message'

  export default {
    name: 'app',
    components: {
      Message, Tasks
    }
  }
</script>

<style>
  * {
    box-sizing: border-box;
  }

  body, html {
    height: 100%;
  }

  body {
    margin: 0 40px;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100%;
  }
</style>
