<template>
  <div class="invitationo">
    <img :src="passCode"/>
    <div>
      二维码有效期：{{ validTimeBegin |  dateFrm }}至{{ validTimeEnd |  dateFrm }}
    </div>
    <p>{{ passInfo }}</p>
  </div>
</template>
<script>
  import  moment from 'moment'
  import {AlertModule} from 'vux'
  import { getVisitPassInfo} from "../parking";

  export default {
    name: 'invitationo',
    data() {
      return {
        passCode: '',
        validTimeBegin: '',
        passInfo: '',
        validTimeEnd: '',
        visitId:this.$route.query.visitId,


      }
    },
    created() {
     document.getElementById('titleId').innerHTML='访客邀请函'

      getVisitPassInfo({visitId:this.visitId})
        .then(data => {


          this.passCode = data.data.passCode// 二维码图片地址

          this.passInfo = data.data.passInfo//通信信息

          this.validTimeBegin = data.data.validTimeBegin

          this.validTimeEnd = data.data.validTimeEnd //有效期结束时间

      }).catch(message => {
         AlertModule.show({title: message})
      })
    },


    filters: {
      dateFrm: function (el) {
        return moment(el).format('YYYY-MM-DD HH:mm:ss')
      }
    }
  }
</script>
<style scoped lang="less">
  .invitationo {
    margin-top: 50px;
    text-align: center;
    width: 100%;
    img {
      height: 40%;
      width: 70%;
    }
    div {
      color: #8c939d;
      font-size: 10px;
    }
    p {
      color: #8c939d;
    }
  }

</style>
