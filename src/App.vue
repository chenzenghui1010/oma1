<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
}
  .el-input--small .el-input__inner{
    border: none;
  }
  input,button,textarea{
    outline: none;
  }
  *{
    margin: 0;
    padding: 0;
  }
  ul>li{
    list-style: none;
  }
</style>
