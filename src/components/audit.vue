<template>
  <div class="audit">
    <div v-if="dataList.length == 0"><p>没有你要审核的数据</p></div>
    <div :class="{shade:shade}"></div>
    <div v-for=" item  in  dataList" class="con">
      <p class="item"><span>{{item.createTime | dateFrm }}</span></p>
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
      <textarea v-model="reason" cols="37" rows="5"  maxlength="20" placeholder="20字以内">
      </textarea>
      <p class="btn">
        <button class="button" @click="cancel">取消</button>
        <button :disabled="disabled" :class="disabled ?  'disabled':'btn2' " @click="confirm">确定</button>
      </p>
    </div>
  </div>
</template>
<script>
  import moment from 'moment'

  import {AlertModule} from 'vux'
  import {
    visitInfoListForInterviewee,
    auditVisitReserveByInterviewee,
    visitInfoListForManager,
    auditVisitReserveByManager
  } from '../parking'


  export default {

    name: 'audit',
    components: {
      AlertModule,
    },


    data() {
      return {
        dataList: [],
        shade: false,
        reason: '',
        index: '',
        requestUser: '',
        title: '来访审核',
        disabled: true,
        timeOut: '',

      }
    },

    created() {
      // this.isTimeOut();

      document.getElementById('titleId').innerHTML = this.title
      sessionStorage.setItem('usertype', this.$route.query.userType)
      let userType = this.$route.query.userType
      if (userType == '0') {
        visitInfoListForInterviewee({status: userType})
          .then(data => {
            this.dataList = data.data.visitInfoList
            // console.log(this.dataList);
            // console.log(data.resultCode)
            // console.log(data.message)
          })
          .catch(message => {
            AlertModule.show({title: message})
          })
      } else if (userType == '1') {
        visitInfoListForManager({status: userType})
          .then(data => {
            this.dataList = data.data.visitInfoList
            console.log(this.dataList);
            console.log(data.resultCode)
            console.log(data.message)
          })
          .catch(message => {
            AlertModule.show({
              title: message,
            })
            if (message == '没有权限') {
              this.$router.push({path: '/'})
            }
          })
      }

    },
    watch: {
      reason: function (val) {
        val.trim().length > 0 && val.trim().length < 21 ? this.disabled = false : this.disabled = true;

      }
    },
    mounted() {


    },
    methods: {
      startTimer() {
        clearTimeout(this.timeOut)
        this.timeOut = setTimeout(() => {
          AlertModule.show({title: '您太长时间没操作请重新登录'})
          this.$router.push({path: '/'})

        }, 5000)
      },
      isTimeOut() {
        document.body.onclick = this.startTimer;
        // document.body.onmouseup = this.startTimer();
        // document.body.onmousemove = this.startTimer();
        // document.body.onkeyup = this.startTimer();
        // document.body.ontouchend = this.startTimer();
      },


      //详情
      details(index) {
         this.$router.push({path: 'audito', query: {visitid: index, userType: this.$route.query.userType}})
      },
      //拒绝
      repulse(index) {
        this.index = index.toString();
        this.shade = true
      },
      //同意
      consent(index) {
        let type = this.$route.query.userType
        if (type == '0') {
          auditVisitReserveByInterviewee({
            visitId: index.toString(),
            auditValue: 1
          })
            .then(data => {

              console.log(data.data)


              this.$router.push({path: 'makethree', query: {auditResult: 1}})

            })
            .catch(message => {
              AlertModule.show({title: message})
            })
        }
        else if (type == '1') {
          auditVisitReserveByManager({
            visitId: index.toString(),
            auditValue: 1
          })
            .then(data => {

              console.log(data.data)

              this.$router.push({path: 'makethree', query: {auditResult: 1}})

            })
            .catch(message => {

              AlertModule.show({title: message})

            })
        }

      },

      // 取消
      cancel() {
        this.shade = false
      },

      //确定
      confirm() {
        let type = this.$route.query.userType
        if (type == '0') {
          auditVisitReserveByInterviewee({
            visitId: this.index,
            auditValue: 0,
            reason: this.reason
          })
            .then(data => {
              console.log(data.data)
              // this.$router.push({path:'reject'})
              this.$router.push({path: 'makethree', query: {auditResult: 0}})
            })
            .catch(message => {
              AlertModule.show({title: message})
            })
        }
        else if (type == '1') {
          auditVisitReserveByManager({
            visitId: this.index,
            auditValue: 0,
            reason: this.reason
          })
            .then(data => {

              this.$router.push({path: 'makethree', query: {auditResult: 0}})

            })
            .catch(message => {
              AlertModule.show({title: message})
            })
        }
      }
    },


    computed: {},
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
    position: fixed;
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
    background: #fff ;
    p:nth-child(1) {
      margin: 15px 0 19px 0;
      font-size: 16px;
      color: #333 !important;
      background: #fff !important;
    }
    textarea {
      padding: 11px 0 0 10px;
      font-size: 14px;
      /*color: #d7d7d7;*/
      border: 1px solid #d9d9d9;
      margin-bottom: 20px;
    }
    .btn {
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
      }
      button:nth-child(2) {
        float: right;
        border-left: 1px solid gainsboro;
        color: #edf1f3 ;
      }

    }
  }
  .audit {
    position: relative;
    background-color: #edf1f3;
    width: 100%;
    height: 100%;
    p:nth-child(1) {
      line-height: 34px;
      text-align: center;
      background: #edf1f3;
      span{
       
        color: #b3b3b3;
        display: inline-block;
        margin-top:10PX;
        font-size: 12PX;
      
      }
    }
    div {
      ul {
        background-color: #FFF;
        li {
          padding: 0 5%;
          height: 40px;
          line-height: 40px;
          color: #333;
          strong {
            font-size: 16px;
          }
          span {
            display: inline-block;
            float: right;
            color: #999;
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
        height: 45px;
        border-top: 1px solid #EBEBEB;
        button {
          border: none ;
          width: 50%;
          float: left;
          background: #fff;
          color: #999;
          border-radius: 0;
          
        }
        button:last-child{
          color: #1D83C5;
          border-left: 1px solid  #edf1f3 ;
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
