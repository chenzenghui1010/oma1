<template>
  <div class="audit">
    <div v-for=" item  in datas" class="con">
      <p>{{item.date}}</p>
      <ul>
        <li><strong>{{ item.shou}}</strong><span @click="xiangq">{{ item.xiangq}}</span></li>
        <li>{{ item.lai}}<span>{{ item.name}}</span></li>
        <li>{{ item.laidate}} <span>{{ item.laidate}}</span></li>
        <li>{{ item.sui}}<span>{{ item.rennum}}</span></li>
        <li>{{ item.laishi}}<span></span></li>
      </ul>
      <p>
        <button>拒绝</button>
        <button>同意</button>
      </p>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'audit',
    data() {
      return {
        datas: [{
          date: '5月11日 下午4：00',
          shou: '受访人：赵四',
          lai: '来访人:',
          laidate: '来访时间:',
          sui: '随行人员:',
          laishi: '来访事由:',
          xiangq: '详情',
          name: '王五',
          laidate: '2018/5/10 14:00',
          rennum: '4人'
        },
          {
            date: '5月11日 下午8：00',
            shou: '受访人：赵四2',
            lai: '来访人2:',
            laidate: '来访时间2:',
            sui: '随行人员2:',
            laishi: '来访事由2:',
            xiangq: '详情2',
            name: '王五2',
            laidate: '2018/5/10 11:00',
            rennum: '4人2'
          }],
      }
    },
    methods: {
      xiangq:function(){
        this.$router.push({path:'audito'})
      }
    }
  }
</script>
<style scoped lang="less">
  .audit {
    background-color: #f0f7ff;
    width: 100%;
    height: 100%;
    position: fixed;
    p:nth-child(1) {
      margin: 20px;
      text-align: center;
    }
    div {
      ul {
        background-color: #FFF;
        li {
          padding: 0 5%;
          height: 40px;
          line-height: 40px;
          span {
            display: inline-block;
            float: right;
            color: gray;
          }
        }
        li:nth-child(1){
          border-bottom: 1px solid gainsboro;
      }
      }
      p:last-child {
        height: 50px;
        border-top: 1px solid gray;
        button {
          border: none;
          height: 60px;
          width: 50%;
          float: left;
          font-size: 18px;
          background: #fff;
          color: #8c939d;
        }
        button:nth-child(2) {
          border-left: 1px solid gainsboro;
          color: #1E90FF;
        }
      }
    }
  }
</style>
