import Vue from 'vue'
import vuex from 'vuex'

Vue.use(vuex);

export default new vuex.Store({




  state: {

    phone:'',

    // 受访人信息
    mName: '',
    mPoints: '',
    mCompany: '',
    mDepartment: '',

    // 来访人信息

    eName: '',
    ePoints: '',
    eLicense: '居民身份证',
    eLicenseNumber: '',
    eCar: '请选择',
    eCarNumber: '',
    eCompany: '',
    eStart: '',
    eEnd: '',
    eCause: '',



    //来访邀约

    iName: '',
    iPoints: '',
    iLicense: '',
    iLicenseNumber: '',
    iCar: '',
    iCarNumber: '',
    iCompany: '',
    iStart: '',
    iEnd: '',
    iCause: '',

    //随行人

    follower: [{'name': '', 'identityNo': '', 'identityType': ['居民身份证'], title: [['居民身份证','一代身份证','二代身份证']]}],

  },
  mutations: {
    //
    PHONE( state , phone){
          state.phone = phone;
    },


    mName: (state, name) => {
      state.mName = name;
    },
    mPoints(state, points) {
      state.mPoints = points;
    },
    mCompany(state, company) {
      state.mCompany = company;
    },
    mDepartment(state, department) {
      state.mDepartment = department;
    },

    // 来访人信息

    // exc: (state, sxc) => {
    //   state.exc = sxc;
    // },

    eName(state, name) {
      state.eName = name;
    },
    ePoints(state, points) {
      state.ePoints = points;
    },
    eLicense(state, license) {
      state.eLicense = license;
    },
    eLicenseNumber(state, eLicenseNumber) {
      state.eLicenseNumber = eLicenseNumber;
    },
    eCar(state, eCar) {
      state.eCar = eCar;
    },
    eCarNumber(state, eCarNumber) {
      state.eCarNumber = eCarNumber;
    },
    eCompany(state, eCompany) {
      state.eCompany = eCompany;
    },
    eStart(state, eStart) {
      state.eStart = eStart;
    },
    eEnd(state, eEnd) {
      state.eEnd = eEnd;
    },
    eCause(state, eCause) {
      state.eCause = eCause;
    },

    //来访邀约
    iName(state, iName) {
      state.iName = iName;
    },
    iPoints(state, iPoints) {
      state.iPoints = iPoints;
    },
    iLicense(state, iLicense) {
      state.iLicense = iLicense;
    },
    iLicenseNumber(state, iLicenseNumber) {
      state.iLicenseNumber = iLicenseNumber;
    },
    iCar(state, iCar) {
      state.iCar = iCar;
    },
    iCarNumber(state, iCarNumber) {
      state.iCarNumber = iCarNumber;
    },
    iCompany(state, iCompany) {
      state.iCompany = iCompany;
    },
    iStart(state, iStart) {
      state.iStart = iStart;
    },
    iEnd(state, iEnd) {
      state.iEnd = iEnd;
    },
    iCause(state, iCause) {
      state.iCause = iCause;
    },


    //随行人
    follower(state, follower) {
      state.follower = follower
    },

  },

  actions: {

    phone({commit},phone){

      commit('PHONE' , phone)
    },

    follower({commit}, foll) {
      return new Promise(resolve => {
        commit('follower', foll)
        resolve();
      })
    },


    // 来访人信息
    eName({commit}, eName) {
      // return new Promise(resolve => {
      commit('eName', eName)
      // resolve();
      // })
    },
    ePoints({commit}, ePoints) {
      commit('ePoints', ePoints)
    },
    eLicense({commit}, eLicense) {
      commit('eLicense', eLicense)
    },
    eLicenseNumber({commit}, eLicenseNumber) {
      commit('eLicenseNumber', eLicenseNumber)
    },
    eCar({commit}, eCar) {
      commit('eCar', eCar)
    },
    eCarNumber({commit}, eCarNumber) {
      commit('eCarNumber', eCarNumber)
    },
    eCompany({commit}, eCompany) {
      commit('eCompany', eCompany)
    },
    eStart({commit}, eStart) {
      commit('eStart', eStart)
    },
    eEnd({commit}, eEnd) {
      commit('eEnd', eEnd)
    },
    eCause({commit}, eCause) {
      commit('eCause', eCause)
    },

  },
})
