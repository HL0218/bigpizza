import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{//vuex的状态源，一般不直接操作
        menuItems:[],//菜单数组
        currentUser:localStorage.getItem('currentUser'),//当前用户名默认为空
        isLogin:localStorage.getItem('isLogin')//当前的登录状态，默认为false
    },
    getters:{//派生状态源,一般供mutations使用
        getMenuItems:state=>state.menuItems,
        getCurrentUser:state=>state.currentUser,
        getIsLogin:state=>state.isLogin
    },
    mutations:{
        // 1.增加一条数据
        pushMenuItems(state,data){
            state.menuItems.push(data)
        },
           // 2.获取所有数据
        setMenuItems(state,data){
            state.menuItems=data
        },
        //3.删除一条数据
        deleteMenuItems(state,data){
            state.menuItems.splice(data,1)
        },
        //登录状态
        UserStatus(state,data){
            if(data){//如果登录成功,传入data数据用户名
                state.isLogin=true
                state.currentUser=data
                // 离线储存
                localStorage.setItem('isLogin',true)
                localStorage.setItem('currentUser',data)
            }else{
                state.isLogin=false
                state.currentUser=null
                localStorage.clear()
            }
        }
    },
    actions:{//action提交的是mutation,更便于我们管理维护
        setUser({commit},user){
            commit('UserStatus',user)
        }

    }
})  