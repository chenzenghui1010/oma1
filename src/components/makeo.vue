<template>
  <div class="makeo">
    <div class="title1">
      <ul class="title1-ul1">
        <li class="titleo">1</li>
        <strong>
          <p/>
        </strong>
        <li>2</li>
        <strong>
          <p/>
        </strong>
        <li>3</li>
      </ul>

      <ul class="title2-ul2">
        <li class="titleo">阅读须知</li>
        <li>填写信息</li>
        <li>确定信息</li>
      </ul>

    </div>
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
    methods: {
      chakan: function () {
        alert("木有文件")
      },
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
      width: 90%;
      background: #edf1f3;
      vertical-align: middle;
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
      justify-content: space-between;
      .titleo {
        background: #67cd57;
      }
      li {
        text-align: center;
        line-height: 40px;
        width: 40px;
        height: 40px;
        background: 	#d4dbdd;
        border-radius: 50%;
        color: #fff;
        font-size: 26px;
      }
    }
    .title2-ul2 {
      width: 87%;
      margin: 5px auto;
      display: flex;
      justify-content: space-between;
      color: 	#d4dbdd;
      .titleo {
        color: #67cd57;
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
        justify-content: space-around;
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
        height: 50px;
        /*display: bloch;*/
        border-radius: 3px;
        border: none;
        color: #FAFAFA;
        background-color: #1d83c5;
        outline: none;
      }
    }
  }
</style>
