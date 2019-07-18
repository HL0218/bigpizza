<template>
  <div>
    <!-- swiper的骨架结构 -->
    <!-- 主要分三层 -->
    <!-- 1.最外层container包裹层 -->
    <div class="swiper-container">
      <!-- 2.中二层 wrapper层  -->
      <div class="swiper-wrapper">
        <!--3.最内层 slide层  -->
        <div class="swiper-slide">
          <img src="../assets/imgs1/6.jpg" alt>
        </div>
        <div class="swiper-slide">
          <img src="../assets/imgs1/7.jpg" alt>
        </div>
        <div class="swiper-slide">
          <img src="../assets/imgs1/8.jpg" alt>
        </div>
        <div class="swiper-slide">
          <img src="../assets/imgs1/9.jpg" alt>
        </div>
        <div class="swiper-slide">
          <img src="../assets/imgs1/10.jpg" alt>
        </div>
        <div class="swiper-slide">
          <img src="../assets/imgs1/11.jpg" alt>
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
      <!-- 如果需要导航按钮 -->
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
      <!-- 跳转登录 -->
      <div class="imgs">
        <div>
          <h5 class="text-primary">欢迎来到My-pizza点餐系统</h5>
          <p class="text-primary">这里有各式各样的披萨,欢迎选购</p>
          <button class="btn btn-primary" @click="Admin">Let's Ordet</button>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row mt-5">
        <div class="col-4">
          <div class="swiper-container1 bg-warning">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <img src="../assets/imgs1/1.jpg" alt>
              </div>
              <div class="swiper-slide">
                <img src="../assets/imgs1/3.jpg" alt>
              </div>
              <div class="swiper-slide">
                <img src="../assets/imgs1/4.jpg" alt>
              </div>
              <div class="swiper-slide">
                <img src="../assets/imgs1/5.jpg" alt>
              </div>
              <div class="swiper-slide">
                <img src="../assets/imgs1/6.jpg" alt>
              </div>
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>
            <span class="id">0{{id}}</span>
          </div>
        </div>
        <div class="col-8 box1">
            <h2 class="mb-5">2018年度媒体报道</h2>
            <div class="box2">
                <p><img width="27" src="../assets/imgs1/number1.png" alt="">
                <span>保障骑手安心无忧送餐路 美团外卖首发《骑手生活安全指南》</span></p>
                 <p><img width="27" src="../assets/imgs1/number2.png" alt="">
                <span>MINISO名创优品正式入驻美团闪购 时尚单品30分钟送达</span></p>
                 <p><img width="27" src="../assets/imgs1/number3.png" alt="">
                <span>美团上线闪购业务 以“快”破局助力零售升级</span></p>
                 <p><img width="27" src="../assets/imgs1/number4.png" alt="">
                <span>Trustdata发布2018上半年外卖份额数据 美团饿了么百度“631”格局三分天下</span></p>
                 <p><img width="27" src="../assets/imgs1/number5.png" alt="">
                <span>美团城市新青年 外卖骑手正能量图鉴</span></p>
            </div>
        </div>
      </div>
    </div>
    <div class="container mt-5 mb-5">
        <h3 class="text-center">快递查询</h3>
        <Histioy class="kuaiti"></Histioy>
    </div>
    <!-- 路由嵌套 -->
     <h4 class="text-center">历史订单</h4>
  </div>
</template>

<script>
import Swiper from "swiper";
import "../assets/dist/css/swiper.min.css";
import Histioy from './about/Histioy'
export default {
  name: "Home",
  data(){
      return{
          id:1
      }
  },
  mounted() {
    var swiper = new Swiper(".swiper-container", {
      loop: true,
      effect: "fade",
      autoplay: true,
      //定时器
      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      // 如果需要前进后退按钮
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      }
    });
    var that=this
    var swiper = new Swiper(".swiper-container1", {
    
      loop: true,
      direction:"vertical",
      effect: "fade",
       autoplay: {
    delay: 3000,
    stopOnLastSlide: false,
    disableOnInteraction: false,
    },
      //定时器
      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
       on: {
          slideChange: function () {

             console.log(this.activeIndex);
           var ind=this.activeIndex;
            if(ind>5){
                ind=1
            }
             if(ind<1){
                ind=5
            }
            console.log(that.id)
            that.id=ind
          },
        },
    });
  },
  methods: {
    Admin() {
      this.$router.push("/admin");
    }
  },
  components:{
      Histioy
  }
};
</script>

<style scoped>
.kuaiti{
    display: flex
}
.kuaiti>.histioyhome{
   flex: 1;
   margin-right: 20px
}  
.id{
    position: absolute;
    display: block;
    right:5px;
    top:60%;
}
.box2 p span{
    display: inline-block;
    font-size:16px;
    line-height:24px;
}
.box2 p span:hover{
    font-weight: bold;
      font-size:18px;
}
.box1{padding-left:100px;}
.swiper-container {
  width: 100%;
  height: 550px;
  position: relative;
}
.swiper-container1 {
    margin-top: 50px;
  width: 400px;
  height:300px;
  position: relative;
}
.swiper-container1 .swiper-wrapper{
    position: absolute;
    top:-25px;
    left: -30px;
}
.swiper-container1 .swiper-pagination{
    top:80%
}
.swiper-slide img {
  width: 100%;
  height: 100%;
}
.imgs {
  width: 360px;
  height: 420px;
  /* background: red; */
  background: url(../assets/imgs1/3.jpg) no-repeat;

  z-index: 99;
  position: absolute;
  top: 100px;
  left: 110px;
}
.imgs div {
  text-align: center;
  position: absolute;
  top: 180px;
  width: 360px;
  height: 111px;
  background-color: #ccc;
  background: rgba(255, 255, 255, 0.6);
}
</style>