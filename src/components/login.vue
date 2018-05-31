<template>
  <div class="hello">
    <div><img src="../assets/poents.png"/>
      <input type="number" pattern="\d*" ref="input" v-model='points' maxlength="11"
             placeholder="请输入手机号">
    </div>
    <div><input type="text" maxlength="6" v-model="verification" placeholder="请输入验证码"> <span
      @click="send">{{verNum}}</span>
    </div>
    <button @click="login">登 录</button>
  </div>
</template>
<script>
  import {AlertModule} from 'vux'


  export default {
    components: {
      AlertModule
    },
    name: 'login',
    data() {
      return {
        points: '',
        verification: '',
        verNum: '获取验证码'
      }
    },

    created() {

    },

    mounted() {
      //定焦点
      this.$refs['input'].focus();
    },
    methods: {

      login() {
        if (!(/^1[3|4|5|8][0-9]\d{8}$/.test(this.points))) {
          AlertModule.show({
            title: '手机号码格式不正确',
          })
          return false
        }
        if (!(/^\d{6}$/.test(this.verification))) {
          AlertModule.show({
            title: '验证码格式不正确',
          })
          return false
        }

        let url = this.HOST + '/mv/user/phoneLogin'
        this.$axios.post(url, {
          phone: this.points,
          verifyCode: this.verification
          // params:{
          //   phone:this.points,
          //   verifyCode:this.verification
          // }
        }).then(res => {
          if (res.data.resultCode == '0') {
            //存入登录手机号
            this.$store.dispatch('phone', this.points)
            console.log(res.data.message)
            this.$router.push({path: 'audit'})
          } else {
            AlertModule.show({
              title: '验证码不正确',
            })
          }
        })
          .catch(error => {
            console.log(error)
          })
      },
      send() {
        if (!(/^1[3|4|5|7|8][0-9]\d{8}$/.test(this.points))) {
          AlertModule.show({
            title: '手机号码格式不正确',
          })
          return false;
        }
        let url = this.HOST + '/mv/user/askForSms';
        this.$axios.post(url, {
          phone: this.points

        })
          .then(res => {
            if (res.data.resultCode == '0') {
            }

          })
          .catch(error => {
            console.log(error)
          })
      }
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
    background: rgba(176, 196, 222, .5);
    padding: 0px 10% 0 10%;
    div {
      width: 80%;
      height: 50px;
      border: 1px solid grey;
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
      span {
        position: relative;
        float: right;
        display: inline-block;
        width: 45%;
        height: 40px;
        color: darkgreen;
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
