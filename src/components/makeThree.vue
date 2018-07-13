<template>
  <div class="makethree">
    <div class="img">
      <img src="../assets/成功@3x.png"/>
      <p class="add"><strong>提交成功</strong></p>
      <p class="left">{{ auditResult }}</p>
    </div>
    <button class="ok" @click="ok">确定</button>
  </div>
</template>
<script>
  export default {
    name: 'makethree',
    data() {
      return {
        auditResult: ''
      }
    },
    created() {
      
      
      let auditResult = this.$route.query.auditResult
      
      if (auditResult == 1 ) {
  
        this.auditResult = '您已审核通过来访申请, 请等候管理员审核'
      }
      else if (auditResult == 2 ) {
  
        this.auditResult = '您已审核通过来访申请, 请耐心等候来访'
        
      }else if (auditResult == 0){
        
        this.auditResult = ' 您已拒绝来访申请'
      }
      
      // this.$route.query.auditResult == 1 ? this.auditResult ='您已审核通过来访申请 请耐心等候来访':this.auditResult=' 您已拒绝来访申请'
    },
    methods: {
      ok: function () {
        history.go(-1)
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
      padding: 0 26%;
      img {
        width: 85px;
        height: 85px;
        text-align: content;
        display: inline-block;
      }
      .add {
        color: #67CB57;
        margin: 20px auto 20px auto;
        font-size: 18px;
      }
      .left {
        color: #999;
      }
    }
    .ok {
      margin-top: 88px;
      width: 90%;
      
      color: #FAFAFA;
      
      border: none;
      
      outline: none;
    }
  }

</style>
