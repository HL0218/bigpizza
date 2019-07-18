<template>
    <div class="container">
        <div class="row">
            <div class="col-7"><Order :newMenu='newMenu' @Order1='getOrder'></Order></div>
            <div class="col-5"><Shopping :newOrder='newOrder'></Shopping></div>
        </div>
    </div>
</template>

<script>
import Order from './menu/Order'
import Shopping from './menu/Shopping'
import axios from 'axios'
    export default {
        name:'Menu',
        components:{
            Order,Shopping
        },
        data(){
            return{
                newMenu:[],
                newOrder:[]
            }
        },
        mounted(){
            axios.get('./hl-menu.json')
            .then(res=>{
                for(let key in res.data){
                    this.newMenu.push(res.data[key])
                }
            })
        },
        methods:{
            getOrder(value){
                console.log(value)  
                 const result={
                        name:value.item.name,
                        size:value.item1.size,
                        price:value.item1.price,
                        number:1
                        }
                const trueOrser=this.newOrder.filter(item=>{
                    return item.name==value.item.name && item.size==value.item1.size
                })
                if(trueOrser.length>0){
                    console.log('当前购物信息已存在')
                    if(trueOrser[0].number>=10){
                        alert('当前商品每人只能限购10件')
                    }else{
                        trueOrser[0].number++
                    }
                }else{
                    this.newOrder.push(result)
                }
                
            }
        }
    }
</script>

<style scoped>

</style>