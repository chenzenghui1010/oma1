import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import invitationo  from '../components/invitationo'
import invitationt  from '../components/invitationt'
import makeo from '../components/makeo'
import maket from '../components/makeT'
import makethree from '../components/makeThree'
import excitedabouto from '../components/excitedAbouto'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'maket',
      component: maket
    },
    {
      path:'/makeo',
      name:'makeo',
      component:maket,
    },
    {
      path:'/makethree',
      name:'makethree',
      component:makethree
    },
  ]
})
