<template>
  <div class="maket">
    <p class="title"><span>{{title}}</span></p>
    <div class="con">
      <p><span>*</span>姓名 : <input type="text" placeholder="请输入"></p>
      <p><span>*</span>手机号码 : <input type="text" placeholder="请输入"></p>
      <p><span>*</span>公司 : <input type="text" placeholder="请输入"></p>
      <p class="xia"> &nbsp 部门 :<input type="text" placeholder="请输入"></p>
    </div>
    <div class="footer">
      <button @click="last1">上一步</button><button @click='next1'>下一步</button>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        title: '受访人信息'
      }
    },
    methods: {
      last1:function(){
        alert("000");
        history.go(-1);
      },
      next1:function(){
        this.$router.push({path:'makethree'})

      }
    }
  }
</script>
<style scoped lang="less">
  * {
    margin: 0px;
    padding: 0px;
  }
  .maket {
    margin-top: 50px;
    width: 100%;
    position: fixed;
    height: 100%;
    .title {
      padding: 0 4%;
      background: #f0f7ff;
      width: 100%;
      height: 50px;
      color: grey;
      span {
        display: inline-block;
        padding: 20px 0 0 10px;
      }
    }
    .con {
      padding: 0 4%;
      p {
        line-height: 50px;
        height: 50px;
        border: none;
        border-bottom: 1px solid gray;
        span {
          color: red;
           text-indent: 2px;
        }
        input {
          display: inline-block;
          width: 70%;
          height: 45px;
          float: right;
          border: none;
          outline: none;
          font-size: 20px;
        }
      }
      .xia{
        border: none;
      }
    }
    .footer{
      padding: 0 4%;
      background-color: #f0f7ff;
      width: 92%;
      height: 100%;
      padding-top: 20px;
      display: flex;
      justify-content: space-between;
      button{
        background-color: #fff;
        display: inline-block;
        color: #1E90FF;
        height: 50px;
        width: 45%;
        border-radius: 2px;
        border:none;
        outline: none;
        /*&:hover{*/
          /*background-color: #1E90FF;*/
          /*color: #FAFAFA;*/
        /*}*/
      }
    }
  }

</style>
