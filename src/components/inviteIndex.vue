<template>
  <div class="excitedo">
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
        <li class="titleo">受访人信息</li>
        <li class="titleo">来访人信息</li>
        <li>确定信息</li>
      </ul>
    </div>
    <div :class="{shade:shade} " @click="isShow"></div>
    <div class="company">
      <p class=""><span>来访人信息</span></p>
      <x-input title=" <span>*</span> 姓名：" required="required" v-model="iName" placeholder="请输入" is-type="china-name">
        <span>*</span></x-input>
      <x-input title=" <span>*</span> 手机号：" required="required" mask="99999999999" v-model="iPoints" placeholder="请输入"
               :max="11"
               is-type="china-mobile"></x-input>

      <span style="border-top: 1px solid rgba(217,217,217,.5);display: inline-block;width: 96%; margin-top: 5px "></span>
      <div style="margin-top: 5px">
        <popup-picker title=" <span>*</span> 证件号：" :data="list" v-model="iLicense"
                      required="required"></popup-picker>
        <x-input   title=" " required="required" placeholder="请输入" v-model="iLicenseNumber">
          is-type="china-name">
        </x-input>
      </div>

      <!--<popup-picker title=" &nbsp 车牌号：" :data="Car" v-model="iCar"></popup-picker>-->
      <!--<x-input style="border: none; !important;" id="none" title=" " v-model="iCarNumber" placeholder="请输入"></x-input>-->
      <!--<div @click="deleteCarNo"   >-->
        <!--<span></span>-->
        <!--<x-input readonly="readonly" id="datePicker" title=" <span> &nbsp;</span> 车牌号：" v-model="carno" placeholder="请输入"></x-input>-->
      <!--</div>-->
      <div id="carno"  @click="deleteCarNo">
        <p style="background: #fff;">&nbsp;&nbsp;车牌号：</p> <small v-if="carno.length == 0" style="display: inline-block;height: 40px;line-height: 40px ;color: #D9D9D9; font-size: 16px;">请输入</small> {{ carno}}
      </div>


      <x-input title=" <span>*</span> 公司：" required="required" v-model="iCompany" placeholder="请输入"
      ></x-input>

      <span>*</span>
      <datetime v-model="iStart" format="YYYY-MM-DD HH:mm" :min-hour=0 :max-hour=23 inline-desc=' 来访时间：'
                placeholder="2018-05-10 10:00"></datetime>

      <span>*</span>
      <datetime v-model="iEnd" format="YYYY-MM-DD HH:mm" :min-hour=0 :max-hour=23 inline-desc='离开时间：'
                placeholder="2018-05-10 10:00"></datetime>
      <x-input title=" <span>*</span> 来访事由：" required="required" v-model="iCause" placeholder="请输入"></x-input>

    </div>
    <div class="suixing">
      <p><span v-if="ifollower.length>0">随行人员信息</span></p>
      <div class="adds" v-for=" (item,index) in ifollower">
        <div class="add-name">
          <x-input title=" <span>*</span> 姓名：" required="required" v-model="item.name" placeholder="请输入"
                   is-type="china-name"></x-input>
          <i><img @click="deletefollower(index)" src="../assets/delete.png"/></i>
          <div>
            <confirm v-model="item.shows" @on-cancel="onCancel"
                     @on-confirm="onConfirm">
              <p style="text-align:center;">确定要删除吗?</p>

            </confirm>
          </div>
        </div>
        <div>
          <popup-picker title=" <span>*</span>  证件号：" :data="list" v-model='item.identityType'></popup-picker>
          <x-input title=" " v-model="item.identityNo" placeholder="请输入"></x-input>
        </div>
        <div class="addk">
        </div>
      </div>
    </div>
    <div class="add">
      <ul>
        <li @click="addfollower"><img class="addimg" src="../assets/添加@2x.png" alt=""></li>
        <li>添加随行人员</li>
      </ul>
      <div class="footer">
        <button @click="last">上一步</button>
        <button @click="excited">预 览</button>
      </div>
    </div>

    <carnokeyboard v-on:select="selectletter" v-on:delete="deleteletter" v-show="begininput"
                   v-bind:inputtype="inputtype"></carnokeyboard>
  </div>
