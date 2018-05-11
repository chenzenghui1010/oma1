<template>
  <div class="invitationt">
    <img src="../assets/wx-hardware-logo.jpg" /><span></span>
    <p> 很抱歉你的访客申请未通过未通过审核的原因是:</p>
    <p>{{ this.$route.query.names }}</p>
  </div>
</template>

<script>
   export default{
     name:'invitationt',
     data(){
       return{
       }
     }
   }
</script>
<style scoped lang="less">
  .invitationt{
    color: #8c939d;
    margin-top: 50px;
    text-align: center;
    padding: 0 24% 0 24%;
    img{
        widht:100px;
       height:100px;
    }
    P:last-child{
      line-height: 50px;
      border:1px solid #8c939d;
      width: 100%;
      height: 50px;
    }
  }

</style>
