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
        <li><span>证件号：</span>居民身份证 {{ dataList.identityNo}}</li>
        <li><span>公司：</span>{{ dataList.company}}</li>
      </ul>
      <ul v-for=" ( item , index ) in  dataList.follower">
        <li class="title"><span>随行{{index +1}}</span></li>
        <li><span>姓名：</span>{{item.name}}</li>
        <li style="border: none;"><span>证据号：</span>居民身份证 {{ item.identityNo}}</li>
      </ul>
    </div>
    <footer>
      <button @click="consent">拒绝</button>
      <button @click="repulse ">同意</button>
    </footer>
    <div class="alert" v-if="shade">
      <p>填写拒绝原因</p>
      <textarea v-model="reason" cols="37" rows="5" placeholder="请输入 不可以为空">
      </textarea>
      <p class="btn">
        <button @click="cancel">取消</button>
        <button @click="confirm">确定</button>
      </p>
    </div>
  </div>
</template>
<script>
  import moment from 'moment'
  import {AlertModule} from 'vux'


  export default {

    name: 'audito',
    components: {AlertModule},
    data() {
      return {
        dataList: {},
        shade: false,
        reason: '',
        visitid: this.$route.query.visitid,

      }
    },

    created() {
      let id = this.visitid
      let url = '/mv/visit/getVisitInfoById'
      this.$axios.post(url, {
        visitId: id
      })
        .then(res => {
          if (res.data.resultCode != '0') {
            AlertModule.show({title: res.data.message})
            return
          }
          this.dataList = res.data.data
          console.log(this.dataList)
        })
    },

    methods: {

      //同意
      repulse: function () {

        let url = '/mv/visit/auditVisitReserveByInterviewee'
        this.$axios.post(url, {
          visitId: this.visitid.toString(),
          auditValue: 1
        })
          .then(res => {
            if (res.data.resultCode != '0') {
              AlertModule.show({title: res.data.message})
              return
            }
            if (res.data.resultCode == 0) {
              let ok = '你已审核通过来访申请，请耐心等候来访'
              this.$router.push({path: 'makethree', query: {makethree: ok}})
            } else if (res.data.resultCode == 3010) {
            }
          })
          .catch(error => {
            console.log(error)
          })
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
        let url = '/mv/visit/auditVisitReserveByInterviewee'
        this.$axios.post(url, {
          visitId: this.visitid.toString(),
          auditValue: 0,
        })
          .then(res => {
            if(res.data.resultCode != '0'){
              AlertModule.show({title: res.data.message})
              return
            }
            this.$router.push({path: 'invitationt', query: {reason: this.reason}})
          })
          .catch(error => {
            console.log(error)
          })
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
          font-size: 18px;
          color: #333;
        }
      }
      ul {
        background-color: #fff;
        margin-bottom: 15px;
        height: 100%;
        li {
          height: 40px;
          color: #8c939d;
          span {
            display: inline-block;
            width: 100px;
            color: #000;
          }
        }
      }
      ul:last-child {
        /*margin: 10px 0;*/
        /*border-top: 1px solid #8c939d;*/
      }

    }
    .lai {
      margin-bottom: 50px;
      ul {
        li:last-child {
        }
        .title {
          margin-bottom: 10px;
          height: 36px;
          span {
            width: 4.5rem;
            display: inline-block;
            line-height: 36px;
            text-align: center;
            background: #e4edf4;
            border-radius: 18px;
            color: #1d83c5;
          }
        }
      }
    }
    footer {
      background-color: #edf1f3;
      width: 100%;
      height: 50px;
      /*position: absolute;*/
      bottom: 0;
      button {
        border: none;
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
        color: #d7d7d7;
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
        button:nth-child(2) {
          float: right;
          border-left: 1px solid gainsboro;
          color: #1E90FF;
        }
      }
    }
  }
</style>
