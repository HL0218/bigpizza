<template>
  <div class="row">
    <div class="card mr-2" style="width: 15rem;" v-for="(number,index) in numbers" :key="index">
      <img height="230" class="card-img-top" :src="number.src" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title text-primary">{{number.name}}</h5>
        <p class="card-text">{{number.num}}</p>
      </div>
       <a href="#" class="btn btn-primary btn-lg btn-block">查询活动</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Activity",
  data() {
    return {
      numbers: [
        { src: "../../../static/imgs/1.jpg", name: "榴莲多多披萨", num: '五一七天乐，越吃越欢乐' },
        { src: "../../../static/imgs/2.jpg", name: "吃北京潮鸭披萨，赢取苹果MAX", num:'只要大胆尝试下一个幸运就是你' },
        { src: "../../../static/imgs/3.jpg", name: "海鲜至尊披萨美味不可抵挡", num:'只有你想不到的优惠哦！' }
      ]
    };
  }
};
</script>

<style scoped>
</style>