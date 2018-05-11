<template>
  <div class="hello">
    <form action="">
      <div><img src="../assets/logo.png"/><input type="text" placeholder="请输入手机号"></div>
      <div><input type="text" placeholder="请输入验证码"> <span @click="code">获取验证码</span></div>
      <button @click="login">登 录</button>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'login',
    data() {
      return {}
    },
    methods:{
      code:function(){
        alert(0)
      },
      login:function(){
        this.$router.push({path:'makeo'})
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .hello {
    width: 100%;
    position: fixed;
    height: 100%;
    background: rgba(	176,196,222,.5);
    padding: 0px 10% 0 10%;
    div {
      width: 80%;
      height: 50px;
      border: 1px solid grey;
      background-color: #f0f2f5;
      line-height: 50px;
      border-radius: 5px;
      background-color: #fff;
      img {
        vertical-align: text-top;
        width: 30px;
        height: 25px;
        margin: 0px 10px 0px 10px;
      }
      input {
        width: 50%;
        height: 40px;
        border: none;
        background-color: #fff;
        outline: none;
        font-size: 20px;
      }
      span {
        position: relative;
        float: right;
        display: inline-block;
        width: 45%;
        height: 40px;
        color: darkgreen;
        text-align: center;
      }
    }
    div:nth-child(1) {
      margin-top: 50px;
    }
    div:nth-child(2) {
      margin: 20px 0 50px 0;
      text-indent: 8px;
      input {
        border-right: 1px solid grey;
      }
    }
    button {
      width: 80%;
      height: 50px;
      border: 1px solid grey;
      align-items: center;
      padding: 0 auto 0 auto;
      border-radius: 5px;
      color: #f0f2f5;
      background-color: dodgerblue;
      font-size: 20px;
    }
  }
</style>
