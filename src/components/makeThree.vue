<template>
  <div class="makethree">
    <div class="img">
      <img src="../assets/wx-hardware-logo.jpg"/>
      <p>您的来访预约已提交成功，我们会尽快审核，请耐心等待</p>
    </div>
    <button class="ok" @click="ok">确定</button>
  </div>
</template>
<script>
  export default {
    name: 'makethree',
    data() {
      return {}
    },
    methods: {
      ok: function () {
        this.$router.push({path:'audito'});
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
    background-color: #f0f7ff;
    .img {
      margin-top: 50px;
      padding: 0 20%;

      img {
        text-align: content;
        display: inline-block;
        width: 180px;
        height: 180px;
      }
      p {
        font-size: 16px;
        color: #8c939d;
      }
    }
    .ok {
      margin-top: 20px;
      width: 90%;
      height: 50px;
      background-color: #1E90FF;
      color: #FAFAFA;
      font-size: 20px;
      border: none;
      border-radius: 4px;
      outline: none;
    }
  }

</style>
