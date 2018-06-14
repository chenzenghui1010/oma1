<template>
  <div class="audit">
    <div v-if="noData"><p>没有你要审核的数据</p></div>
    <div :class="{shade:shade}"></div>
    <div v-for=" item  in  dataList" class="con">
      <p>{{item.createTime | dateFrm }}</p>
      <ul>
        <li><strong>受访人：{{ item.intervieweeName}}</strong><span @click="details(item.id)">详情</span></li>
        <li>来访人：<span>{{ item.name}}</span></li>
        <li>来访时间：<span>{{ item.startTime | dateFrm}}</span></li>
        <li>随行人：<span>{{ item.follower.length }}</span></li>
        <li>来访事由：<span>{{ item.subject}}</span></li>
      </ul>
      <p>
        <button @click="repulse(item.id)">拒绝</button>
        <button @click="consent(item.id)">同意</button>
      </p>
    </div>
    <div class="alert" v-if="shade">
      <p>填写拒绝原因</p>
      <textarea v-model="reason" cols="37" rows="5" placeholder="请输入 不可以为空">
      </textarea>
      <p class="btn">
        <button class="button" @click="cancel">取消</button>
        <button class="button" @click="confirm">确定</button>
      </p>
    </div>
  </div>
</template>
<script>
  import moment from 'moment'
  import {visitInfoListForInterviewee} from '../parking'


  export default {

    name: 'audit',

    data() {
      return {
        dataList: [],
        status: 0,
        shade: false,
        reason: '',
        userType: '',
        requestUser: '',
        noData:''

      }
    },

    created() {

      alert(this.userType)
      visitInfoListForInterviewee({status: this.userType})
      // let url =  '/mv
      // /visit/visitInfoListForInterviewee'
      // this.$axios.post(url, {
      //   status: this.userType
      // })
        .then(data => {
          this.dataList = data.data.visitInfoList
          console.log(this.dataList);
          console.log(data.resultCode)
          console.log(data.message)
        }).catch(error => {
        console.log(error)
      })
      if (this.dataList.length <= 0) {
        this.noData = true
      }

    },
    mounted() {
    },
    methods: {

      //详情
      details(index) {
        this.$router.push({path: 'audito', query: {visitid: index}})
      },
      //拒绝
      repulse(index) {
        this.index = index;
        this.shade = true
      },
      //同意
      consent(index) {
         this.$route.query.userType == '0' ? auditVisitReserveByInterviewee({
           visitId: index.toString(),
           auditValue: this.$route.query.userType
        }):'/mv/visit/auditVisitReserveByManager'
       .then(res => {

          console.log(res.data)
          if (res.data.resultCode == 0) {
            let ok = '你已审核通过来访申请，请耐心等候来访'
            this.$router.push({path: 'makethree', query: {makethree: ok}})
          } else if (res.data.resultCode == 3010) {

          }
        }).catch(error => {
          console.log(error)
        })

      },
      // 取消
      cancel() {
        this.shade = false
      },
      //确定
      confirm() {
        let url = this.submit
        this.$axios.post(url, {
          visitId: this.index.toString(),
          auditValue: 0
        }).then(res => {

          this.$router.push({path: 'invitationt', query: {reason: this.reason}})

        })
      }
    },

    computed: {
    },
    filters: {
      dateFrm: function (el) {
        return moment(el).format('YYYY-MM-DD HH:mm:ss')
      }
    }

  }
</script>
<style scoped lang="less">

  .shade {
    z-index: 9;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0px;
    top: 0px;
    bottom: 0;
    background-color: rgba(7, 17, 27, 0.5);
  }

  .alert {
    text-align: center;
    position: fixed;
    z-index: 999;
    margin: auto;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
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
      margin-top: -15px;
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

  .audit {
    position: relative;
    background-color: #edf1f3;
    width: 100%;
    p:nth-child(1) {
      line-height: 50px;
      text-align: center;
      color: #b3b3b3;
    }
    div {
      ul {
        background-color: #FFF;
        li {
          padding: 0 5%;
          height: 40px;
          line-height: 40px;
          strong {
            font-size: 18px;
          }
          span {
            display: inline-block;
            float: right;
            color: gray;
          }
        }
        li:nth-child(1) {
          border-bottom: 1px solid #ededed;
        }
        li:nth-child(2) {
          padding-top: 10px;
        }
        li:last-child {
          padding-bottom: 31px;
        }
      }
      p:last-child {
        height: 50px;
        border-top: 1px solid #ededed;
        button {
          border: none;
          height: 60px;
          width: 50%;
          float: left;
          font-size: 18px;
          background: #fff;
          color: #8c939d;
          border-bottom: 1px solid #edf1f3;
        }
        button:nth-child(2) {
          border-left: 1px solid #ededed;
          color: #1E90FF;
        }
      }
    }
  }
</style>
