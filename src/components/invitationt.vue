<template>
  <div class="invitationt">
    <img src="../assets/未通过@3x.png"/><span></span>
    <p> 很抱歉你的访客申请未通过未通过审核的原因是:</p>
    <p>{{ this.$route.query.reason }}</p>
  </div>
</template>

<script>
  import {getVisitPassInfo} from "../parking";

  export default {
    name: 'invitationt',
    data() {
      return {}
    },
    created() {
      document.title = '访客邀请函'
      getVisitPassInfo({visitId:this.$route.query.visitId})
    .
      then(data => {

      })


    }
  }
</script>
<style scoped lang="less">
  .invitationt {
    color: #999;
    text-align: center;
    padding: 0 23% 0 23%;
    img {
      display: inline-block;
      margin-top: 86px;
      margin-bottom: 47px;
      widht: 100px;
      height: 100px;
    }
    P:last-child {
      margin-top: 20px;
      line-height: 70px;
      border: 1px solid #ebebeb;
      width: 100%;
      height: 70px;
      color: #666;
    }
  }

</style>
