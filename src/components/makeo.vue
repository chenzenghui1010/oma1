<template>
  <div class="makeo">
    <div class="title">
      <div><strong class="one">1 </strong>
        <div class="yi"></div>
      </div>
      <div><strong class="tow">2 </strong>
        <div class="yi"></div>
      </div>
      <div><strong class="three ">3</strong></div>
    </div>
    <ul>
      <li class="one">阅读须知</li>
      <li class="tow">填写信息</li>
      <li class="three">确定信息</li>
    </ul>
    <div class="con">
      <div class="ss">
        <span class="left">《深圳市公安局警保来访预约协议》</span><span class="right">点击查看</span>
      </div>
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
      }
    }
  }
</script>
<style scoped lang="less">
  * {
    margin: 0px;
    padding: 0px;
  }

  .makeo {
    padding: 0px 10% 0 10%;
    position: relative;
    div {
      margin-top: 20px;
      display: flex;
      justify-content: center;
      .one, .tow, .three {
        background-color: #8c939d;
        color: #f0f0f0;
        display: inline-block;
        text-align: center;
        line-height: 30px;
        width: 30px;
        height: 30px;
        border: 1px solid #FAFAFA;
        border-radius: 50%;
        font-size: 20px;
        font-weight: bold;
      }
      .yi {
        width: 88px;
        height: 2px;
        margin-top: 15px;
        border-top: 2px solid grey;

      }
      .one {
        background-color: #00ff00;
      }
    }
    ul {
      margin-top: 3px;
      display: flex;
      justify-content: space-between;
      li {
        list-style: none;
      }
      .one {
        color: #00ff00;
      }
      .tow, .three {
        color: #8c939d;
      }
    }
    .con {
      width: 100%;
      left: 0;
      position: fixed;
      height: 100%;
      background: #f0f2f5;
    .ss {
        justify-content: space-between;
        width: 90%;
        height: 50px;
        background-color: #FAFAFA;
        line-height: 50px;
        font-size: 14px;
        .left {
          color: grey;
        }
        .right {
          margin-right: 10px;
          color: rgba(10, 5, 104, 06);
        }
      }
    }
  }
</style>
