<template>
  <div class="audito">
    <div :class="{shade:shade}"></div>
    <div class="shou">
      <p><span>受访人信息</span></p>
      <ul>
        <li><span>姓名：</span>李四</li>
        <li><span>手机号：</span>138888888888</li>
        <li><span>部门：</span>开发部</li>
      </ul>
    </div>
    <div class="lai">
      <p><span>来访人信息</span></p>
      <ul>
        <li><span>来访时间：</span>2018/5/11 10:00</li>
        <li><span>预计时间：</span>2018/5/11 11:00</li>
        <li><span>来访事由：</span>洽谈项目</li>
      </ul>
      <ul>
        <li>来访人</li>
        <li><span>姓名：</span>李四</li>
        <li><span>手机号：</span>138888888888</li>
        <li><span>证件号：</span>身份证 555782225455</li>
        <li><span>公司：</span>上海雅丰</li>
      </ul>
      <ul>
        <li>随行人1</li>
        <li><span>姓名：</span>李四</li>
        <li style="border: none;"><span>证据号：</span>身份证 5634532453543</li>
      </ul>
    </div>
    <footer>
      <button @click="on">拒绝</button>
      <button @click="ok">同意</button>
    </footer>
    <div class="alert" v-if="shade">
      <p>填写拒绝原因</p>
      <textarea v-model="alertvalue" cols="37" rows="5" placeholder="请输入">
      </textarea>
      <p class="btn">
        <button @click="cancel">取消</button>
        <button @click="confirm">确定</button>
      </p>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'audito',
    data() {
      return {
        shade: false,
        alertvalue: ''
      }
    },
    methods: {
      on: function () {
        this.shade = true;
      },
      ok: function () {
        alert(0);
        this.$router.push({path:'audit'})
      },
      cancel: function () {
        this.shade = false;
        this.alertvalue = '';
      },
      confirm: function () {
        if (this.alertvalue !== '') {
          this.shade = false;
          alert(this.alertvalue)
          this.$router.push({path:'invitationt',query:{names:this.alertvalue}})
        } else {
          alert('请填写拒绝内容')

        }
      }
    }
  }
</script>
<style scoped lang="less">
  .audito {
    background-color: #f0f7ff;
    width: 100%;
    height: 100%;
    position: fixed;
    .shou, .lai {
      padding-left: 10px;
      background-color: #fff;
      P {
        width: 100%;
        height: 40px;
        display: flow;
        border-bottom: 1px solid gray;
        line-height: 40PX;
        margin-bottom: 20px;
        span {
          display: inline-block;
        }
      }
      ul {
        background-color: #fff;
        margin-bottom: 20px;
        li {
          height: 30px;
          color: #8c939d;
          span {
            display: inline-block;
            width: 100px;
            color: #000;
          }
        }
      }
    }
    .lai {
      ul {
        li:last-child {
          border-bottom: 1px solid gray;
        }
      }
    }
    footer {
      background-color: #fff;
      width: 100%;
      height: 50px;
      position: fixed;
      bottom: 0;
      button {
        border: none;
        width: 50%;
        height: 100%;
        background-color: #fff;
        color: #8c939d;
      }
      button:nth-child(2) {
        float: right;
        border-left: 1px solid gainsboro;
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
        margin: 10px 0;
      }
      textarea {
        padding: 5px 0 0 5px;
        font-size: 16px;
        color: #8c939d;
      }
      .btn {
        margin-top: 10px;
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
