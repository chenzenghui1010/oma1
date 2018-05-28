import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import invitationo from '../components/invitationo'
import invitationt from '../components/invitationt'
import makeo from '../components/makeo'
import maket from '../components/makeT'
import makethree from '../components/makeThree'
import excitedabouto from '../components/excitedAbouto'
import excitedaboutok from '../components/excitedAboutOk'
import audito from '../components/auditO'
import audit from '../components/audit'



import inviteindex from '../components/inviteIndex'
import invierpar from '../components/invitePar'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path:'/',
    //   name:'inviteindex',
    //   component:inviteindex
    // },
    {
      path:'/invierpar',
      name:'invierpar',
      component:invierpar
    },
    {
      path:'/',
      name:'login',
      component:login
    },
    {
      path: '/invitationo',
      name: 'invitationo',
      component: invitationo
    },
    {
      path: '/invitationt',
      name: 'invitationt',
      component: invitationt
    },
    {
      path: '/makeo',
      name: 'makeo',
      component: makeo
    },
    {
      path: '/maket',
      name: 'maket',
      component: maket,
    },
    {
      path: '/makethree',
      name: 'makethree',
      component: makethree
    },
    {
      path: '/excitedabouto',
      name: 'excitedabouto',
      component: excitedabouto,
    },
    {
      path: '/excitedaboutok',
      name: 'excitedaboutok',
      component: excitedaboutok,
    },
    {
      path: '/audito',
      name: 'audito',
      component: audito
    },
    {
      path:'/audit',
      name:'audit',
      component:audit
    },
  ]
})
