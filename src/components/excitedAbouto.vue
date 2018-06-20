<template>
  <div class="excitedo">
    <mtitle/>
    <div class="company">
      <p class="title1"><span>来访人信息</span></p>
      <x-input title=" <span>*</span> 姓名：" required="required" v-model="eName" placeholder="请输入"
               is-type="china-name">
        <span>*</span></x-input>
      <x-input title=" <span>*</span> 手机号：" required="required" mask="99999999999" v-model="ePoints"
               placeholder="请输入"
               :max="13"
               is-type="china-mobile"></x-input>

      <popup-picker title=" <span>*</span> 证件号：" :data="list1" v-model="eLicense" maxlenth="18"
                    required="required"></popup-picker>
      <x-input title=" " required="required" placeholder="请输入" v-model="eLicenseNumber">
        is-type="china-name">
      </x-input>

      <popup-picker class="car" title=" &nbsp 车牌号：" :data="Car" v-model="eCar" maxlength="7"></popup-picker>
      <x-input id="none" @keyup="show($event)" style="border-top: none !important;" title=" " v-model='eCarNumber'
               placeholder="请输入"></x-input>


      <x-input title=" <span>*</span> 公司：" required="required" v-model="eCompany" placeholder="请输入"
      ></x-input>

      <span>* </span>
      <datetime v-model="eStart" format="YYYY-MM-DD HH:mm" :min-hour=9 :max-hour=18 inline-desc=' 来访时间：'
                placeholder="2018-05-10 10:00"></datetime>

      <span>* </span>
      <datetime v-model="eEnd" format="YYYY-MM-DD HH:mm" :min-hour=9 :max-hour=18 inline-desc=' 预计离开：'
                placeholder="2018-05-10 10:00"></datetime>
      <x-input title=" <span>*</span> 来访事由：" required="required" v-model="eCause" placeholder="请输入"></x-input>

    </div>
    <div class="suixing">
      <p><span v-if="follower.length>0">随行人员信息</span></p>
      <div class="adds" v-for=" (item,index) in follower">
        <div class="add-name">
          <x-input title=" <span>*</span> 姓名：" required="required" v-model="item.name" placeholder="请输入"
                   is-type="china-name"></x-input>
          <i><img @click="deletefollower(index)" src="../assets/delete.png"/></i>
          <div>
            <confirm v-model="item.shows" @on-cancel="onCancel"
                     @on-confirm="onConfirm">
              <p style="text-align:center;">确定删除随行人员信息吗?</p>

            </confirm>
          </div>
        </div>
        <div>
          <popup-picker title=" <span>*</span>  证件号：" :data="item.title" v-model="item.identityType"></popup-picker>
          <x-input title=" " v-model="item.identityNo" placeholder="请输入"></x-input>
        </div>
        <div class="addk">
        </div>
      </div>
    </div>

    <div class="add">
      <ul @click="addfollower">
        <li><img class="addimg" src="../assets/添加@2x.png" alt=""></li>
        <li>添加随行人员</li>
      </ul>
      <div class="footer">
        <button @click="last">上一步</button>
        <button @click="excited">预 览</button>
      </div>
    </div>
  </div>
