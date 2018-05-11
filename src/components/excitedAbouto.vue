<template>
  <div class="excitedo">
    来访邀约
    <div class="company">
      <p class="title1"><span>{{title1}}</span></p>
      <ul>
        <li><small><span>*</span>姓名：</small><input type="text" placeholder="请输入"></li>
        <li><small><span>*</span>手机号： </small><input type="text" placeholder="请输入"></li>
        <li class="zjhao" style="height: 72.5px;"><small><span>*</span>证件号：</small><select class="zj" name="" id="">
          <option>居民身份证</option>
          <option>驾驶证</option>
        </select>
          <input type="text" placeholder="请输入">
        </li>
        <li><small>&nbsp 车牌号：</small>
          <select class="cps" name="" >
            <option>湘</option>
            <option>京</option>
          </select>
          <input class="cpinput" type="text" placeholder="请输入">
        </li>
        <li class="input"><small><span>*</span>公司：</small><input type="text" placeholder="请输入"></li>
        <li><small><span>*</span>来访时间：</small>
          <div class="datebegin">
            <el-date-picker
              type="datetime"
              v-model="dateavlue1"
              placeholder="2018/5/10 16:53">
            </el-date-picker>
          </div>
        </li>
        <li><small><span>*</span>预计离开：</small>
          <div class="dateend">
            <el-date-picker
              type="datetime"
              v-model="dateavlue2"
              placeholder="2018/5/10 23:00">
            </el-date-picker>
          </div>

        </li>
        <li class="input"><small><span>*</span>来访事由：</small> <input type="text" placeholder="请输入"></li>
      </ul>
    </div>
    <div class="suixing">
      <p><span>{{title2}}</span></p>
      <ul>
        <li class="input"><small><span>*</span>姓名：</small><input type="text" placeholder="请输入"></li>
        <li class="zjhao" style="height: 70px; border: none;"><small><span>*</span>证件号：</small>
          <select class="zj" name="">
          <option>居民身份证</option>
          <option>驾驶证</option>
        </select>
          <input type="text" placeholder="请输入">
        </li>
      </ul>
    </div>
    <div class="add">
     <p @click="add"> + 添加随行人员</p>
      <button @click="excited">预 览</button>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'excitedabouto',
    data() {
      return {
        title1: '来访人信息',
        title2: '随行人员信息',
        dateavlue1: '',
        dateavlue2: '',
      }
    },
    methods:{
      add:function(){
        alert(0);
      },
      excited:function(){
        this.$router.push({path:'excitedaboutok'})
      }
    }
  }
</script>
<style scoped lang="less">
  *{
    padding: 0;
    margin: 0;
  }
  .excitedo  {
    .company, .suixing {
      p {
        width: 100%;
        height: 50px;
        background: #f0f7ff;
        span {
          display: inline-block;
          margin: 14px 0 0 4%;
          color: #6f7180;
        }
      }
    }
    .company{
      ul {
        padding: 0 4%;
        li {
          border-bottom: 1px solid #f2f6fc;
          list-style: none;
          height: 38px;
          line-height: 38px;
          small {
            display: inline-block;
            width: 25%;

          }
          .datebegin, .dateend {
            display: inline-block;
          }
          span {
            color: red;
          }
          input {
            display: inline-block;
            width: 74%;
            height: 34px;
            float: right;
            border: none;
            outline: none;
          }
          .cpinput {
            width: 62%;
          }
        }
        li:last-child {
          border: none;
        }
        .zj, .cps {
          display: inline-block;
          height: 38px;
          border: none;
          background-color: #fff;
          color: #8c939d;
          outline: none;
        }
      }
    }
    .suixing {
      ul {
        padding: 0 4%;
        li {
          border-bottom: 1px solid floralwhite;
          list-style: none;
          height: 38px;
          line-height: 38px;
          .zj {
            display: inline-block;
            border: none;
            background-color: #fff;
            color: #8c939d;
            outline: none;
          }
          small {
            display: inline-block;
            width: 25%;
          }
          input {
            display: inline-block;
            width: 74%;
            height: 38px;
            float: right;
            border: none;
            outline: none;
          }
        }
      }
    }
    .add{
      text-align: center;
      width: 100%;
      position: fixed;
      height: 100%;
      background: #f0f7ff;
      color: #1E90FF;
      p{
        margin: 10px 0 10px 0;
      }
      button{
        width: 92%;
        height: 40px;
        background-color: #1E90FF;
        color: #FAFAFA;
        border: none;
        font-size: 16px;
        border-radius: 4px;
        outline: none;
      }
    }
  }
</style>
