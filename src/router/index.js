import Vue from 'vue'
import Router from 'vue-router'
//1级路由
//1.引入路由
import Home from '../components/Home'
import Menu from '../components/Menu'
import Admin from '../components/Admin'
import About from '../components/About'
import Login from '../components/Login'
import Register from '../components/Register'
import Rest from '../components/Rest'
import Detail from '../components/Detail'
//2级路由
import Activity from '../components/about/Activity'
import Contact from '../components/about/Contact'
import Histioy from '../components/about/Histioy'
import Deliery from '../components/about/Deliery'
//3级路由
import Address from '../components/about/contact/Address'
import Preson from '../components/about/contact/Preson'
import Tel from '../components/about/contact/Tel'
Vue.use(Router)
//2.设置路由
//3.回到页面设置导航层+路由展示层
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      components:{
        default:Home,
        'deliery':Deliery
      }
    },
    {
      path: '/rest',
      name: 'Rest',
      component: Rest
    },
    {
      path: '/menu',
      name: 'Menu',
      component: Menu
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin,
      // 局部守卫
      // beforeEnter:(to,from,next)=>{
      //   if(localStorage.getItem('currentUser')=='24177@qq.com'){
      //     next()
      //   }else{
      //     alert('对不起，您不配进入这个页面')
      //   }
      // }
    },
    {
      path: '/about',
      name: 'About',
      component: About,
      //2级路由
      children: [
        {
          path: '/about/activity',
          name: 'Activity',
          component: Activity,
        },
        {
          path: '/about/contact',
          name: 'Contact',
          component: Contact,
          redirect:'/about/contact/tel',
          children:[
            {
              path: '/about/contact/address',
              name: 'Address',
              component: Address,
            },
            {
              path: '/about/contact/preson',
              name: 'Preson',
              component: Preson,
            },
            {
              path: '/about/contact/tel',
              name: 'Tel',
              component: Tel,
            }
          ]
        },
        {
          path: '/about/histioy',
          name: 'Histioy',
          component:Histioy,
        },
        {
          path: '/about/deliery',
          name: 'Deliery',
          component: Deliery,
        }]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail
    },
  ],
  mode: 'history' //取消锚点
})