</template>
<script>
  import {
    AlertModule,
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
    XSwitch
  } from 'vux'
  import mtitle from './mTitle'

  export default {
    name: 'excitedabouto',
    components: {
      Confirm, TransferDomDirective, TransferDom,
      Datetime, PopupPicker, Picker, Divider, XSwitch,
      mtitle, AlertModule,
      XInput,
      XButton,
      Group,
      Cell,
      Flexbox
    },
    data() {
      return {
        follower: [],
        list1: [['证件类型', '二代身份证', '港澳通行证', '驾驶证', '军官证', '护照', '学生证', '其他']],
        Car: [['', '京', '津', '沪', '渝', '冀', '豫', '云', '辽', '黑', '湘', '皖', '鲁', '新', '苏', '浙', '赣', '鄂', '桂', '甘', '晋', '蒙', '陕', '吉', '闽', '贵', '粤', '青', '藏', '川', '宁', '琼', '港', '奥', '新']],
        // this.$store.state.eName,
        eName: '',
        ePoints: '',
        // this.$store.state.eLicense.toString()
        eLicense: ['请选择'],
        eLicenseNumber: '',
        eCar: ['请选择'],
        eCarNumber: '',
        eCompany: '',
        eStart: '',
        eEnd: '',
        eCause: '',
        showExcitedO: true,

        alert: '',

      }
    },
    created() {
      this.follower = this.$store.state.follower;
    },
    computed: {},

    watch: {
      eCarNumber: function (val, oldval) {
        this.eCarNumber = val.toUpperCase();
      }

    },

    methods: {

      addfollower: function () {
        this.follower.push({
          'name': this.$store.state.follower.name,
          'identityNo': this.$store.state.follower.identityNo,
          'identityType': ['证据类型'],
          'title': [['证件类型', '二代身份证', '港澳通行证', '驾驶证', '军官证', '护照', '学生证', '其他']],
          'shows': false
        })
      },

      //上一步
      last: function () {

        history.go(-1);
      },
      //预 览
      excited: function () {
        let _this = this.$store.dispatch
        _this('eName', this.eName),
          _this('ePoints', this.ePoints),
          _this('eLicense', this.eLicense.toString()),
          _this('eLicenseNumber', this.eLicenseNumber),
          _this('eCar', this.eCar.toString()),
          _this('eCarNumber', this.eCarNumber),
          _this('eCompany', this.eCompany),
          _this('eStart', this.eStart),
          _this('eEnd', this.eEnd),
          _this('eCause', this.eCause),

          //随行人
          _this('follower', this.follower);

        if (this.eName == '') {
          AlertModule.show({title: this.alert = '请填写姓名'})
          return
        }
        if (this.eName.length < 1) {
          return
        }
        if (this.ePoints == '') {
          AlertModule.show({title: this.alert = '请填写手机号'})
          return
        }

        if (this.eLicense == '证件类型') {
          AlertModule.show({title: this.alert = '请选择证件类型'})
          return
        }

        if (this.eLicense == '二代身份证') {
          let isIDCard2 = /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|x|X)$/
          if (!(isIDCard2.test(this.eLicenseNumber))) {
            AlertModule.show({title: this.alert = '二代身份证不正确'})
            return
          }
        }

        if (this.eLicense == '港澳通行证') {
          let HKMAKAO = /^[HMhm]{1}([0-9]{10}|[0-9]{8})$/;
          if (!(HKMAKAO.test(this.eLicenseNumber))) {
            AlertModule.show({title: this.alert = '港澳通行证不正确'})
            return
          }
        }

        if (this.eLicense == '护照') {
          let PASSPORT = "/^[a-zA-Z0-9]{5,17}$/";
          if (!(PASSPORT.test(this.eLicenseNumber))) {
            AlertModule.show({title: this.alert = '护照不正确'})
            return
          }
        }

        if (this.eLicense == '驾驶证') {
          let DRIVINGLICENCE = /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|x|X)$/
          if (!(DRIVINGLICENCE.test(this.eLicenseNumber))) {
            AlertModule.show({title: this.alert = '驾驶证不正确'})
            return
          }
        }


        if (this.eLicense == '军官证') {
          let WARDROOM = /^\d{7}$/
          if (!(WARDROOM.test(this.eLicenseNumber))) {
            AlertModule.show({title: this.alert = '军官证不正确'})
            return
          }

        }

        if (this.eLicense == '学生证') {
          if (this.eLicenseNumber.length < 6) {
            AlertModule.show({title: this.alert = '学生证不正确'})
            return
          }
        }


        if (this.eCompany == '') {
          AlertModule.show({title: this.alert = '请填写公司'})
          return
        }

        if (this.eStart == '') {
          AlertModule.show({title: this.alert = '请填写来访时间'})
          return
        }


        let start = this.eStart.replace(/-/g, '/')
        let startTimes = new Date(start).getTime()


        let timestamp = new Date().getTime()//当前时间
        if (timestamp > startTimes) {
          AlertModule.show({title: this.alert = '填写来访时间不合格'})
          return
        }

        if (this.eEnd == '') {
          AlertModule.show({title: this.alert = '请填写离开时间'})
          return
        }
        let end = this.eEnd.replace(/-/g, '/')
        let endTimes = new Date(end).getTime()

        if (endTimes < startTimes) {
          AlertModule.show({title: this.alert = '填写的时间不合格'})
          return
        }


        if (endTimes < startTimes) {
          AlertModule.show({title: this.alert = '填写的时间不合格'})
          return
        }

        if (this.eCause == '') {
          AlertModule.show({title: this.alert = '请填写来访事由'})
          return
        }

        if (this.eCause.length > 30) {
          AlertModule.show({title: this.alert = '事由超出最大长度30'})
          return

        }

        if (this.follower.length > 0) {

          for (let i = 0; i < this.follower.length; i++) {

            if (this.follower[i].name == '' || this.follower[i].name == undefined) {
              AlertModule.show({title: this.alert = '请填写随行人姓名'})
              return
            }
            if (this.follower[i].identityType == '证件类型') {
              AlertModule.show({title: this.alert = '请填写随行人证件类型'})
              return
            }

            if (this.follower[i].identityType == '二代身份证') {
              let isIDCard2 = /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|x|X)$/
              if (!(isIDCard2.test(this.follower[i].identityNo))) {
                AlertModule.show({title: this.alert = '随行人二代身份证不正确'})
                return
              }
            }


            if (this.follower[i].identityType == '港澳通行证') {
              let HKMAKAO = "/^[HMhm]{1}([0-9]{10}|[0-9]{8})$/";
              if (!(HKMAKAO.test(this.follower[i].identityNo))) {
                AlertModule.show({title: this.alert = '随行人港澳通行证不正确'})
                return
              }
            }

            if (this.follower[i].identityType == '护照') {
              let PASSPORT = "/^[a-zA-Z0-9]{5,17}$/";
              if (!(PASSPORT.test(this.follower[i].identityNo))) {
                AlertModule.show({title: this.alert = '随行人护照不正确'})
                return
              }
            }

            if (this.follower[i].identityType == '驾驶证') {
              let DRIVINGLICENCE = /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|x|X)$/
              if (!(DRIVINGLICENCE.test(this.follower[i].identityNo))) {
                AlertModule.show({title: this.alert = '随行人驾驶证不正确'})
                return
              }
            }


            if (this.follower[i].identityType == '军官证') {
              let WARDROOM = /^\d{7}$/
              if (!(WARDROOM.test(this.follower[i].identityNo))) {
                AlertModule.show({title: this.alert = '随行人军官证不正确'})
                return
              }

            }

            if (this.follower[i].identityType == '学生证') {
              if (this.follower[i].identityNo.length < 6) {
                AlertModule.show({title: this.alert = '随行人学生证不正确'})
                return
              }
            }
          }
        }
        this.$router.push({path: 'excitedaboutok'})
      },
      deletefollower: function (index) {
        this.follower[index].shows = true;
      },
      //取消
      onCancel: function () {
      },
      //确定
      onConfirm: function () {
        this.follower.splice(this.follower.length - 1, 1)
      },
    },
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

  .addk {
    width: 100%;
    height: 10px;
    background: #edf1f3;

  }

  .car div div {
    color: red !important;
  }

  #none {
    margin-left: 15%;
    position: absolute;
    margin-top: -44px;
    width: 55%;
    background: rgba(0, 0, 0, 0);
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
      position: revert;
      justify-content: space-between;
      i {
        display: inline-block;
        /*border: 1px solid red;*/
        margin-right: 3%;
        img {
          display: inline-block;
          height: 20px;
          width: 20px;
          margin-top: 10px;
        }
      }

    }

    .add {
      padding-bottom: 30px;
      width: 100%;
      height: 100%;
      background: #edf1f3;
      color: #1E90FF;
      ul {
        /*border: 1px solid red;*/
        display: flex;
        justify-content: center;
        margin-bottom: 30px;
        margin-top: 0;
        li {
          margin-top: 20px;
          height: 24px;
          color: #5aa0ce;
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
          height: 45px;
          background-color: #1d83c5;
          color: #FAFAFA;
          border: none;
          font-size: 16px;
          border-radius: 4px;
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
