<template>
  <div class="detailsAudit">
    <div class="img">
      <img src="../assets/成功@3x.png"/>
      <p class="add">提交成功</p>
      <p class="left">{{ auditResult }}</p>
    </div>
    <button class="ok" @click="ok">确定</button>
  </div>
</template>
<script>
  export default {
    name: 'detailsAudit',
    data() {
      return {
        auditResult:''
      }
    },
    created(){
      this.$route.query.auditResult == 1 ? this.auditResult ='您已审核通过来访申请 请耐心等候来访':this.auditResult=' 您已拒绝来访申请'
    },
    methods: {
      ok: function () {
        history.go(-2)
      }
    }
  }
</script>
<style scoped lang="less">
  .detailsAudit {
    height: 100%;
    width: 100%;
    position: fixed;
    text-align: center;
    background-color: #edf1f3;
    .img {
      margin-top: 50px;
      padding: 0 26%;
      img {
        text-align: content;
        display: inline-block;
      }
      .add {
        color: #32CD32;
        margin: 20px auto 20px auto;
        font-size: 28px;
      }
      .left {
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
