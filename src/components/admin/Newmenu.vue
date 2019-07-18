<template>
    <div class="mt-5">
        <h3 class="text-center">菜单管理</h3>
      <table class="table table-sm">
  <thead>
    <tr>
      <th scope="col">序号</th>
      <th scope="col">品种</th>
      <th scope="col">操作</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(item,index) in newmenup" :key='index'>
      <td scope="row">{{index+1}}</td>
      <td>{{item.name}}</td>
      <td><button @click='del(item,index)' class="btn btn-danger">干掉</button></td>
     
    </tr>
  </tbody>
</table>
    </div>
</template>

<script>
import axios from 'axios'
    export default {
        name:'Newmenu',
        data(){
            return{
                // newmenup:[]
            }
        },
        mounted(){
            axios.get('./hl-menu.json')
            .then(res=>{
                console.log(res)
                const result=[]
                for(let key in res.data){
                    const item=res.data[key]
                    console.log(key)
                    item.id=key
                    result.push(item)
                }
                   // console.log(this.newmenup)
                   this.$store.commit('setMenuItems',result)
            })
        },
        methods:{
            del(item,index){
                console.log(item.id)
                axios.delete('./hl-menu/'+item.id+'.json')
                .then(res=>{
                    console.log('删掉了')
                    // location.reload()
                    this.$store.commit('deleteMenuItems',index)
                })
            }
        } ,
        computed:{
           newmenup(){
                 return this.$store.getters.getMenuItems
           }
        }
    }
</script>  

<style scoped>
td,th{text-align: center}
</style>