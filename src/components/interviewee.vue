<template>
  <div class="maket">
    <div class="title1">
      <ul class="title1-ul1">
        <li class="titleo">1</li>
        <strong>
          <p class="titleo"/>
        </strong>
        <li class="">2</li>
        <strong>
          <p/>
        </strong>
        <li>3</li>
      </ul>

      <ul class="title2-ul2">
        <li class="titleo">受访人信息</li>
        <li>来访人信息</li>
        <li>确定信息</li>
      </ul>
    </div>

    <p class="title"><span>受访人信息</span></p>
    <div class="form">
      <x-input title=" <span>*</span>  姓名：" required="required" v-model="inName" placeholder="请输入"
               is-type="china-name"></x-input>

      <x-input title="  <span>*</span> 手机号：" required="required" mask="99999999999" v-model="inPoints" placeholder="请输入"
               :max="11"
               is-type="china-mobile"></x-input>

      <x-input title="  <span>*</span> 公司：" required="required" v-model="inCompany" placeholder="请输入"></x-input>

      <x-input title="  <span> &nbsp;</span> 部门：" v-model="inDep" placeholder="请输入"></x-input>
    </div>


    <div class="footer">
      <button @click='next'>下一步</button>
    </div>


  </div>
</template>

<script>
  import {XInput, Group, XButton, Cell, Flexbox, AlertModule} from 'vux'
  import {getMyInfo} from "../parking";

  export default {

    components: {XInput, Group, XButton, Cell, Flexbox, AlertModule},
    name: 'interviewee',
    data() {
      return {
        inName: '',
        inPoints: '',
        inCompany: '',
        inDep: '',
        alert:''
      }
    },
    created() {

      document.title = '来访邀约'

      getMyInfo().then(data => {

          this.inName = data.data.personName
          this.inPoints = data.data.phone
          this.inCompany = data.data.company
          this.inDep = data.data.dep
      }).catch(message => {
        AlertModule.show({title: this.alert =message })
      })
    },
    methods: {
      next() {
        let _this = this.$store.dispatch
          _this('inName', this.inName),
          _this('inPoints', this.inPoints),
          _this('inCompany', this.inCompany),
          _this('inDep', this.inDep)

        if (this.inName == '') {
          AlertModule.show({title: this.alert = '请填写姓名'})
          return
        }
        if (this.inName.length < 1) {
          AlertModule.show({title: this.alert = '您填写的姓名不合格'})
          return
        }
        if (this.inPoints == '') {
          AlertModule.show({title: this.alert = '请填写手机号'})
          return
        }
        if (this.inCompany == '') {
          AlertModule.show({title: this.alert = '请填写公司名称'})
          return
        }

        this.$router.push({path:'inviteindex'})
      }
    }

  }
</script>

<style scoped lang="less">


  * {
    margin: 0px;
    padding: 0px;
  }

  .weui-cell {
    height: 45px;
    padding: 10px 15px;
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
        background: #d4dbdd;
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
      color: #d4dbdd;
      .titleo {
        color: #67cd57;
      }
    }
  }

  .maket {
    width: 100%;
    position: fixed;
    height: 100%;
    .btn {
      background-color: #f0f7ff;
      position: fixed;
      height: 100%;
      width: 100%;
    }
    .title {
      background: #edf1f3;
      width: 100%;
      height: 50px;
      color: grey;
      span {
        display: inline-block;
        padding: 20px 0 0 10px;
      }
    }
    .footer {
      padding: 10% 4% 0 4%;
      background-color: #edf1f3;
      width: 92%;
      height: 100%;
      display: flex;
      justify-content: center;
      button {
        justify-items: center;
        background: #1d83c5;
        display: inline-block;
        color: #fff;
        height: 50px;
        width: 45%;
        font-size: 16px;
        border-radius: 3px;
        border: none;
        outline: none;
      }
    }

  }

</style>
