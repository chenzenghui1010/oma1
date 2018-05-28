<template>
  <div>
    <ul>
      <li class="input"><small><span>*</span>姓名： </small><input type="text" placeholder="请输入">
        <p><img  src="../assets/delete.png"/></p>
      </li>
      <li class="zjhao" style="height: 70px; border: none;"><small><span>*</span>证件号：</small>
        <select class="zj" name="">
          <option>居民身份证</option>
          <option>驾驶证</option>
        </select>
        <input type="text" placeholder="请输入">
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name:'adds',
    date(){
      return{

      }
    },
    methods:{
      dle:function(){
      }
    }
  }
</script>

<style scoped lang="less">
  ul {
    margin-top: 5px;
    padding: 0 4%;
    li {
      border-bottom: 1px solid floralwhite;
      list-style: none;
      height: 35px;
      line-height: 35px;
      .zj {
        display: inline-block;
        border: none;
        background-color: #fff;
        color: #8c939d;
        outline: none;
      }
      p{
        width: 35px;
        height: 35px;
        display: inline-block;
        float: right;
        /*position:absolute;*/

      }
      small {
        display: inline-block;
        width: 25%;
      }
      input {
        display: inline-block;
        height: 35px;
        border: none;
        outline: none;
        /*background: url("../assets/delete.png") no-repeat;*/
        /*background-position: 100%;*/
      }
      input:nth-child(3){
        width: 75%;
        float:right;
      }
      img{
        height: 20px;
        width: 20px;
       margin: 7px 15px;
      }
    }
    span{
      color: red;
    }
  }

</style>
