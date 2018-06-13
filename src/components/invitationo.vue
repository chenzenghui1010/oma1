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
  export default {
    name: 'invitationo',
    components:{AlertModule},
    data() {
      return {
        passCode: '',
        validTimeBegin: '',
        passInfo: '',
        validTimeEnd: '',
        visitId:this.getQueryVariable('visitId')
      }
    },
    created() {
      let url =  '/mv/visit/getVisitPassInfo'
      alert(this.getQueryVariable('visitId'))
      this.$axios.post(url, {
        visitId:this.visitId0
      }).then(res => {
        if(res.data.resultCode != '0'){
          AlertModule.show({title: res.data.message})
          return
        }
        if (res.data.resultCode == 0) {
          console.log(res.data.data.passCode)
          this.passCode = res.data.data.passCode// 二维码图片地址

          this.passInfo = res.data.data.passInfo//通信信息


          console.log('你'+res.data.data.validTimeBegin)//有效时间
          this.validTimeBegin = res.data.data.validTimeBegin

          this.validTimeEnd = res.data.data.validTimeEnd //有效期结束时间
        }
      }).catch(error => {
        console.log(error)
      })
    },

    methods:{
      getQueryVariable: function (variable) {
        var query = window.location.search.substring(1);
        var vars = query.split("&");
        for (var i = 0; i < vars.length; i++) {
          var pair = vars[i].split("=");
          if (pair[0] == variable) {
            return pair[1];
          }
        }
        return (false);
      },
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
      height: 45%;
      width: 80%;
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