</template>
<script>
  import {
    Confirm,
    TransferDomDirective,
    TransferDom,
    XInput,
    Group,
    XButton,
    Cell,
    Flexbox,
    Datetime,
    PopupPicker,
    Picker,
    Divider,
    XSwitch, AlertModule
  } from 'vux'
  import mtitle from './mTitle'
  import Carnokeyboard from "./keyboard.vue"

  export default {
    name: 'inviteindex',
    components: {
      Confirm, TransferDomDirective, TransferDom,
      Datetime, PopupPicker, Picker, Divider, XSwitch,
      mtitle, AlertModule,
      XInput,
      XButton,
      Group,
      Cell,
      Flexbox,
      Carnokeyboard
    },
    data() {
      return {
        enable: false,
        begininput: false,//键盘
        count: 7,
        newresourcecar: false,
        inputindex: 0,
        shade: false,




        ifollower: [],
        list: [['请选择', '二代身份证', '护照', '港澳通行证', '驾驶证', '军官证', '学生证', '其他']],
        iName: this.$store.state.iName,
        iPoints: this.$store.state.iPoints,
        iLicense:[ this.$store.state.iLicense.toString()],
        iLicenseNumber: this.$store.state.iLicenseNumber,
        carno: this.$store.state.iCarNumber,
        iCompany: this.$store.state.iCompany,
        iStart: this.$store.state.iStart,
        iEnd: this.$store.state.iEnd,
        iCause: this.$store.state.iCause,
        showExcitedO: true,

        alert: '',
      }
    },

    watch: {

      iCarNumber: function (val) {

        this.iCarNumber = val.toUpperCase()

      }
    },

    created() {
      document.title = '来访邀请'
      this.ifollower = this.$store.state.ifollower;

    },
    computed: {

      inputtype: function () {
        if (this.inputindex == 0) {

          return 0
        }
        if (this.inputindex == 1) {

          return 1
        }
        if (this.newresourcecar == false) {

          if (this.inputindex == 6) {

            return 3

          }
          if (this.inputindex == 8) {
            this.shade= false
            this.disabled = false

            this.begininput = false

          }

        }
        if (this.inputindex == 7) {

          return 3
        }
        if (this.inputindex == 8) {
          this.disabled = false
          this.shade= false
          this.begininput = false

        }
        return 2
      },
    },

    methods: {
      deleteCarNo: function () {
        this.begininput = true
        this.shade = true
      },
      getchunkstyle: function (index) {

        if (!this.newresourcecar) {

          if (index == 0 && this.carno.length >= 1) {

            return 'chunk bluecolor'
          }

          return 'chunk noe'
        }
        else {

          if (index == 0 && this.carno.length >= 1) {

            return 'chunk deepgreencolor'
          }

          return 'chunk greencolor'
        }
      },
      isShow: function () {
        this.shade = false
        this.begininput = false
      },

      getLetter: function (index) {
        if (index >= this.carno.length) {
          return ''
        }
        return this.carno[index]
      },
      selectletter: function (value) {

        this.carno = this.carno + value

        this.inputindex += 1
      },
      deleteletter: function () {

        this.inputindex = Math.max(0, this.inputindex - 1)

        this.carno = this.carno.substr(0, this.inputindex)
        // this.carNo =this.carNo.substring(0,this.carNo.length-1)
        //  alert(this.carNo)
      },






      addfollower: function () {
        this.ifollower.push({
          'name': this.$store.state.ifollower.name,
          'identityNo': this.$store.state.ifollower.identityNo,
          'identityType': ['请选择'],
          'shows': false
        })
      },
      last: function () {
        history.go(-1)
      },

      excited: function () {
        let _this = this.$store.dispatch
        _this('iName', this.iName),
          _this('iPoints', this.iPoints),
          _this('iLicense', this.iLicense.toString()),
          _this('iLicenseNumber', this.iLicenseNumber),
          _this('iCarNumber', this.carno),
          _this('iCompany', this.iCompany),
          _this('iStart', this.iStart),
          _this('iEnd', this.iEnd),
          _this('iCause', this.iCause),

          //随行人
          _this('ifollower', this.ifollower);


        if (this.iName == '') {
          AlertModule.show({title: this.alert = '请填写姓名'})
          return
        }
        if (this.iName.length < 2) {
          AlertModule.show({title: this.alert = '姓名格式不正确'})
          return
        }
        if (this.iPoints == '') {
          AlertModule.show({title: this.alert = '请填写手机号'})
          return
        }


        if (this.iLicense == '请选择') {
          AlertModule.show({title: this.alert = '请填写证件类型'})
          return
        }

        if (this.iLicense == '二代身份证') {
          let isIDCard2 = /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|x|X)$/
          if (!(isIDCard2.test(this.iLicenseNumber))) {
            AlertModule.show({title: this.alert = '二代身份证不正确'})
            return
          }
        }

        if (this.iLicense == '港澳通行证') {
          let HKMAKAO = /^[HMhm]{1}([0-9]{10}|[0-9]{8})$/;
          if (!(HKMAKAO.test(this.iLicenseNumber))) {
            AlertModule.show({title: this.alert = '港澳通行证不正确'})
            return
          }
        }

        if (this.iLicense == '护照') {
          let PASSPORT = "/^[a-zA-Z0-9]{5,17}$/";
          if (!(PASSPORT.test(this.iLicenseNumber))) {
            AlertModule.show({title: this.alert = '护照不正确'})
            return
          }
        }

        if (this.iLicense == '驾驶证') {
          let DRIVINGLICENCE = /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|x|X)$/
          if (!(DRIVINGLICENCE.test(this.iLicenseNumber))) {
            AlertModule.show({title: this.alert = '驾驶证不正确'})
            return
          }
        }


        if (this.iLicense == '军官证') {

          let WARDROOM = /^\d{7}$/

          if (!(WARDROOM.test(this.iLicenseNumber))) {

            AlertModule.show({title: this.alert = '军官证不正确'})

            return
          }

        }

        if (this.iLicense == '学生证') {
          if (this.iLicenseNumber.length < 6) {
            AlertModule.show({title: this.alert = '学生证不正确'})
            return
          }
        }

        if (this.iCompany == '') {
          AlertModule.show({title: this.alert = '请填写公司'})
          return
        }

        if (this.iStart == '') {
          AlertModule.show({title: this.alert = '请填写来访时间'})
          return
        }
        let start = this.iStart.replace(/-/g, '/')
        let startTimes = new Date(start).getTime()


        let timestamp = new Date().getTime()//当前时间
        if (timestamp > startTimes) {
          AlertModule.show({title: this.alert = '请填写来访时间要大于当前时间'})
          return
        }


        if (this.iEnd == '') {
          AlertModule.show({title: this.alert = '请填写离开时间'})
          return
        }
        let end = this.iEnd.replace(/-/g, '/')
        let endTimes = new Date(end).getTime()


        if (endTimes < startTimes) {
          AlertModule.show({title: this.alert = '填写的时间不合格'})
          return
        }


        if (this.iCause == '') {
          AlertModule.show({title: this.alert = '请填写来访事由'})
          return
        }

        if (this.ifollower.length > 0) {

          for (let i = 0; i < this.ifollower.length; i++) {
            if (this.ifollower[i].name == '' || this.ifollower[i].name == undefined) {
              AlertModule.show({title: this.alert = '请填写随行人姓名'})
              return
            }
            if (this.ifollower[i].name.length < 2) {
              AlertModule.show({title: this.alert = '随行人姓名格式不正确'})
              return
            }
            if (this.ifollower[i].identityType == '请选择') {
              AlertModule.show({title: this.alert = '请选择证件类型'})
              return
            }

            if (this.ifollower[i].identityType == '二代身份证') {
              let isIDCard2 = /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|x|X)$/
              if (!(isIDCard2.test(this.ifollower[i].identityNo))) {
                AlertModule.show({title: this.alert = '随行人二代身份证不正确'})
                return
              }
            }


            if (this.ifollower[i].identityType == '港澳通行证') {
              let HKMAKAO = "/^[HMhm]{1}([0-9]{10}|[0-9]{8})$/";
              if (!(HKMAKAO.test(this.ifollower[i].identityNo))) {
                AlertModule.show({title: this.alert = '随行人港澳通行证不正确'})
                return
              }
            }

            if (this.ifollower[i].identityType == '护照') {
              let PASSPORT = "/^[a-zA-Z0-9]{5,17}$/";
              if (!(PASSPORT.test(this.ifollower[i].identityNo))) {
                AlertModule.show({title: this.alert = '随行人护照不正确'})
                return
              }
            }

            if (this.ifollower[i].identityType == '驾驶证') {
              let DRIVINGLICENCE = /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|x|X)$/
              if (!(DRIVINGLICENCE.test(this.ifollower[i].identityNo))) {
                AlertModule.show({title: this.alert = '随行人驾驶证不正确'})
                return
              }
            }


            if (this.ifollower[i].identityType == '军官证') {
              let WARDROOM = /^\d{7}$/
              if (!(WARDROOM.test(this.ifollower[i].identityNo))) {
                AlertModule.show({title: this.alert = '随行人军官证不正确'})
                return
              }

            }

            if (this.ifollower[i].identityType == '学生证') {
              if (this.ifollower[i].identityNo.length < 6) {
                AlertModule.show({title: this.alert = '随行人学生证不正确'})
                return
              }
            }

          }
        }

        this.$router.push({path: 'invitepar'})
      },
      deletefollower: function (index) {
        this.ifollower[index].shows = true;
      },
      //取消
      onCancel: function () {
      },
      //确定
      onConfirm: function () {
        this.ifollower.splice(this.ifollower.length - 1, 1)
      },
    }
  }
