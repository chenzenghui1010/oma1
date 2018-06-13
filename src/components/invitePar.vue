<template>
  <div class="excitedaboutok">
    <div class="d2">
      <p><span>来访人信息</span></p>
      <ul>
        <li><span>姓名：</span>{{ this.$store.state.iName }}</li>
        <li><span>手机号：</span>{{ this.$store.state.iPoints }}</li>
        <li><span>证件号：</span>居民身份证 {{ this.$store.state.iLicenseNumber}}</li>
        <li><span>车牌号：</span>{{ this.$store.state.iCar}} {{ this.$store.state.iCarNumber}}</li>
        <li><span>公司：</span>{{ this.$store.state.iCompany }}</li>
        <li><span>来访时间：</span>{{ this.$store.state.iStart }}</li>
        <li><span>预计离开：</span>{{ this.$store.state.iEnd}}</li>
        <li><span>来访事由：</span>{{ this.$store.state.iCause }}</li>
      </ul>
    </div>
    <div class="d3">
      <p><span>随行人信息</span></p>
      <ul v-for=" item in ifollower ">
        <li><span>姓名：</span>{{ item.iName}}</li>
        <li><span>证件号：</span>居民身份证 {{ item.identityNo.toString() }}</li>
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
  import {AlertModule} from 'vux'
  export default {
    name: 'invierpar',
    components:{AlertModule},
    data() {
      return {
        ifollowers: [],
      }
    },
    created() {
      this.ifollower = this.$store.state.ifollower;

    },

    methods: {
      last() {

        history.back()

      },
      ok() {
        for (let i = 0; i < this.ifollowers.length; i++) {
          if (this.ifollowers[i].identityType == '一代身份证') {
            this.ifollowers[i].identityType = '1'
          } else if (this.ifollowers[i].identityType == '二代身份证') {
            this.ifollowers[i].identityType = '2'
          }
        }

        let url = '/mv/invite/invite'
        this.$axios.post(url, {
          visitorPhone: this.$store.state.phone,
          visitorName: this.$store.state.iName,
          identityNo: this.$store.state.iLicenseNumber,
          identityType: this.identityNo,
          company: this.$store.state.iCompany,
          scheduledInTime: this.$store.state.iStart,
          scheduledOutTime: this.$store.state.iEnd,
          subject: this.$store.state.iCause,
          follower: JSON.stringify(this.$store.state.ifollower)
        })
          .then(res => {

            if(res.data.resultCode != '0'){
              AlertModule.show({title: res.data.message})
              return
            }
            if (res.data.resultCode == '0') {
              this.$router.push({path: 'makethree', query: {'makethree': '你已通过来访申请，请耐心等候来访'}});
            } else if(res.data.resultCode == '2101'){
              AlertModule.show({title: this.alert = res.data.message})
              this.$router.push({path:'/'})
            }
            // console.log(res.data)
            // alert(res.data.resultCode)
            // alert(res.data.message)
          })
          .catch(error => {
            console.log(error)
          })

      }
    },

    computed: {
      identityNo: function () {
        if (this.$store.state.eLicense == '一代身份证') {
          return '1'
        } else if (this.$store.state.eLicense == '二代身份证') {
          return '2'
        } else {
          return '身份证类型错误'
        }
      }
    }

  }
</script>
<style scoped lang="less">
  * {
    padding: 0;
    margin: 0;
  }

  strong {
    width: 30%;
    height: 40px;

    text-align: center;
    font-size: 20px;
    p {
      display: inline-block;
      width: 90%;
      background: #67cd57;
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

      li {
        text-align: center;
        line-height: 40px;
        width: 40px;
        height: 40px;
        background: #67cd57;
        border-radius: 50%;
        color: #fff;
        font-size: 28px;
      }
    }
    .title2-ul2 {
      width: 87%;
      margin: 5px auto;
      display: flex;
      justify-content: space-between;
      color: #67cd57;
    }
  }

  .excitedaboutok {
    height: 100%;
    .d1, .d2, .d3 {
      P {
        width: 100%;
        height: 43px;
        background-color: #edf1f3;
        span {
          display: inline-block;
          margin: 12px 0 0 10px;
          color: #999;
        }
      }
      ul {
        background-color: #fff;
        margin-top: 20px;
        li {
          padding: 0 0 0 20px;
          color: #8c939d;
          margin-bottom: 18px;
          span {
            display: inline-block;
            width: 25%;
            height: 30px;
            color: #333;
          }
        }
      }
    }
    .footer {
      text-align: center;
      width: 100%;
      background: #edf1f3;
      position: absolute;
      background: #edf1f3;
      P {
        margin-top: 20px;
        color: #ea6f6f;
        font-size: 10px;
        padding: 0 10px;

        button {
          font-size: 16px;
          background-color: #1d83c5;
          color: #fff;
          width: 45%;
          height: 45px;
          float: right;
          border: none;
          border-radius: 4px;
          display: inline-block;
          margin-bottom: 30px;
        }
        button:nth-child(1) {
          background-color: #fff;
          float: left;
          color: #1d83c5;
        }
      }
      P:nth-child(1) {
        float: left;
        margin-bottom: 30px;
      }
    }
  }
</style>
