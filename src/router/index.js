import Vue from 'vue'
import Router from 'vue-router'
import body from '@/components/body'
import main from '@/pages/main'
import login from '@/pages/user/login'
import register from '@/pages/user/register'
import passwordRecovery from '@/pages/user/password-recovery'


import detailsContainer from '@/components/details-container'
import index from '@/pages/details/index'
import advertiseStrategy from '@/pages/details/advertise-strategy'
import advertiseBanner from '@/pages/details/advertise-banner'
import pay from '@/pages/details/pay'
import datacount from '@/pages/details/datacount'
import account from '@/pages/details/account'



Vue.use(Router)

Vue.directive('focus', {
  // 当被绑定的元素插入到 DOM 中时……
  inserted: function (el) {
    // 聚焦元素
    el.focus()
  }
})


export default new Router({
  mode: 'hash',
  routes: [
  	{
  		path:'/',
  		component:body,
  		redirect: '/main',
  		children:[
			  {
		      path: '/main',
		      component: main,
		    },
        {
          path: '/login',
          component:login,
        },
        {
          path: '/register',
          component:register,
        },
        {
          path: '/password-recovery',
          component:passwordRecovery,
        },
        {
          path: '/',
          component:detailsContainer,
          redirect: '/index',
          children:[
            {
              path: 'index',
              component: index,
            },
            {
              path: 'advertise-strategy',
              component: advertiseStrategy,
            },
            {
              path: 'advertise-banner',
              component: advertiseBanner,
            },
            {
              path: 'datacount',
              component: datacount,
            },
            {
              path: 'pay',
              component: pay,
            },
            {
              path: 'account',
              component: account,
            }
          ]
        }
  		]
  	}
  ]
})

