<template>
<div class="box1">
  <div class="card text-center" style="width: 18rem;">
    <img class="card-img-top" :src="card.src" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">{{card.name}}</h5>
      <p class="card-text">购买数量:{{card.num}}</p>
      <a href="#" class="btn btn-primary" @click="back">Go Back</a>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "Detail",
  data() {
    return{
        card:{}
    }
  },
  mounted(){
      console.log(this.$route.params)
    this.card=this.$route.params
  },
  methods:{
      back(){
          this.$router.go(-1)
      }
  }
};
</script>

<style scoped>
.box1{
    width: 100%;
    height:510px;
    background: rgba(0,0,0,0.6);
    position: relative;
}
.card{
    position: absolute;
    top: 6%;
    left: 39%;
}
</style>