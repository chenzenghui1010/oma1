<template>
  <div class="title1">
    <ul class="title1-ul1">
      <li class="titleo"><img src="../assets/ok.png" height="50" width="50"/></li>
      <strong>
        <p class="ptitleo"/>
      </strong>
      <li class="titleo"><img src="../assets/2x.png" height="50" width="50"/></li>
      <strong>
        <p/>
      </strong>
      <li><img src="../assets/3.png" height="50" width="50"/></li>
    </ul>

    <ul class="title2-ul2">
      <li class="titleo">阅读须知</li>
      <li class="titleo">填写信息</li>
      <li>确定信息</li>
    </ul>
  </div>
</template>

<script>
  export default{
    name:'mtityle',
    date:{
      return:{

      }
    },
    created(){
      document.title='来访预约'
    }
  }
</script>

<style scoped lang="less">

  * {
    margin: 0px;
    padding: 0px;
  }

  strong {
    width: 30%;
    height: 40px;
    text-align: center;
    font-size: 20px;
    p {
      display: inline-block;
      width: 95%;
      background: #d4dbdd;
      height: 3px;
    }
    .ptitleo{
      background: #67CB57;
    }
  }
  .title1 {
    padding-top: 10px;
    width: 100%;
    height: 80px;
    background: #fff;
    .title1-ul1 {
      width: 80%;
      margin: 0 auto 0 auto;
      display: flex;
      justify-content: space-between;
    
    }
    .title2-ul2 {
      font-size: 12px;
      width: 80%;
      margin: -8px auto;
      display: flex;
      justify-content: space-between;
      color: 	#d4dbdd;
      .titleo {
        color: #67CB57;
      }
    }
  }

</style>
