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
    eLicense: '请选择',
    eLicenseNumber: '',
    eCar: '请选择',
    eCarNumber: '',
    eCompany: '',
    eStart: '',
    eEnd: '',
    eCause: '',



    //来访邀约 被访者
    inName: '',
    inPoints: '',
    inCompany:'',
    inDep:'',


    //来访邀约 来访者
    iName: '',
    iPoints: '',
    iLicense: '证件类型',
    iLicenseNumber: '',
    iCar: '',
    iCarNumber: '',
    iCompany: '',
    iStart: '',
    iEnd: '',
    iCause: '',

    //随行人
    follower: [],
    ifollower:[],
  },
  mutations: {
    //
    phone( state , phone){
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


    //来访邀约 被访者


    inName(state, inName) {
      state.inName = inName;
    },
    inPoints(state, inPoints) {
      state.inPoints = inPoints;
    },
    inCompany(state, inCompany) {
      state.inCompany = inCompany;
    },
    inDep(state, inDep) {
      state.inDep = inDep;
    },

    //来访邀约 来访者
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

    ifollower(state, ifollower) {
      state.ifollower = ifollower
    },

  },

  actions: {
    phone({commit},phone){

      commit('phone' , phone)
    },

    follower({commit}, foll) {
      return new Promise(resolve => {
        commit('follower', foll)
        resolve();
      })
    },
    ifollower({commit}, ifoll) {
      return new Promise(resolve => {
        commit('ifollower', ifoll)
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



    //邀约 被访者

    inName({commit}, inName) {
      commit('inName', inName)
    },
    inPoints({commit}, inPoints) {
      commit('inPoints', inPoints)
    },
    inCompany({commit}, inCompany) {
      commit('inCompany', inCompany)
    },
    inDep({commit}, inDep) {
      commit('inDep', inDep)
    },

    //邀约 来访者
    iName({commit}, iName) {
      commit('iName', iName)
    },
    iPoints({commit}, iPoints) {
      commit('iPoints', iPoints)
    },
    iLicense({commit}, iLicense) {
      commit('iLicense', iLicense)
    },
    iLicenseNumber({commit}, iLicenseNumber) {
      commit('iLicenseNumber', iLicenseNumber)
    },
    iCar({commit}, iCar) {
      commit('iCar', iCar)
    },
    iCarNumber({commit}, iCarNumber) {
      commit('iCarNumber', iCarNumber)
    },
    iCompany({commit}, iCompany) {
      commit('iCompany', iCompany)
    },
    iStart({commit}, iStart) {
      commit('iStart', iStart)
    },
    iEnd({commit}, iEnd) {
      commit('iEnd', iEnd)
    },
    iCause({commit}, iCause) {
      commit('iCause', iCause)
    },

  },
})
