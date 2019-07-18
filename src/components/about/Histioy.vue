<template>
  <div class="row">
    <div class="card mr-2 historyhome"
       v-for="(number,index) in numbers" :key="index">
      <img height="230" class="card-img-top" :src="number.src" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">{{number.name}}</h5>
        <p class="card-text text-success">{{number.num}}</p>
        <a href="#" class="btn btn-primary">快递查询</a>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "Histioy",
  data(){
      return{
           numbers: [
        { src: "../../../static/imgs/4.jpg", name: "顺丰速运", num:'你的快递信息已发至河北张家口'},
        { src: "../../../static/imgs/5.jpg", name: "圆通快递", num:'你的快递信息已发至山东青岛'},
        { src: "../../../static/imgs/6.jpg", name: "中通快递", num:'你的快递信息已发至河南洛阳'}
        ]
      }
       
  }
};
</script>

<style scoped>
.card{
  width: 30%;
  flex: 1;
  padding: 20px;
}
</style>