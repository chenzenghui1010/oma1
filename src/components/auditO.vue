<template>
  <div class="audito">
    <div :class="{shade:shade}"></div>
    <div class="shou">
      <p><span>受访人信息</span></p>
      <ul>
        <li><span>姓名：</span>{{ dataList.intervieweeName}}</li>
        <li><span>手机号：</span>{{dataList.intervieweeTel}}</li>
        <li><span>部门：</span>{{dataList.intervieweeDep}}</li>
      </ul>
    </div>
    <div class="lai">
      <p><span>来访人信息</span></p>
      <ul>
        <li><span>来访时间：</span>{{ dataList.startTime | dateFrm }}</li>
        <li><span>预计离开：</span>{{ dataList.endTime | dateFrm }}</li>
        <li><span>来访事由：</span>{{ dataList.subject}}</li>
      </ul>
      <ul>
        <li class="title"><span>来访人</span></li>
        <li><span>姓名：</span>{{ dataList.name}}</li>
        <li><span>手机号：</span>{{ dataList.visitorPhone}}</li>
        <li><span>证件号：</span> {{ dataList.identityNo}}</li>
        <li><span>公司：</span>{{ dataList.company}}</li>
      </ul>
      <ul v-for=" ( item , index ) in  dataList.follower">
        <li class="title"><span>随行{{index +1}}</span></li>
        <li><span>姓名：</span>{{item.name}}</li>
        <li style="border: none;"><span>证件号：</span>{{ item.identityNo}}</li>
      </ul>
    </div>
    <footer>
      <button @click="consent">拒绝</button>
      <button @click="repulse ">同意</button>
    </footer>
    <div class="alert" v-if="shade">
      <p>填写拒绝原因</p>
      <textarea v-model="reason" maxlength="20" cols="37" rows="5" placeholder="20字以内">
      </textarea>
      <p class="btn">
        <button @click="cancel">取消</button>
        <button :disabled="disabled" :class="disabled ?  'disabled':'btn2' " @click="confirm">确定</button>
      </p>
    </div>
  </div>
</template>
<script>
  import moment from 'moment'
  import {AlertModule} from 'vux'
  import {getVisitInfoById, auditVisitReserveByInterviewee, auditVisitReserveByManager} from "../parking";

  export default {
    name: 'audito',
    components: {AlertModule},
    data() {
      return {
        dataList: {},
        shade: false,
        reason: '',
        detailsId: this.$route.query.visitid.toString(),
        userType: this.$route.query.userType,
        disabled: true,
      }
    },
    created() {
      getVisitInfoById({
        visitId: this.detailsId
      })
        .then(data => {
          this.dataList = data.data
          console.log(this.dataList)
        })
        .catch(message => {
          if (message == '1500') {
            this.$router.push({path: '/'})
            return
          }
          AlertModule.show({title: message})

        })
    },

    watch: {
      reason: function (val) {
        (val.trim().length > 0 && val.trim().length < 21 ) ? this.disabled = false : this.disabled = true
      }
    },
    methods: {

      //同意
      repulse: function () {
        if (this.userType == '0') {
          auditVisitReserveByInterviewee({
            visitId: this.detailsId,
            auditValue: 1
          })
            .then(data => {

              console.log(data.data)


              // this.$router.push({path: 'detailsAudit', query: {auditResult: 1}})
              data.data.status  == '1' ? this.$router.push({path: 'makethree', query: {auditResult: 1}})  : this.$router.push({path: 'makethree', query: {auditResult: 2}})
            })
            .catch(message => {
            
              if (message == '1500') {
                this.$router.push({path: '/'})
                return
              }
              AlertModule.show({title: message})
            })
        }
        else if (this.userType == '1') {
          auditVisitReserveByManager({
            visitId: this.detailsId,
            auditValue: 1
          })
            .then(data => {

              console.log(data.data)
              
                this.$router.push({path: 'makethree', query: {auditResult: 2}})
            })
            .catch(message => {
              AlertModule.show({title: message})
              if (message == '没有权限') {
                this.$router.push({path: '/'})
              }
            })
        }
      },


      //拒绝
      consent: function () {
        this.shade = true
      },

      //取消
      cancel: function () {
        this.reason = '';
        this.shade = false;
      },

      //确定
      confirm: function () {

        if (this.userType == '0') {
          auditVisitReserveByInterviewee({
            visitId: this.detailsId,
            auditValue: 0,
            reason: this.reason
          })
            .then(data => {
              
              this.$router.push({path: 'makethree', query: {auditResult: 0}})
            })
            .catch(message => {
             
              if (message == '1500') {
                
                this.$router.push({path: '/'})
                
                return
              }
              
              AlertModule.show({title: message})
            })
        }
        else if (this.userType == '1') {
          auditVisitReserveByManager({
            visitId: this.detailsId,
            auditValue: 0,
            reason: this.reason
          })
            .then(data => {
              this.$router.push({path: 'makethree', query: {auditResult: 0}})

            })
            .catch(message => {
              if (message == '1500') {
                this.$router.push({path: '/'})
                return
              }
              AlertModule.show({title: message})
              
            })
        }
      }
    },


    computed: {},

    //转换时间插件
    filters: {
      dateFrm: function (el) {
        return moment(el).format('YYYY-MM-DD HH:mm:ss')
      }
    }
  }
