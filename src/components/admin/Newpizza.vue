<template>
    <div class="mt-5">
        <h3 class="text-center">添加新的pizza</h3>
        <form>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4">管理</label>
      <input type="text" class="form-control" v-model='newpizza.name' id="inputEmail4" placeholder="请输入你的披萨种类">
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">商品描述</label>
      <input type="text" class="form-control" v-model='newpizza.description' id="inputPassword4" placeholder="请输入商品描述">
    </div>
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputState">商品尺寸</label>
      <select id="inputState" v-model="newpizza.options[0].size" class="form-control">
        <option selected>8</option>
        <option>10</option>
        <option>12</option>
      </select>
    </div>
    <div class="form-group col-md-6">
      <label for="inputZip">商品价格</label>
      <input type="text" v-model="newpizza.options[0].price" class="form-control" id="inputZip">
    </div>
    <div class="form-group col-md-6">
      <label for="inputState">商品尺寸</label>
      <select id="inputState" v-model="newpizza.options[1].size" class="form-control">
        <option selected>8</option>
        <option>10</option>
        <option>12</option>
      </select>
    </div>
    <div class="form-group col-md-6">
      <label for="inputZip">商品价格</label>
      <input type="text" v-model="newpizza.options[1].price" class="form-control" id="inputZip">
    </div>
  </div>
  <button type="submit" @click.prevent="pushMsg" class="btn btn-primary btn-block">添加pizza</button>
</form>
    </div>
</template>

<script>
import axios from 'axios'
    export default {
        name:'Newpizza',
        data(){
            return{
                newpizza:{
                    name:'',
                    description:'',
                    options:[
                        {size:'',price:''},
                        {size:'',price:''}
                    ]
                }
            }
        },
        methods:{
            pushMsg(){
              var formData={
                   name:this.newpizza.name,
                    description:this.newpizza.description,
                    options:[
                        {size:this.newpizza.options[0].size,price:this.newpizza.options[0].price},
                        {size:this.newpizza.options[1].size,price:this.newpizza.options[1].price}
                    ]
              }
                axios.post('./hl-menu.json',formData)
                .then(res=>{
                     console.log('当前数据已抛出')
                    console.log(res.data)
                    formData.id=res.data.name
                      // location.reload()  
                      // 提交vuex
                      this.$store.commit('pushMenuItems',formData)
                })
            }
        }
    }
</script>

<style scoped>

</style>