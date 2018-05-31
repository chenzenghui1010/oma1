<template>
  <div class="audit">
    <div v-for=" (item,index)  in dataList.visitInfoList" class="con">
      <div>
        <p>{{item.intervieweeName}}</p>
        <ul>
          <li><strong>受访人：{{ item.intervieweeName}}</strong><span @click="xiangq(visitId)">详情</span></li>
          <li>来访人：<span>{{ item.visitorName}}</span></li>
          <li>来访时间：<span>{{ item.scheduledInTime}}</span></li>
          <li>随行人：<span></span></li>
          <li>来访事由：<span>{{ item.subject}}</span></li>
        </ul>
        <p>
          <button @click="no">拒绝</button>
          <button>同意</button>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'audit',
    data() {
      return {
        dataList: [],
        visitInfoList: [],
      }
    },

    created() {
      let url = this.HOST + '/mv/visit/visitInfoListForInterviewee'
      this.$axios.post(url, {})
        .then(res => {
          this.dataList = res.data
          console.log(res.data.resultCode)
          console.log(res.data.message)
          console.log(res.data)
        })
    },
    methods: {

      xiangq: function (visitId) {
        alert(this.dataList[visitId].intervieweeName)
        this.$router.push({path: 'audito', query: {}})
      },
      no() {
        alert(0);
      }
    },
    computed: {

      List: function () {
        for (let i = 0; i < this.dataList.length; i++) {
          this.List = this.dataList[i].visitInfoList
        }

      }
    }

  }
</script>
<style scoped lang="less">
  .audit {
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
