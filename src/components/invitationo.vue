<template>
  <div class="invitationo">
    <img src="../assets/wx-hardware-logo.jpg"/>
    <div>
      二维码有效期：2018/5/9/7:00至2018/5/9/23:00
    </div>
    <p>在门禁机上扫一扫图中二维码开门</p>
  </div>
</template>
<script>
  export default {
    name: 'invitationo',
    data() {
      return {}
    }
  }
</script>
<style scoped lang="less">
  .invitationo {
    margin-top: 50px;
    text-align: center;
    img{
      height: 350px;
      widht:30px;
    }
    div{
      color: #8c939d;
      font-size: 10px;
    }
    p{
      color: #8c939d;
    }
  }

</style>
