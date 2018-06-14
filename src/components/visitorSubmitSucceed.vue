<template>
  <div class="visitorSubmitSucceed">
    <div class="img">
      <img src="../assets/成功@3x.png"/>
      <p class="add">提交成功</p>
      <p class="left">{{this.$route.query.makethree}} &nbsp; &nbsp; </p>
    </div>
    <button class="ok" @click="ok">确定</button>
  </div>
</template>
<script>
  export default {
    name: 'visitorSubmitSucceed',
    data() {
      return {}
    },
    methods: {
      ok: function () {
        this.$router.push({path:'makeo'})
      }
    }
  }
</script>
<style scoped lang="less">
  .visitorSubmitSucceed {
    height: 100%;
    width: 100%;
    position: fixed;
    text-align: center;
    background-color: #edf1f3;
    .img {
      margin-top: 50px;
      padding: 0 20%;
      img {
        text-align: content;
        display: inline-block;
      }
      .add {
        color: #32CD32;
        margin: 20px auto 50px auto;
        font-size: 28px;
      }
      .left {
        float: left;
        color: #999;
      }
    }
    .ok {
      margin-top: 88px;
      width: 90%;
      height: 60px;
      background-color: #1d83c5;
      color: #FAFAFA;
      font-size: 20px;
      border: none;
      border-radius: 6px;
      outline: none;
    }
  }

</style>
