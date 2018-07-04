<template>
  <div class="maket">

    <mtitle></mtitle>

    <p class="title"><span>{{title}}</span></p>
    <div class="form">
      <x-input title=" <span>*</span>  姓名：" required="required" v-model="mName" placeholder="请输入"
               is-type="china-name"></x-input>

      <x-input title="  <span>*</span> 手机号：" required="required" mask="99999999999" v-model="mPoints" placeholder="请输入"
               :max="11"
               is-type="china-mobile"></x-input>

      <x-input title="  <span>*</span> 公司：" required="required" v-model="mCompany" placeholder="请输入"></x-input>

      <x-input title="  <span> &nbsp;</span> 部门：" v-model="mDepartment" placeholder="请输入"></x-input>
    </div>


    <div class="footer">
      <button @click="last">上一步</button>
      <button @click='next'>下一步</button>
    </div>


  </div>
</template>
<script>
  import {XInput, Group, XButton, Cell, Flexbox, AlertModule} from 'vux'
  import mtitle from './mTitle'
  import {reserveForInterviewee} from "../parking";

  export default {

    components: {
      AlertModule,
      mtitle,
      XInput,
      XButton,
      Group,
      Cell,
      Flexbox,
    },
    data() {
      return {
        title: '受访人信息',
        mName: this.$store.state.mName,
        mPoints:this.$store.state.mPoints,
        mCompany:this.$store.state.mCompany,
        mDepartment: this.$store.state.mDepartment,
        alert: '',
        a:1
      }
    },
    created(){
      document.title='来访预约'
    },

    computed: {
      ename() {
        return this.$store.state.mName;
      }
    },
    methods: {
      last: function () {

         history.go(-1);
      },

      next: function () {
        this.$store.commit('mName', this.mName);
        this.$store.commit('mPoints', this.mPoints);
        this.$store.commit('mCompany', this.mCompany)
        this.$store.commit('mDepartment', this.mDepartment)
        if (this.mName == '') {
          AlertModule.show({title: this.alert = '请填写姓名'})
          return
        }
        if (this.mName.length < 1) {
          AlertModule.show({title: this.alert = '姓名格式不正确'})
          return
        }
        if (this.mPoints == '') {
          AlertModule.show({title: this.alert = '请填写手机号码'})
          return
        }
        if (this.mCompany == '') {
          AlertModule.show({title: this.alert = '请填写公司'})
          return
        }

        reserveForInterviewee({
          intervieweeName: this.mName,
          intervieweeTel: this.mPoints,
          company: this.mCompany,
          department: this.mDepartment
        })

          .then(data => {
            console.log(data)
            this.$router.push({path: 'excitedabouto'})
          })
          .catch(message => {
            AlertModule.show({title: this.alert = message})
          })
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
      padding: 30px 4% 0 4%;
      background-color: #edf1f3;
      width: 92%;
      height: 100%;
      display: flex;
      justify-content: space-between;
      button {
        background-color: #fff;
        display: inline-block;
        color: #1D83C5;
        width: 45%;
        border: none;
        outline: none;
      }
      button:nth-child(2) {
        background: #1D83C5;
        color: #fff;
      }
    }

  }

</style>
