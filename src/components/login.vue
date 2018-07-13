<template>
  <div class="hello">
    <div><img src="../assets/poents.png"/>
      <input type="number" pattern="\d*" ref="input" v-model='points' maxlength="11"
             placeholder="请输入手机号">
    </div>
    <div><input type="text" maxlength="6" v-model="verification" placeholder="请输入验证码">
     <p></p>
      <span @click="send">{{content}}</span>
    </div>
    <button @click="login">登 录</button>

  </div>

</template>
<script>

  import {askForSms, phoneLogin} from "../parking";

  import {AlertModule} from 'vux';

  export default {
    components: {
      AlertModule
    },

    name: 'login',

    data() {
      return {
        points: '',
        verification: '',
        // verNum: '获取验证码'
        content: '发送验证码',
        totalTime: 60,
        canClick: true //添加canClick

      }
    },

    created() {
      document.title = '登录'

    },

    mounted() {
      //定焦点
      this.$refs['input'].focus();
    },


    methods: {

      countDown() {
        if (!this.canClick) return  //改动的是这两行代码

        this.canClick = false

        this.content = '重新发送(' + this.totalTime + ')'

        let clock = window.setInterval(() => {

          this.totalTime--

          this.content = '重新发送(' + this.totalTime + ')'
          if (this.totalTime < 0) {
            window.clearInterval(clock)
            this.content = '重新发送验证码'
            this.totalTime = 60
            this.canClick = true  //这里重新开启
          }
        }, 1000)
        askForSms({phone: this.points})
          .then(data => {
          })
          .catch(error => {

          })
      },


      login() {
        if (this.points == '' || this.points == null) {
          AlertModule.show({
            title: '手机号码不可以为空',
          })
          return
        }
        if (!(/^1[3|4|5|7|8][0-9]\d{8}$/.test(this.points))) {
          AlertModule.show({
            title: '手机号码格式不正确',
          })
          return
        }
        if(this.verification.trim().length  < 1 ){
          AlertModule.show({
            title: '验证码信息不能为空',
          })
          return
        }
        if (!(/^\d{6}$/.test(this.verification))) {
          AlertModule.show({
            title: '验证码格式不正确',
          })
          return
        }

        phoneLogin({phone: this.points, verifyCode: this.verification})
          .then(data => {
            if( data.data.redirectUrl  !=''){
              window.location.href=data.data.redirectUrl
              return;
            }
            if (data.data.roleType == 1) {
              this.$router.push({path: 'makeo'})
            }
            if (data.data.roleType == 2) {

             this.$router.push({path: 'audit', query: {userType: '0'}})

            }
            if (data.data.roleType == 3) {

              this.$router.push({path: 'audit', query: {userType: '1'}})
            }
          })
          .catch(message => {
            if (message == '1500') {
              this.$router.push({path: '/'})
              return
            }
            AlertModule.show({
              title: message,
            })
          })
      },
      sendMessage() {

      },
      send() {
        if (!(/^1[3|4|5|7|8][0-9]\d{8}$/.test(this.points))) {
          AlertModule.show({
            title: '手机号码格式不正确',
          })
          this.canClick = true
          return false;
        }
        this.countDown();
      },
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

  input {
    border: 0 !important;
    -webkit-appearance: none !important;
  }

  .weui-cell {
    color: red;
    display: inline-block !important;
    border: none !important;
    width: 40px;
  }

  .hello {
    width: 100%;
    position: fixed;
    height: 100%;
    background: #edf1f3;
    /*background: rgba(176, 196, 222, .5);*/
    padding: 0px 10% 0 10%;
    div {
      width: 80%;
      height: 50px;
      background-color: #f0f2f5;
      line-height: 50px;
      border-radius: 5px;
      background-color: #fff;
      img {
        vertical-align: text-top;
        width: 20px;
        height: 30px;
        margin: -6px 10px 0px 10px;
      }
      input {
        width: 50%;
        height: 40px;
        border: none;
        background-color: #ffffff00;
        outline: none;
        font-size:16px;

      }
      input[type='text']{
        float: left;
        display: inline-block;
        margin-top: 5px;
        margin-left: 15px;

      }

      span {
        display: inline-block;
        float: right;
        width: 40%;
        height: 40px;
        line-height: 50px;
        color: #1d83c5;
        text-align: center;
        font-size: 14px;
      }
      P{
        border-right: 1px solid  #E4E4E4;
        display: inline-block;
        height: 30px;
        margin-top: 10px;
      }
    }
    div:nth-child(1) {
      margin-top: 50px;
    }
    div:nth-child(2) {
      margin: 20px 0 50px 0;
      text-indent: 8px;
      input {
        /*border-right: 1px solid grey;*/
      }
    }
    button {
      width: 80%;
      align-items: center;
      padding: 0 auto 0 auto;
      color: #f0f2f5;
      background-color: #1D83C5;
      font-size: 16px;
    }
  }
</style>
