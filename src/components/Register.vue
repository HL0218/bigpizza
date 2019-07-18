<template>
  <div class="container text-center">
    <img width="100" src="../assets/logo.png">
    <h2 class="text-success">注册</h2>
    <div class="form-group">
      <input type="text" class="form-control" id="input1" v-model="username" placeholder="请输入您的邮箱或账号">
    </div>
     <div class="form-group">
      <input type="password" class="form-control" id="input2" v-model="password" placeholder="请输入您的密码">
    </div>
     <div class="form-group">
      <input type="password" class="form-control" id="input3" v-model="repassword" placeholder="请确认您的密码">
    </div>
      <button type="submit" class="btn btn-primary" @click.prevent='submit'>立即注册</button>
  </div>
</template>

<script>
//借助axios请求来的数据
import axios from 'axios'
export default {
  name: "Register",
  data(){
      return{
          username:'',
          password:'',
          repassword:''
      }
  },
  methods:{
      submit(){
          if(this.username==''){
              alert('账号不能为空')
          }else if(this.password==''){
              alert('密码不能为空')
          }else if(this.repassword==''){
              alert('确认密码不能为空')
          }else if(this.password!==this.repassword){
              alert('两次输入不一致')
          }else{
              //输入验证数据是否存在，先请求一次数据库
            axios.get('./hl-user.json',FormData)
            .then(res=>{
                const result=[]
                console.log(res.data)
                for(let key in res.data){
                    console.log(key)
                    result.push(res.data[key])
                }
                console.log(result)
                const trueUser=result.filter(item=>{
                    return item.username==this.username
                })
                if(trueUser.length>0){
                    alert('用户名已存在')
                }else{
                       //发送数据为对象
              const formData={
                  username:this.username,
                  password:this.password
              }
              axios.post('./hl-user.json',formData)
              .then(res=>{
                  alert('注册成功')
                  this.$router.push('/login')
              })
                }
            })
           
          }
      }
  }
};
</script>

<style scoped>
.form-control{
    width: 50%;
    display: inline;
}
.btn{
    width: 50%;
    display:inline-block
}
</style>