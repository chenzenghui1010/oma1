<template>
  <div class="excitedo">
    <mtitle/>
    <div class="company">
      <p class="title1"><span>{{title1}}</span></p>
      <x-input title=" <span>*</span> 姓名：" required="required" v-model="eName" placeholder="请输入"
               is-type="china-name">
        <span>*</span></x-input>
      <x-input title=" <span>*</span> 手机号：" required="required" mask="99999999999" v-model="ePoints"
               placeholder="请输入"
               :max="13"
               is-type="china-mobile"></x-input>

      <popup-picker title=" <span>*</span> 证件号：" :data="list1" v-model="eLicense" maxlenth="18"></popup-picker>
      <x-input id="none" title=" " required="required" placeholder="请输入" v-model="eLicenseNumber">
        is-type="china-name">
      </x-input>

      <popup-picker title=" &nbsp 车牌号：" :data="Car" v-model="eCar" maxlength="7"></popup-picker>
      <x-input title=" " v-model="eCarNumber" placeholder="请输入"></x-input>


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
      <p><span>{{title2}}</span></p>
      <div class="adds" v-for=" (item,index) in follower">
        <div class="add-name">
          <x-input title=" <span>*</span> 姓名：" required="required" v-model="item.name" placeholder="请输入"
                   is-type="china-name"></x-input>
          <i><img @click="delO(index)" src="../assets/delete.png"/></i>
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
      <ul @click="add">
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
        list1: [['身份证类型','一代身份证', '二代身份证']],
        Car: [['京', '津', '沪', '渝', '冀', '豫', '云', '辽', '黑', '湘', '皖', '鲁', '新', '苏', '浙', '赣', '鄂', '桂', '甘', '晋', '蒙', '陕', '吉', '闽', '贵', '粤', '青', '藏', '川', '宁', '琼']],
        title1: '来访人信息',
        title2: '随行人员信息',

        eName: this.$store.state.eName,
        ePoints: this.$store.state.ePoints,
        eLicense: [this.$store.state.eLicense.toString()],
        eLicenseNumber: this.$store.state.eLicenseNumber,
        eCar: [this.$store.state.eCar.toString()],
        eCarNumber: this.$store.state.eCarNumber,
        eCompany: this.$store.state.eCompany,
        eStart: this.$store.state.eStart,
        eEnd: this.$store.state.eEnd,
        eCause: this.$store.state.eCause,
        showExcitedO: true,
      }
    },
    created() {
      this.follower = this.$store.state.follower;
    },
    computed: {

    },

    methods: {

      add: function () {

        this.follower.push({
          'name': this.$store.state.follower.name,
          'identityNo': this.$store.state.follower.identityNo,
          'identityType': ['身份证类型'],
          'title': [['身份证类型','一代身份证', '二代身份证']],
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

        // this.$router.push({path: 'excitedaboutok'})
        // if (this.eName == '' || this.ePoints == '' || this.eLicense == '身份证类型' || this.eLicenseNumber == '' ||
        //
        //   this.eCompany == '' || this.eStart == '' || this.eEnd == '' || this.eCause == ''
        //
        //
        // ) {
        //
        //   AlertModule.show({title: '请填写完整信息'})
        //
        //   return false
        // }
        this.$router.push({path: 'excitedaboutok'})

      },
      delO: function (index) {
        this.follower[index].shows = true;
      },
      //取消
      onCancel: function () {
      },
      //确定
      onConfirm: function () {
        this.follower.splice(this.follower.length - 1, 1)
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
