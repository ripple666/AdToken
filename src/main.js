// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './components/App'
import router from './router'
import axios from 'axios'
import store from './store'

import 'animate.css'  //全局引用css
Vue.prototype.$http = axios  //全局使用axios

router.afterEach((to, from) => { //监听页面路由发生变化
    let path = to.path
    console.log(path)
    let detailIndex ={
      nowFirstIndex : 0,
      nowSconIndex : 0
    }
    switch(path){
     case '/index':
       detailIndex.nowFirstIndex = 0
       detailIndex.nowSconIndex = 0
       break;
     case '/advertise-campaign':
       detailIndex.nowFirstIndex = 1
       detailIndex.nowSconIndex = 0
       break;
     case '/advertise-banner':
       detailIndex.nowFirstIndex = 1
       detailIndex.nowSconIndex = 1
       break;
     case '/datacount':
       detailIndex.nowFirstIndex = 2
       detailIndex.nowSconIndex = 0
       break;
     case '/pay':
       detailIndex.nowFirstIndex = 3
       detailIndex.nowSconIndex = 0
       break;
     case '/account':
       detailIndex.nowFirstIndex = 4
       detailIndex.nowSconIndex = 0
       break;
    }
    store.commit('setDetailIndex',detailIndex)
})

Vue.config.productionTip = false //关闭生产模式下给出的提示

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
