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

<style lang="less">
  @import '~vux/src/styles/reset.less';

  html{
    height: 100%;
  }
  button{
    outline: none;
    font-size: 16px;
    background-color: #1D83C5;
    height: 45px;
    border-radius: 4px;
  }
  
  .weui-dialog__btn_primary{
    color:#1d83c5!important;
  }


  .vux-popup-picker-select, .weui-cell__ft{
    color: #999 !important;
  }
  //title
  .weui-label{
    width: 7rem !important;
    span{
      color: red;
    }
  }
  input::-webkit-input-placeholder {
    color: #d7d7d7;
  }
  .weui-input{
    font-size: 16px !important;
  }
  .vux-label-desc{
    margin-left: 10px !important;
    width: 6.3rem !important;
    display: inline-block;
    font-size: 16px !important;
    color: black !important;
  }
    //下拉
  .vux-popup-picker-select,.weui-cell__ft{
    text-align: left !important;
    color: #d7d7d7;
    font-size: 16px!important;
  }
  .el-checkbox__label{
    color:#999;
  }
  .cat{
    display: inline-block !important;
  }

  input, button, textarea {
    border: 0;
    outline: none;
  }

  * {
    margin: 0;
    padding: 0;
  }

  ul > li {
    list-style: none;
  }
</style>
