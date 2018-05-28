<template>
  <div class="makethree">
    <div class="img">
      <img src="../assets/成功@3x.png"/>
      <p class="add">提交成功</p>
      <p class="left">您的来访预约申请已提交成功，</p>
      <p class="left">我们会尽快审核，请耐心等待</p>
    </div>
    <button class="ok" @click="ok">确定</button>
  </div>
</template>
<script>
  export default {
    name:'makethree',
    data() {
      return {}
    },
    methods: {
      ok: function () {
        this.$router.push({path:'audit'});
      }
    }
  }
</script>
<style scoped lang="less">
  .makethree {
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
      .add{
        color: 	#32CD32;
        margin: 20px auto 50px auto;
        font-size: 28px;
      }
      .left{
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
