<template>
  <div class="container text-center">
    <img width="100" src="../assets/logo.png">
    <h2 class="text-success">登录</h2>
    <p class="text-danger">{{msg}}</p>
    <div class="form-group">
      <input
        type="text"
        class="form-control"
        id="input1"
        v-model="username"
        placeholder="请输入您的邮箱或账号"
      >
    </div>
    <div class="form-group">
      <input
        type="password"
        class="form-control"
        id="input2"
        v-model="password"
        placeholder="请输入您的密码"
      >
    </div>
    <button type="submit" class="btn btn-primary" @click.prevent="submit1">立即登录</button>
  </div>
</template>

<script>
import axios from 'axios'
    export default {
        name:'Login',
        data(){
            return{
                username:'',
                password:'',
                msg:''
            }
        },
        methods:{
            submit1(){
                if(this.username==''){
                    this.msg='请输入用户名'
                }else if(this.password==''){
                    this.msg='请输入密码'
                }else{
                    this.msg=''
                    axios.get("./hl-user.json")
                    .then(res=>{
                            console.log(res)
                            const result = []
                            for(let key in res.data){
                            result.push(res.data[key])  
                          } 
                    
                          const trueUser=result.filter((item)=>{
                              return item.username==this.username && item.password==this.password
                          })
                          if(trueUser.length>0){
                            alert('登录成功,点击到Home')
                            this.$store.dispatch('setUser',trueUser[0].username)
                            this.$router.push("/");
                          }else{
                              alert('用户名不存在');
                        
                          }
                    })
                }
            }
        }
    }
</script>

<style scoped>
.form-control {
  width: 50%;
  display: inline;
}
.btn {
  width: 50%;
  display: inline-block;
}
p{
  position: absolute;
  top: 226px;
  left: 400px;
}
</style>