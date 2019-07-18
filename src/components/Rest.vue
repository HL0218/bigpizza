<template>
  <div class="container">
    <div class="city">
      <div class="box1">
        <span>当前的城市:</span>&nbsp;
        <span>{{cityId}}</span>&nbsp;
      <city-selector class="city1" field="city" placeholder="切换" :city-list="cityList" v-model="cityId"></city-selector>
      </div>
      <div class="box2">
        <span>餐厅关键字:</span>&nbsp;
        <input type="text" v-model="info" placeholder="输入餐厅地址或餐厅名称">&nbsp;&nbsp;
        <button @click="cha()">查询</button>
      </div>
      <div class="box3">
        <span>旅游购物游乐场</span>
        <span>交通枢纽</span>
        <span>早餐</span>
        <span>礼品卡</span>
        <span>支付宝</span>
      </div>
    </div>
    <div class="box4">
      &nbsp;&nbsp;
      <span class="xia">查询结果如下:</span>
      <span>热门活动:</span>
      <font class="textBox">
        <transition name="fade">
          <span class="text faae" :key="text.id">{{text.val}}</span>
        </transition>
      </font>
    </div>
    <div class="row">
      <div class="col-4" id="panel"></div>
      <div class="col-8" id="container" style="width:800px; height:500px"></div>
    </div>
  </div>
</template>

<script>
// 局部引用
import {citySelector} from "vue2-city-selector";
import cityList from 'china-city-data';
export default {
  name: "Rest",
  data() {
    return {
      info: "",
      placeSearch: "",
      number: 0,
      textArr: ["·必胜客六一季》", "·必胜客六一季》"],
      cityId: '北京',
      cityList,
      cityName:'北京'
    };
  },
  watch:{
    cityId(){
      this.placeSearch.setCity(this.cityId)
      this.cha('必胜客')
      console.log(this.cityList)
        // for(var key in this.cityList){
        //     var result=this.cityList[key].find((item)=>{
        //     return item.id==this.cityId  
        //     })
        // }
        // if(result!=undefined){
        // this.cityName=result.name 
        // }
        //   if(this.cityId=='110100' || this.cityId=='120100' || this.cityId=='310100'){
        //     var id=this.cityId.replace(/100$/,'000')
        //   }else{
        //     var id = this.cityId
        //   }
        //   this.placeSearch.setCity(id)
        //   this.search('必胜客')
      
    }
  },
  methods: {
    getMap() {
      var that = this;
      var map = new AMap.Map("container", {
        zoom: 13, //级别
        center: [116.397428, 39.90923], //中心点坐标
        viewMode: "3D" //使用3D视图
      });

      AMap.plugin(["AMap.ControlBar"], function() {
        // 添加 3D 罗盘控制
        map.addControl(new AMap.ControlBar());
      });
      AMap.service(["AMap.PlaceSearch"], function() {
        //构造地点查询类
        that.placeSearch = new AMap.PlaceSearch({
          pageSize: 5, // 单页显示结果条数
          pageIndex: 1, // 页码
          city: "010", // 兴趣点城市
          citylimit: true, //是否强制限制在设置的城市内搜索
          map: map, // 展现结果的地图实例
          panel: "panel", // 结果列表将在此容器中进行展示。
          autoFitView: true // 是否自动调整地图视野使绘制的 Marker点都处于视口的可见范围
        });
        //关键字查询
        that.placeSearch.search("必胜客");
      });
    },
    cha(value) {
      //关键字查询
      if(value){
         this.placeSearch.search(value)
      }else{
         this.placeSearch.search(this.info);
      }
     
    },
    run2() {
      var timer1 = setInterval(() => {
        if (this.number == this.textArr.length - 1) {
          this.number = 0;
        } else {
          this.number += 1;
        }
      }, 2000);
    }
  },
  mounted() {
    this.getMap();
    this.run2();
  },
  computed: {
    text() {
      return {
        id: this.number,
        val: this.textArr[this.number]
      };
    }
  }
};
</script>

<style scoped>
.box4 .xia {
  color: #6f2a00;
  margin-right: 252px;
}
.box4 span {
  color: #6f2a00;
}
.faae {
  position: absolute;
  width: 150px;
  height:36px;
  
}
.textBox {
  position: relative;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s linear;
}
.fade-enter {
  transform: translateY(30px);
}
.fade-leave-to {
  transform: translateY(-30px);
}
.container .box4{
  overflow: hidden;
}
.container .box4 span {
  display: inline-block;
  font: 16px/36px "微软雅黑";
}
.city {
  height: 149px;
  width: 100%;

  border-bottom: 1px dotted #6f2a00;
  margin: 0 10px;
  /* margin-bottom: 20px; */
  padding-top: 35px;
  color: #6f2a00;
}
.city .box1 {
  margin-bottom: 20px;
  position: relative
}
.city .box1 .city1{
  position: absolute ;top:-2px; left: 156px;
  width: 70px;
  border: none
}
.city .box2 {
  margin-bottom: 5px;
}
.city .box2 input {
  border-radius: 20px;
  text-indent: 20px;
  width: 300px;
  color: #6f2a00;
  outline: none;
  border: 1px solid #6f2a00;
}
.city .box2 button {
  border-radius: 20px;
  width: 100px;
  background: white;
  color: #6f2a00;
  outline: none;
  border: 1px solid #6f2a00;
}
.city .box3 {
  padding-left: 90px;
}
.city .box3 span {
  display: inline-block;
  margin-right: 10px;
  font-size: 10px;
}
.city .box3 span:hover {
  background: rgb(196, 14, 26);
  color: white;
}

</style>
<style>
.amap_lib_placeSearch_poi{
  width: 30px;
  height: 30px;
  background: url(http://static.pizzahut.com.cn/PC/Content/images/0.png) no-repeat;
  background-size: 30px
}
</style>
