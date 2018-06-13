<template>
  <div class="hello">
    <div><img src="../assets/poents.png"/>
      <input type="number" pattern="\d*" ref="input" v-model='points' maxlength="11"
             placeholder="请输入手机号">
    </div>
    <div><input type="text" maxlength="6" v-model="verification" placeholder="请输入验证码"> <span
      @click="send">
      {{content}}
    </span>
    </div>
    <button @click="login">登 录</button>

  </div>

</template>
<script>

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
        let url = '/mv/user/askForSms';
        this.$axios.post(url, {
          phone: this.points

        })
          .then(res => {
            if (res.data.resultCode == '0') {
              console.log(res.data)
            }else{
              AlertModule.show({
                title: res.data.message,
              })
            }
          })
          .catch(error => {
            console.log(error)
          })
      },


      login() {
        if (this.points == '') {
          AlertModule.show({
            title: '手机号码不可以为空',
          })
          return
        }
        if (!(/^1[3|4|5|8][0-9]\d{8}$/.test(this.points))) {
          AlertModule.show({
            title: '手机号码格式不正确',
          })
          return
        }
        if (!(/^\d{6}$/.test(this.verification))) {
          AlertModule.show({
            title: '验证码格式不正确',
          })
          return
        }

        let url ='/mv/user/phoneLogin'
        //存入登录手机号
         this.$store.dispatch('phone', this.points)

        this.$axios.post(url, {
          phone: this.points,
          verifyCode: this.verification
          // params:{
          //   phone:this.points,
          //   verifyCode:this.verification
          // }
        }).then(res => {
          if(res.data.resultCode != '0'){

            AlertModule.show({
              title: res.data.message,

            })
            return
          }
          if (res.data.resultCode == '0') {

            console.log(res.data)

            if (res.data.data.redirectUrl != '') {

              window.location.href = res.data.data.redirectUrl
              return;
            }

            if (res.data.data.roleType == 1) {

              this.$router.push({path: 'makeo'})

            }
            if (res.data.data.roleType == 2) {

              this.$router.push({path: 'audit', query: {userType: '0'}})

            }
            if (res.data.data.roleType == 3) {

              this.$router.push({path: 'audit', query: {userType: '1'}})
            }

          }  else {

            AlertModule.show({
              title: '验证码不正确',

            })
          }
        })
          .catch(error => {
            console.log(error)
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
        font-size: 20px;
      }
      input:nth-child(2) {

      }
      span {

        position: relative;
        float: right;
        display: inline-block;
        width: 45%;
        height: 40px;
        color: #1d83c5;
        text-align: center;
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
      height: 50px;
      border: 1px solid grey;
      align-items: center;
      padding: 0 auto 0 auto;
      border-radius: 5px;
      color: #f0f2f5;
      background-color: dodgerblue;
      font-size: 20px;
    }
  }
</style>
