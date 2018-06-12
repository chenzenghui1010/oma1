<template>
  <div class="excitedo">
    <div class="company">
      <p class="title1"><span>来访人信息</span></p>
      <x-input title=" <span>*</span> 姓名：" required="required" v-model="iName" placeholder="请输入" is-type="china-name">
        <span>*</span></x-input>
      <x-input title=" <span>*</span> 手机号：" required="required" mask="99999999999" v-model="iPoints" placeholder="请输入"
               :max="11"
               is-type="china-mobile"></x-input>

      <popup-picker title=" <span>*</span> 证件号：" :data="list1" v-model="iLicense" maxlenth="18"></popup-picker>
      <x-input  id="none" title=" " required="required" placeholder="请输入" v-model="iLicenseNumber"> is-type="china-name"></x-input>

      <popup-picker title=" &nbsp 车牌号：" :data="Car" v-model="iCar"></popup-picker>
      <x-input title=" " v-model="iCarNumber" placeholder="请输入"></x-input>


      <x-input title=" <span>*</span> 公司：" required="required" v-model="iCompany" placeholder="请输入"
               ></x-input>

      <span>*</span>
      <datetime v-model="iStart" format="YYYY-MM-DD HH:mm" :min-hour=9 :max-hour=18 inline-desc=' 来访时间：'
                placeholder="2018-05-10 10:00"></datetime>

      <span>*</span>
      <datetime v-model="iEnd" format="YYYY-MM-DD HH:mm" :min-hour=9 :max-hour=18 inline-desc='预计离开：'
                placeholder="2018-05-10 10:00"></datetime>
      <x-input title=" <span>*</span> 来访事由：" required="required" v-model="iCause" placeholder="请输入"></x-input>

    </div>
    <div class="suixing">
      <p><span>随行人员信息</span></p>
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
          <popup-picker title=" <span>*</span>  证件号：" :data="item.title" v-model="item.identityType"></popup-picker>
          <x-input title=" "v-model="item.identityNo" placeholder="请输入"></x-input>
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
      <button @click="excited">预 览</button>
    </div>
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
    XSwitch,AlertModule
  } from 'vux'
  import mtitle from './mTitle'

  export default {
    name: 'inviteindex',
    components: {
      Confirm, TransferDomDirective, TransferDom,
      Datetime, PopupPicker, Picker, Divider, XSwitch,
      mtitle,AlertModule,
      XInput,
      XButton,
      Group,
      Cell,
      Flexbox
    },
    data() {
      return {
        ifollower: [],
        addList:[{shows: false}],
        list1: [['居民身份证','一代身份证', '二代身份证']],
        Car: [['请选择', '京', '津', '沪', '渝', '冀', '豫', '云', '辽', '黑', '湘', '皖', '鲁', '新', '苏', '浙', '赣', '鄂', '桂', '甘', '晋', '蒙', '陕', '吉', '闽', '贵', '粤', '青', '藏', '川', '宁', '琼']],
        iName: this.$store.state.iName,
        iPoints: this.$store.state.iPoints,
        iLicense: [this.$store.state.iLicense],
        iLicenseNumber: this.$store.state.iLicenseNumber,
        iCar: [this.$store.state.iCar],
        iCarNumber: this.$store.state.iCarNumber,
        iCompany: this.$store.state.iCompany,
        iStart: this.$store.state.iStart,
        iEnd: this.$store.state.iEnd,
        iCause: this.$store.state.iCause,
        showExcitedO: true,

        alert:'',
      }
    },
    created() {
      this.ifollower = this.$store.state.ifollower;

    },
    computed: {},

    methods: {
      addfollower: function () {
        this.ifollower.push({
          'name': this.$store.state.ifollower.name,
          'identityNo': this.$store.state.ifollower.identityNo,
          'identityType': ['居民身份证'],
          'title': [['身份证类型','一代身份证', '二代身份证']],
          'shows': false
        })
      },
      excited: function () {
        let _this = this.$store.dispatch
          _this('iName', this.iName),
          _this('iPoints', this.iPoints),
          _this('iLicense', this.iLicense.toString()),
          _this('iLicenseNumber', this.iLicenseNumber),
          _this('iCar', this.iCar.toString()),
          _this('iCarNumber', this.iCarNumber),
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

        if (this.iPoints == '') {
          AlertModule.show({title: this.alert = '请填写手机号'})
          return
        }

        if (this.iLicense == '居民身份证') {
          AlertModule.show({title: this.alert = '请填写居民身份证'})
          return
        }

        if (this.iLicense == '一代身份证') {
          let isIDCard1 = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$/
          if (!(isIDCard1.test(this.iLicenseNumber))) {
            AlertModule.show({title: this.alert = '一代身份证不正确'})
            return
          }
        }

        if (this.iLicense == '二代身份证') {
          let isIDCard2 = /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|x|X)$/
          if (!(isIDCard2.test(this.iLicenseNumber))) {
            AlertModule.show({title: this.alert = '二代身份证不正确'})
            return
          }
        }
        if(this.iCompany == ''){
          AlertModule.show({title: this.alert = '请填写公司'})
          return
        }

        if(this.iStart == ''){
          AlertModule.show({title: this.alert = '请填写来访时间'})
          return
        }
        let start = this.iStart.replace(/-/g, '/')
        let startTimes = new Date(start).getTime()/1000




        if(this.iEnd == ''){
          AlertModule.show({title: this.alert = '请填写离开时间'})
          return
        }
        let end = this.iEnd.replace(/-/g, '/')
        let endTimes = new Date(end).getTime()/1000


        if(endTimes < startTimes ){
          AlertModule.show({title: this.alert = '填写的时间不合格'})
          return
        }


        if(endTimes < startTimes ){
          AlertModule.show({title: this.alert = '填写的时间不合格'})
          return
        }

        if(this.iCause == ''){
          AlertModule.show({title: this.alert = '请填写来访事由'})
          return
        }

        if (this.ifollower.length > 0) {


          for (let i = 0; i < this.ifollower.length; i++) {
           alert( this.ifollower.length)
            if (this.ifollower[i].name == '' || this.ifollower[i].name == undefined) {
              AlertModule.show({title: this.alert = '请填写随行人姓名'})
              return
            }
            if (this.ifollower[i].identityType == '居民身份证') {
              AlertModule.show({title: this.alert = '请填写随行人居民身份证'})
              return
            }

            if (this.ifollower[i].identityType == '一代身份证') {
              let isIDCard1 = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$/
              if (!(isIDCard1.test(this.ifollower[i].identityNo))) {
                AlertModule.show({title: this.alert = '随行人一代身份证不正确'})
                return
              }
            }

            if (this.ifollower[i].identityType == '二代身份证') {
              let isIDCard2 = /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|x|X)$/
              if (!(isIDCard2.test(this.ifollower[i].identityNo))) {
                AlertModule.show({title: this.alert = '随行人二代身份证不正确'})
                return
              }
            }
          }
        }
        this.$router.push({path: 'invitepar'})
      },
      deletefollower: function (index) {
        this.ifollower[index].shows=true;
      },
      //取消
      onCancel: function () {
      },
      //确定
      onConfirm: function () {
        this.ifollower.splice(this.ifollower.length-1, 1)
      },
    }
  }
</script>
<style scoped lang="less">
  * {
    padding: 0;
    margin: 0;
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
  .addk{
    width: 100%;
    height: 10px;
    background: #edf1f3;

  }
  .excitedo {
    /*position: center;*/
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
        .adds{
        }
      }
    }
    .company {
      margin-bottom: 20px;
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
        /*display: inline-block;*/
        /*border: 1px solid red;*/
        img {
          /*display: inline-block;*/
          /*height: 20px;*/
          /*width: 20px;*/
          margin-top: 10px;
        }
      }

    }

    .add {
      padding: 0px  4% 20px 4%;
      width: 100%;
      height: 100%;
      background: #edf1f3;
      color: #1E90FF;
      ul {
        /*border: 1px solid red;*/
        display: flex;
        justify-content: center;
        margin-bottom: 30px;
       padding-top: 10px;
        li {
          height: 24px;
          color: #5aa0ce;
          img {
            margin-right: 8px;
            display: inline-block;

          }
        }
      }
      button {
        width: 92%;
        height: 50px;
        background-color: #1d83c5;
        color: #FAFAFA;
        border: none;
        font-size: 16px;
        border-radius: 4px;
        outline: none;
      }
    }
  }
</style>
