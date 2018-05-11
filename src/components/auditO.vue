<template>
  <div class="audito">
    来访审核
    <div class="shou">
      <p><span>受访人信息</span></p>
      <ul>
        <li><span>姓名：</span>李四</li>
        <li><span>手机号：</span>138888888888</li>
        <li><span>部门：</span>开发部</li>
      </ul>
    </div>
    <p></p>
    <div class="lai">
      <p><span>来访人信息</span></p>
      <ul>
        <ul>
          <li><span>姓名：</span>李四</li>
          <li><span>手机号：</span>138888888888</li>
          <li><span>部门：</span>开发部</li>
        </ul>
        <ul>
          <li><span>姓名：</span>李四</li>
          <li><span>手机号：</span>138888888888</li>
          <li><span>部门：</span>开发部</li>
        </ul>
        <ul>

          <li><span>姓名：</span>李四</li>
          <li><span>手机号：</span>138888888888</li>
          <li><span>部门：</span>开发部</li>
        </ul>
      </ul>
    </div>
  </div>
</template>
<script>
  export default{
    name:'audito',
    data(){
      return{

      }
    }
  }
</script>
<style scoped lang="less">
  .audito{
    .shou,.lai {
      padding-left: 10px;
      P {
        width: 100%;
        height: 40px;
        display: flow;
        border-bottom:1px solid gray;
        line-height: 40PX;
        span {
          display: inline-block;
        }
      }
      ul{
        background-color: #fff;
        li{
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
  }
</style>
