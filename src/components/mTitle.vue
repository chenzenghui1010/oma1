<template>
  <div class="title1">
    <ul class="title1-ul1">
      <li class="titleo">✓</li>
      <strong>
        <p class="titleo"/>
      </strong>
      <li class="titleo">2</li>
      <strong>
        <p/>
      </strong>
      <li>3</li>
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
      width: 90%;
      background: #d4dbdd;
      vertical-align: middle;
      height: 3px;
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
      .titleo {
        background: #67cd57;
      }
      li {
        text-align: center;
        line-height: 40px;
        width: 40px;
        height: 40px;
        background: 	#d4dbdd;
        border-radius: 50%;
        color: #fff;
        font-size: 26px;
      }
    }
    .title2-ul2 {
      width: 87%;
      margin: 5px auto;
      display: flex;
      justify-content: space-between;
      color: 	#d4dbdd;
      .titleo {
        color: #67cd57;
      }
    }
  }

</style>
