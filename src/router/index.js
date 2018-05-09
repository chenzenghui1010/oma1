import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import invitationo  from '../components/invitationo'
import invitationt  from '../components/invitationt'
import makeo from '../components/makeo'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'makeo',
      component: makeo
    }
  ]
})
