<template>
  <div class="excitedaboutok">
    <div class="maket">
      <div class="title1">
        <ul class="title1-ul1">
          <li class="titleo">✓</li>
          <strong>
            <p class="titleo"/>
          </strong>
          <li class="titleo">✓</li>
          <strong>
            <p class="titleo"/>
          </strong>
          <li class="titleo">3</li>
        </ul>

        <ul class="title2-ul2">
          <li class="titleo">受访人信息</li>
          <li class="titleo">来访人信息</li>
          <li class="titleo">确定信息</li>
        </ul>
      </div>
    </div>

    <div class="d1">
      <p><span>受访人信息</span></p>
      <ul>
        <li><span>姓名：</span>{{ this.$store.state.inName}}</li>
        <li><span>手机号：</span>{{ this.$store.state.inPoints}}</li>
        <li><span>公司：</span>{{ this.$store.state.inCompany}}</li>
        <li><span>部门：</span>{{ this.$store.state.inDep}}</li>
      </ul>
    </div>

    <div class="d2">
      <p><span>来访人信息</span></p>
      <ul>
        <li><span>姓名：</span>{{ this.$store.state.iName }}</li>
        <li><span>手机号：</span>{{ this.$store.state.iPoints }}</li>
        <li><span>证件号：</span> {{ this.$store.state.iLicense}} {{ this.$store.state.iLicenseNumber}}</li>
        <li><span>车牌号：</span>{{ this.$store.state.iCar == '请选择'?'':this.$store.state.iCar }} {{ this.$store.state.iCarNumber}}</li>
        <li><span>公司：</span>{{ this.$store.state.iCompany }}</li>
        <li><span>来访时间：</span>{{ this.$store.state.iStart }}</li>
        <li><span>预计离开：</span>{{ this.$store.state.iEnd}}</li>
        <li><span>来访事由：</span>{{ this.$store.state.iCause }}</li>
      </ul>
    </div>
    <div class="d3">
      <p><span>随行人信息</span></p>
      <ul v-for=" item in ifollower ">
        <li><span>姓名：</span>{{ item.name}}</li>
        <li><span>证件号：</span>{{ item.identityType.toString()}} {{ item.identityNo.toString() }}</li>
      </ul>
    </div>

    <div class="footer">
      <p>*在提交访客申请信息前，请确保信息准确无误</p>
      <p>
        <button @click="last">上一步</button>
        <button @click="submit">确定提交</button>
      </p>
    </div>
  </div>
</template>
<script>
  import {AlertModule} from 'vux'
  import {invite} from "../parking";
  export default {
    name: 'invitepar',
    components: {AlertModule},
    data() {
      return {
        ifollower: [],
      }
    },
    created() {
      this.ifollower = this.$store.state.ifollower;
    },

    methods: {
      last() {
        history.back()
      },
      submit() {
        let follower = JSON.stringify(this.ifollower)
        let followerNo = JSON.parse(follower)
        for (let i = 0; i < followerNo.length; i++) {
          if (followerNo[i].identityType == '二代身份证') {
            followerNo[i].identityType = '0'
          } else if (followerNo[i].identityType == '护照') {
            followerNo[i].identityType = '1'
          } else if (followerNo[i].identityType == '港澳通行证') {
            followerNo[i].identityType = '2'
          } else if (followerNo[i].identityType == '驾驶证') {
            followerNo[i].identityType = '3'
          } else if (followerNo[i].identityType == '军官证') {
            followerNo[i].identityType = '4'
          } else if (followerNo[i].identityType == '学生证') {
            followerNo[i].identityType = '5'
          } else if (followerNo[i].identityType == '其他') {
            followerNo[i].identityType = '6'
          }
        }


        invite({

          personName: this.$store.state.inName,
          phone: this.$store.state.inPoints,
          company: this.$store.state.inCompany,
          dep: this.$store.state.inDep,
          carNo: this.carType,
          visitorPhone: this.$store.state.iPoints,
          visitorName: this.$store.state.iName,
          identityNo: this.$store.state.iLicenseNumber,
          identityType: this.identityNo,
          company: this.$store.state.iCompany,
          scheduledInTime: this.$store.state.iStart,
          scheduledOutTime: this.$store.state.iEnd,
          subject: this.$store.state.iCause,
          follower: JSON.stringify(followerNo)
        })

          .then(data => {

            this.$router.push({path: 'visitorSubmitSucceed'});
          })
          .catch(message => {
            if (message == '1500') {
              this.$router.push({path: '/'})
              return
            }
            AlertModule.show({title: this.alert = message})
          })
      }
    },

    computed: {
      carType:function(){
        return   this.$store.state.iCar  == '请选择' ? '': this.$store.state.iCar + this.$store.state.iCarNumber

      },

      identityNo: function () {
        if (this.$store.state.iLicense == '二代身份证') {
          return '0'
        } else if (this.$store.state.iLicense == '护照') {
          return '1'
        } else if (this.$store.state.iLicense == '港澳通行证') {
          return '2'
        } else if (this.$store.state.iLicense == '驾驶证') {
          return '3'
        } else if (this.$store.state.iLicense == '军官证') {
          return '4'
        } else if (this.$store.state.iLicense == '学生证') {
          return '5'
        } else if (this.$store.state.iLicense == '其他') {
          return '6'
        } else {
          return '身份证类型错误'
        }
      },
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
    strong {
      width: 30%;
      height: 40px;
      text-align: center;
      font-size: 20px;
      p {
        display: inline-block;
        width: 90%;
        background: #d4dbdd;
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
          background: #d4dbdd;
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
        color: #d4dbdd;
        .titleo {
          color: #67cd57;
        }
      }
    }
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
