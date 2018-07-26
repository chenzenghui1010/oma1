<template>
  <div class="excitedaboutok">

    <div class="title1">
      <ul class="title1-ul1">
        <li><img src="../assets/ok.png" height="50" width="50"/></li>
        <strong>
          <p/>
        </strong>
        <li><img src="../assets/ok.png" height="50" width="50"/></li>
        <strong>
          <p/>
        </strong>
        <li><img src="../assets/ok.png" height="50" width="50"/></li>
      </ul>

      <ul class="title2-ul2">
        <li>阅读须知</li>
        <li>填写信息</li>
        <li>确定信息</li>
      </ul>

    </div>


    <div class="d1">
      <p><span>受访人信息</span></p>
      <ul>
        <li><span>姓名：</span>{{ this.$store.state.mName }}</li>
        <li><span>手机号：</span>{{ this.$store.state.mPoints }}</li>
        <!--<li><span>公司：</span>{{ this.$store.state.mCompany }}</li>-->
        <!--<li><span>部门：</span>{{ this.$store.state.mDepartment }}</li>-->
      </ul>
    </div>
    <div class="d2">
      <p><span>来访人信息</span></p>
      <ul>
        <li><span>姓名：</span>{{ this.$store.state.eName }}</li>
        <li><span>手机号：</span>{{ this.$store.state.ePoints }}</li>
        <li><span>证件号：</span>{{ this.$store.state.eLicense == '请选择' ? '' : this.$store.state.eLicense}} {{ this.$store.state.eLicenseNumber}}</li>
        <li><span>车牌号：</span>{{ this.$store.state.eCarNumber =='请选择' ? '': this.$store.state.eCarNumber}}</li>
        <li><span>公司：</span>{{ this.$store.state.eCompany }}</li>
        <li><span>来访时间：</span>{{ this.$store.state.eStart }}</li>
        <li><span>预计离开：</span>{{ this.$store.state.eEnd}}</li>
        <li><span>来访事由：</span>{{ this.$store.state.eCause }}</li>
      </ul>
    </div>
    <div class="d3">
      <ul v-for=" (item, index)  in  followers ">
        <p><span>随行人{{ index +1}}信息</span></p>
        <li><span>姓名：</span>{{ item.name}}</li>
        <li><span>证件号：</span>{{ item.identityType.toString() }} {{item.identityNo}}
        </li>
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
  import {reserve} from "../parking";

  export default {
    name: 'excitedaboutpok',
    components: {AlertModule},
    data() {
      return {
        followers: [],
        alert: '',
      }
    },
    created() {
      this.followers = this.$store.state.follower;
    },
    computed: {},

    methods: {
      last() {
        history.back()
      },


      submit() {
        let follower = JSON.stringify(this.followers)
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
        reserve({
          intervieweeName:this.$store.state.mName,
          intervieweeTel:this.$store.state.mPoints,
          phone: this.$store.state.ePoints,
          name: this.$store.state.eName,
          identityNo: this.$store.state.eLicenseNumber,
          identityType: this.identityNo,
          company: this.$store.state.eCompany,
          carNo: this.carType,
          scheduledInTime: this.$store.state.eStart,
          scheduledOutTime: this.$store.state.eEnd,
          subject: this.$store.state.eCause,
          follower: JSON.stringify(followerNo),
        })

          .then(data => {
          
            this.$router.push({path: 'visitorSubmitSucceed',query:{auditResult : 0}});
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
     return   this.$store.state.eCar  == '请选择' ? '':  this.$store.state.eCarNumber

      },
      identityNo: function () {
        if (this.$store.state.eLicense == '二代身份证') {
          return '0'
        } else if (this.$store.state.eLicense == '护照') {
          return '1'
        } else if (this.$store.state.eLicense == '港澳通行证') {
          return '2'
        } else if (this.$store.state.eLicense == '驾驶证') {
          return '3'
        } else if (this.$store.state.eLicense == '军官证') {
          return '4'
        } else if (this.$store.state.eLicense == '学生证') {
          return '5'
        } else if (this.$store.state.eLicense == '其他') {
          return '6'
        } else {
          return '身份证类型错误'
        }
      },

      followerType: function () {
        for (let i = 0; i < this.followers.length; i++) {
          if (this.followers[i].identityType == '0') {
            return '二代身份证'
          } else if (this.followers[i].identityType == '1') {
            return '护照'
          } else if (this.followers[i].identityType == '2') {
            return '港澳通行证'
          } else if (this.followers[i].identityType == '3') {
            return '驾驶证'
          } else if (this.followers[i].identityType == '4') {
            return '军官证'
          } else if (this.followers[i].identityType == '5') {
            return '学生证'
          } else if (this.followers[i].identityType == '6') {
            return '其他'
          }
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
      width: 95%;
      background: #67cd57;
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
      li {
        color: #67CB57;
      }
    }
  }

  .excitedaboutok {
    height: 100%;
    .d1, .d2, .d3 {
      P {
        width: 100%;
        height: 44px;
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
          color: #999;
          margin-bottom: 16px;
          margin-top: 20px;
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
        font-size: 12px;
        padding: 0 10px;

        button {
          color: #fff;
          width: 45%;
          float: right;
          border: none;
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
