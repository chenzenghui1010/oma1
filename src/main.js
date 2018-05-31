// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App'
import router from './router'
import Axios from 'axios'
import qs from 'qs'

Vue.prototype.$axios=Axios;

// Axios.defaults.baseURL='http://zwvisit.indoorun.com';
Vue.prototype.HOST = '/api';

//请求拦截器
Axios.interceptors.request.use(function(config){
  if(config.method === 'post'){
    config.data =  qs.stringify(config.data)
  }
  return config;
  },function(error){
       return Promise.reject(error);
  });

//响应拦截器
Axios.interceptors.response.use(function(response){
  return response;
}, function(error){
  return Promise.reject(error);
});



Vue.config.productionTip = false
Vue.use(ElementUI,{ size: 'small' })
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App  },
  template: '<App/>'
})
