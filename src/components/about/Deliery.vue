<template>
  <div class="row">
    <div class="card mr-2 text-center  deliery-home" style="width: 15rem;" v-for="(number,index) in numbers" :key="index">
      <img class="card-img-top" :src="number.src" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">{{number.name}}*{{number.num}}</h5>
        <p class="card-text text-success">已完成支付</p>
          <span class="btn btn-primary" @click="gump(number)">订单查询</span>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "Deliery",
  data() {
    return {
      numbers: [
        { src: "../../../static/imgs/1.jpg", name: "榴莲多多披萨", num:3},
        { src: "../../../static/imgs/2.jpg", name: "北京潮鸭披萨", num:4},
        { src: "../../../static/imgs/3.jpg", name: "海鲜至尊披萨", num:5}
      ]
    };
  },
  methods:{
    gump(number){
       this.$router.push({ name:'Detail', params:number })
    }
  }
};
</script>

<style scoped>
</style>