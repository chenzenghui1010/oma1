<template>
  <div class="makeo">
    <div class="title1">
      <ul class="title1-ul1">
        <li class="titleo"><img src="../assets/1x.png" height="50" width="50"/></li>
        <strong>
          <p/>
        </strong>
        <li><img src="../assets/2.png" height="50" width="50"/></li>
        <strong>
          <p/>
        </strong>
        <li><img src="../assets/3.png" height="50" width="50"/></li>
      </ul>

      <ul class="title2-ul2">
        <li class="titleo">阅读须知</li>
        <li>填写信息</li>
        <li>确定信息</li>
      </ul>

    </div>
    <div class="con">
      <div class="ss">
        <span class="left">《深圳市公安局警保来访预约协议》</span><span  class="right">点击查看</span>
      </div>
      <el-checkbox v-model="checkbox">{{chevalue}}</el-checkbox>
      <button @click="next">下一步</button>
    </div>
  </div>
</template>
<script>
  import {Step, StepItem, XButton, XHr,AlertModule} from 'vux'


  export default {
    components: {
      Step,
      StepItem,
      XButton,
      XHr,
      AlertModule
    },
    name: 'makeo',
    data() {
      return {
        checkbox: true,
        chevalue: '我已阅读并同意预约协议和须知',
      }
    },
    created(){document.getElementById('titleId').innerHTML='来访预约'},
    methods: {
      next: function () {
        this.checkbox !== true ?  AlertModule.show({
          title: '请认真阅读协议和须知',
        }): this.$router.push({path: 'maket'})

      }
    },
  }
</script>
<style scoped lang="less">
  * {
    margin: 0px;
    padding: 0px;
  }
  strong {
    width: 30%;
    height: 40px;
    text-align: center;
    font-size: 20px;
    p {
      display: inline-block;
      width: 95%;
      background: #edf1f3;
      height: 3px;
    }
  }
  .title1 {
    padding-top: 10px;
    width: 100%;
    height: 80px;
    background: #fff;
    .title1-ul1 {
      width: 80%;
      margin: 0 auto 0 auto;
      display: flex;
      display:-webkit-flex;
      justify-content: space-between;
      -webkit-justify-content: space-between;
    
    }
    .title2-ul2 {
      font-size: 12px;
      width: 80%;
      margin: -8px auto;
      display: flex;
      display:-webkit-flex;
      justify-content: space-between;
      -webkit-justify-content: space-between;
      color: 	#d4dbdd;
      .titleo {
        color: #67CB57;
      }
    }
  }

  .makeo {
    width: 100%;
    position: fixed;
    height: 100%;
    background: #edf1f3;
    .con {
      height: 100%;
      width: 90%;
      margin: 20px auto 0 auto;
      background-color: #ffffff;
      height: 50px;
      line-height: 50px;
      .ss {
        display: flex;
        display:-webkit-flex;
        justify-content: space-around;
        -webkit-justify-content: space-around;
        font-size: 14px;
        .left {
          color: #666;
        }
        .right {
          color: #1d83c5;
        }
      }
      button {
        margin-top: 30px;
        width: 100%;
        border: none;
        color: #FAFAFA;
        outline: none;
        font-size: 16px;
      }
    }
  }
</style>