</script>
<style scoped lang="less">
  * {
    padding: 0;
    margin: 0;
  }
  @media screen and (min-width: 300px) {
    #carno {
      width: 96%;
    }
    #carno p{
      width: 6.6rem;
    }
  }
  @media screen and (min-width: 600px) {
    #carno {
      width: 98%;
      
    }
  
    #carno p{
      width:6.7rem;
    }
  }

  @media screen and(min-width: 900px) {
    #carno {
      width: 99%;
    }
  
    #carno p {
    
      width: 6.7rem;
    }
  }
  
  #carno {
    border-top: 1px solid #EBEBEB;
    background: #FFF;
    height: 40px;
    line-height: 40px;
    float:right;
  }
  #carno p{
    display: inline-block;
    height: 40px;
   
  }

  .shade {
    -webkit-tap-highlight-color:transparent;
    z-index: 9;
    position: absolute;
    width: 100%;
    height: 120%;
    left: 0px;
    top: 0px;
    background-color: rgba(255, 255, 255, 0.1);
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
        margin-left: -2%;
       
      }
    }
  }
  
  
  span {
    margin: 8px 10px 0 15px;
    position: absolute;
    color: red;
  }

  //弹出背景颜色
  .weui-dialog__bd p {
    background: #fff !important;
  }

  .weui-cell {
    height: 20px;
    padding: 10px 15px;
  }

  .addk {
    width: 100%;
    height: 10px;
    background: #edf1f3;

  }

  .excitedo {
    height: 100px;
    .company, .suixing {
      p {
        width: 100%;
        height: 43px;

        background: #edf1f3;
        span {
          display: inline-block;
          margin: 12px 0 0 4%;
          color: #999;
        }
        .adds {
        }
      }
    }
    .company {
      ul {
        padding: 0 4%;
        li {
          border-bottom: 1px solid #f2f6fc;
          list-style: none;
          height: 35px;
          line-height: 35px;
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
            width: 73%;
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
          height: 35px;
          border: none;
          background-color: #fff;
          color: #8c939d;
          outline: none;
        }
      }
    }

    .add-name {
      display: flex;
      justify-content: space-between;
      i {
        position: absolute;
        margin-left: 92%;
        img {
          margin-top: 10px;
        }
      }

    }

    .add {
      padding-bottom: 30px;
      width: 100%;
      bottom: 0;
      background: #edf1f3;
      color: #1E90FF;
      ul {
        /*border: 1px solid red;*/
        display: flex;
        justify-content: center;
        margin-bottom: 30px;
        padding-top: 0px;
        li {
          margin-top: 20px;
          height: 24px;
          color: #5AA0CE;
          img {
            margin-right: 8px;
            display: inline-block;
          }
        }
      }
      .footer {
        display: flex;
        justify-content: space-around;
        button {
          justify-content: center;
          width: 40%;
          background-color: #1d83c5;
          color: #FAFAFA;
          border: none;
          outline: none;
        }
      }
      button:nth-child(1) {
        background: #fff;
        color: #1d83c5;

      }
    }
  }
</style>
