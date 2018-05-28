<template>
  <div class="excitedaboutok">
    <div class="d2">
      <p><span>来访人信息</span></p>
      <ul>
        <li><span>姓名：</span>{{ this.$store.state.iName }}</li>
        <li><span>手机号：</span>{{ this.$store.state.iPoints }}</li>
        <li><span>证件号：</span>{{ this.$store.state.iLicense }} {{ this.$store.state.iLicenseNumber}}</li>
        <li><span>车牌号：</span>{{ this.$store.state.iCar}} {{ this.$store.state.iCarNumber}}</li>
        <li><span>公司：</span>{{ this.$store.state.iCompany }}</li>
        <li><span>来访时间：</span>{{ this.$store.state.iStart }}</li>
        <li><span>预计离开：</span>{{ this.$store.state.iEnd}}</li>
        <li><span>来访事由：</span>{{ this.$store.state.iCause }}</li>
      </ul>
    </div>
    <div class="d3">
      <p><span>随行人信息</span></p>
      <ul>
        <li><span>姓名：</span>李四</li>
        <li><span>证件号：</span>身份证 186546548722151</li>
      </ul>
    </div>

    <div class="footer">
      <p>*在提交访客上去信息前，请确保信息准确无误</p>
      <p>
        <button @click="last">上一步</button>
        <button @click="ok">确定提交</button>
      </p>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'invierpar',
    data() {
      return {}
    },
    methods: {
      last() {
        // history.go(-1) ;
        history.back()

      },
      ok() {
        this.$router.push({path: 'makethree'});
      }
    },

    computed: {

    }

  }
</script>
<style scoped lang="less">
  * {
    padding: 0;
    margin: 0;
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

      li {
        text-align: center;
        line-height: 40px;
        width: 40px;
        height: 40px;
        background: rgba(50,205,50,.8);
        border-radius: 50%;
        color: #fff;
        font-size: 20px;
      }
    }
    .title2-ul2 {
      width: 87%;
      margin: 5px auto;
      display: flex;
      justify-content: space-between;
      color: 	rgba(50,205,50,.8);
    }
  }







  .excitedaboutok {
    height: 100%;
    .d1, .d2, .d3 {
      P {
        width: 100%;
        height: 40px;
        background-color: #f0f7ff;
        span {
          display: inline-block;
          margin: 10px 0 0 10px;
        }
      }
      ul {
        background-color: #fff;
        li {
          padding: 0 0 0 20px;
          color: #8c939d;
          span {
            display: inline-block;
            width: 100px;
            height: 30px;
            color: #000;
          }
        }
      }
    }
    .footer {
      text-align: center;
      width: 100%;
      background: #f0f7ff ;
      position: absolute;
      background: #f0f7ff;
      P {
        margin-top: 30px;
        color: red;
        font-size: 10px;
        padding: 0 10px;
        button {
          font-size: 16px;
          background-color: #1E90FF;
          color: #fff;
          width: 45%;
          height: 45px;
          float: right;
          border: none;
          border-radius: 4px;
          display: inline-block;
          margin-bottom:30px;
        }
        button:nth-child(1) {
          background-color: #fff;
          float: left;
          color: #1E90FF;
        }
      }
    }
  }
</style>
