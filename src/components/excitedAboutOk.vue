<template>
  <div class="excitedaboutok">
    <div class="d1">
      <p> <span>受访人信息</span> </p>
      <ul>
        <li><span>姓名：</span>张三</li>
        <li><span>手机号：</span>138888888888</li>
        <li><span>公司：</span>雅丰</li>
        <li><span>部门：</span>开发部</li>
      </ul>
    </div>
    <div class="d2">
      <p><span>来访人信息</span> </p>
      <ul>
        <li><span>姓名：</span>李四</li>
        <li><span>手机号：</span>138888888888</li>
        <li><span>证件号：</span>186546548722151</li>
        <li><span>车牌号：</span>粤A88888</li>
        <li><span>公司：</span>上海雅丰</li>
        <li><span>来访时间：</span>2018/5/11 10:00</li>
        <li><span>预计离开：</span>2018/5/11 11:00</li>
        <li><span>来访事由：</span>洽谈项目</li>
      </ul>
    </div>
    <div class="d3">
      <p> <span>随行人信息</span> </p>
        <ul>
          <li><span>姓名：</span>李四</li>
          <li><span>证件号：</span>身份证 186546548722151</li>
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
  export default{
    name:'excitedaboutpok',
    data(){
        return{
        }
    },
    methods:{
      last:function(){
        history.go(-1);
      },
      ok:function(){
       this.$router.push({path:'makethree'})
      }
    }
  }
</script>
<style  scoped lang="less">
  *{
    padding: 0;
    margin: 0;
  }
  .excitedaboutok{
    .d1,.d2,.d3 {
      P {
        width: 100%;
        height: 40px;
        background-color: #f0f7ff;
        span{
          display: inline-block;
          margin: 10px 0 0 10px;
        }
      }
      ul{
        background-color: #fff;
        li{
          padding: 0 0 0 10px;
          color: #8c939d;
          span{
            display: inline-block;
            width: 100px;
            height: 35px;
            color: #000;
          }
        }
      }
    }
    .footer{
      text-align: center;
      width: 100%;
      position: fixed;
      height: 100%;
      background: #f0f7ff;
      P{
        margin-top: 20px;
        color: red;
        font-size: 10px;
        padding: 0 10px;
        button{
          font-size: 16px;
          background-color: #1E90FF;
          color: #fff;
          width: 45%;
          height: 40px;
          float: right;
          border:none;
          border-radius: 4px;
        }
        button:nth-child(1){
          background-color: #fff;
          float:left;
          color: #1E90FF;
        }
      }
    }
  }
</style>
