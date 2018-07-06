<template>
  <div class="visitorSubmitSucceed">
    <div class="img">
      <img src="../assets/成功@3x.png"/>
      <p class="add"><strong>提交成功</strong></p>
      <p class="left">您的来访预约申请已提交成功，我们会尽快审核,请耐心等候 &nbsp;  &nbsp;</p>
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
        wx.closeWindow()
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
        width: 85px ;
        height: 85px;
        text-align: content;
        display: inline-block;
      }
      .add {
        color: #67CB57;
        margin: 20px auto 10% auto;
        font-size: 18px;
      }
      .left {
        float: left;
        color: #999;
      }
    }
    .ok {
      margin-top: 20%;
      width: 90%;
      color: #fff;
      border: none;
      outline: none;
    }
  }

</style>