</script>
<style scoped lang="less">

  .audito {
    background-color: #edf1f3;
    width: 100%;
    height: 100%;
    position: relative;
    .shou, .lai {
      padding-left: 10px;
      background-color: #fff;
      P {
        color: #333;
        width: 100%;
        height: 40px;
        display: flow;
        border-bottom: 1px solid #ededed;
        line-height: 40PX;
        margin-bottom: 20px;
        span {
          display: inline-block;
          font-size: 16px;
          color: #333;
        }
      }
      ul {
        background-color: #fff;
        margin-bottom: 15px;
        height: 100%;
        li {
          font-size: 14px;
          height: 40px;
          color: #999;
          span {
            display: inline-block;
            width: 100px;
            color: #000;
          }
        }
      }
      ul:last-child {
      }

    }
    .lai {
      margin-bottom: 50px;
      ul {
        li:last-child {
        }
        .title {
          margin-bottom: 10px;
          height: 30px;
          margin-top: -10px;
          span {
            
            width: 60px;
            display: inline-block;
            line-height: 18px;
            text-align: center;
            background: #e4edf4;
            border-radius: 18px;
            color: #1d83c5;
            font-size: 12px;
          }
        }
      }
    }
    footer {
      background-color: #edf1f3;
      width: 100%;
      height: 45px;
      bottom: 0;
      button {
        border: none;
        border-radius: 0;
        width: 50%;
        height: 100%;
        background-color: #fff;
        color: #999;
        font-size: 20px;
      }
      button:nth-child(2) {
        float: right;
        border-left: 1px solid #ededed;
        color: #1E90FF;
      }
    }

    .shade {
      z-index: 9;
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0px;
      top: 0px;
      background-color: rgba(7, 17, 27, 0.5);
    }

    .alert {
      text-align: center;
      position: absolute;
      z-index: 99;
      margin: -450px 5% 0 5%;
      width: 90%;
      height: 200px;
      background: #fff;
      p:nth-child(1) {
        margin: 15px 0 19px 0;
        font-size: 16px;
        color: #333;
      }
      textarea {
        padding: 11px 0 0 10px;
        font-size: 14px;
        border: 1px solid #d9d9d9;
        margin-bottom: 20px;
      }
      .btn {
        /*margin-top: 20px;*/
        width: 100%;
        height: 29%;
        border-top: 1px solid gainsboro;
        button {
          height: 100%;
          width: 50%;
          bottom: 0;
          border: none;
          float: left;
          background: #fff;
          color: gray;
          font-size: 20px;
        }
        .disabled {
          color: #8c939d;
        }
        .btn2 {
          border-left: 1px solid #ededed;
          color: #1E90FF;
        }
      }
    }
  }
</style>
