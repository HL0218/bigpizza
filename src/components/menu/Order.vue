<template>
  <div>
    <h3 class="text-center text-primary">点餐</h3>
      <table class="table">
        <thead>
          <tr class="bg-primary text-white">
            <th scope="col">尺寸</th>
            <th scope="col">价格(元)</th>
            <th scope="col">加入</th>
          </tr>
        </thead>
         <template v-if="newMenu.length>0">
        <tbody v-for="(item,index) in newMenu" :key="index">
          <tr>
            <th colspan="3">{{item.name}}</th>
          </tr>
          <tr>
            <th colspan="3">{{item.description}}</th>
          </tr>
          <tr v-for="(item1,index) in item.options" :key="index">
            <th scope="row">{{item1.size}}</th>
            <td>{{item1.price}}</td>
            <td>
              <button class="btn btn-success" @click="addShopp(item,item1)">+</button>
            </td>
          </tr>
        </tbody>
        </template>
           <template v-else>
      <tbody>
        <tr>
          <td colspan="3">
            <h2 class="text-warning">快去添加你的商品吧~</h2>
          </td>
        </tr>
      </tbody>
    </template>
      </table>
 
  </div>
</template>

<script>
export default {
  name: "Order",
  props: ["newMenu"],
  methods: {
    addShopp(item, item1) {
      //console.log(item)
      //console.log(item1)
      this.$emit("Order1", { item: item, item1: item1 });
    }
  }
};
</script>

<style scoped>
td,
th {
  text-align: center;
}
</style>