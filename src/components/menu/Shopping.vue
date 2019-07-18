<template>
    <div>
         <h3 class="text-center text-primary">购物车</h3>
         <table class="table">
  <thead >
    <tr class="bg-primary text-white">
      <th scope="col">数量</th>
      <th scope="col">种类</th>
      <th scope="col">价格</th>
   
    </tr>
  </thead>
  <template v-if="newOrder.length>0">
    <tbody>
    <tr v-for='(item,index) in newOrder' :key="index">
      <th scope="row">
        <button class="btn btn-success" @click="remove(item,index)">-</button>
      <input min='0' max='10' width="100" type="number" v-model.number="item.number">
      <button  class="btn btn-success" @click="item.number>=10?item.number=10:item.number++">+</button> 
      </th>
      <td>{{item.name}}--{{item.size}}</td>
      <td>{{item.price}}</td>
    </tr>
    <tr>
        <td colspan="3" class="text-right"><h3 class="text-info">商品总件数:{{ToralNum}}</h3></td>
    </tr>
    <tr>
        <td colspan="3" class="text-right"><h3 class="text-info">商品总价格:{{ToralPrice}}</h3></td>
    </tr>
    </tbody>
  </template>
  <template v-else>
    <tbody>
      <tr>
           <td colspan="3"><h2 class="text-warning">购物车空空如也</h2></td>
      </tr>
    </tbody>
  </template>
</table>
    </div>
</template>

<script>
    export default {
        name:'Shopping',
        props:["newOrder"],
        methods:{
            remove(item,index){
                if(item.number>1){
                    item.number--
                }else{
                    this.newOrder.splice(index,1)
                }
            }
        },
        computed:{
            ToralNum(){
               return this.newOrder.reduce((prev,next)=>{
                 return prev+next.number
               },0)
            },
            ToralPrice(){
                return this.newOrder.reduce((prev,next)=>{
                 return prev+next.number*next.price
               },0)
            }
        }
    }
</script>

<style scoped>
th,td{text-align: center}
input{width: 50px;text-align: center}
button{margin:0 5px;}
</style>