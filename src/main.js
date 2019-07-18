// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
Vue.config.productionTip = false
//引入axios
import axios from 'axios'
//配置axios
axios.defaults.baseURL='https://wd8134282462azqsqv.wilddogio.com/'
/* eslint-disable no-new */
// 配置切换城市
import citySelector from 'vue2-city-selector'
Vue.use(citySelector)
//路由守卫
// router.beforeEach((to, from, next) => {
//   console.log(localStorage.getItem('isLogin'))
//   //to and from are Route Object,next() must be called to resolve the hook}
//   if(localStorage.getItem('isLogin')){//登录状态
//     next()
//   }
//   else{//未登录状态
//     if(to.path=='/login' || to.path=='/register'){
//       next()
//     }else{
//       if(confirm('您吃了吗?登录吧')){
//         next('/login')
//       }else{
//         next(false)
//       }
//     }
//   }
// })
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
