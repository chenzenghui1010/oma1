<template>
  <div class="makeo">
    <div class="con">
      <div class="ss">
        <span class="left">《深圳市公安局警保来访预约协议》</span><span @click="chakan" class="right">点击查看</span>
      </div>
      <el-checkbox v-model="checkbox">{{chevalue}}</el-checkbox>
      <button @click="next">下一步</button>
    </div>

  </div>
</template>
<script>
  import ElCheckbox from "element-ui/packages/checkbox/src/checkbox";

  export default {
    components: {ElCheckbox},
    name: 'makeo',
    data() {
      return {
        checkbox: true,
        chevalue:'我已阅读并同意预约协议和须知',
      }
    },
    methods: {
      chakan: function () {
        alert("木有文件")
      },
      next:function(){
        this.checkbox !==true?  alert("请阅读协议和须知"): this.$router.push({path:'maket'})

      }
    },
  }
</script>
<style scoped lang="less">
  * {
    margin: 0px;
    padding: 0px;
  }

  .makeo {
    margin-top: 50px;
    padding-top: 20px;
    width: 100%;
    position: fixed;
    height: 100%;
    background: #f0f7ff;
    .con {
      height: 100%;
      width: 90%;
      margin: 0 auto;
      background-color: #ffffff;
      height: 50px;
      line-height: 50px;
      .ss {
        display: flex;
        justify-content: space-around;
        font-size: 14px;
        .left {
          color: grey;
        }
        .right {
          color: rgba(10, 5, 104, 06);
        }
      }
      button{
        width: 100%;
        height: 50px;
        display: bloch;
        border-radius:3px;
        border:none;
        color: #FAFAFA;
        background-color: 	#1E90FF;
        outline: none;
      }
    }
  }
</style>
