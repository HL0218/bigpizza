<template>
  <div class="card text-center">
    <div class="card-header bg-success">Featured</div>
    <div class="card-body">
      <h5 class="card-title">联系我们</h5>
      <p class="card-text text-danger">欢迎来到HL-pizza关于我们页面</p>
      <!-- 路由导航栏 -->
      <router-link class="btn btn-primary" to="/about/contact/address">地址信息</router-link>
      <router-link class="btn btn-primary" to="/about/contact/preson">法人代表</router-link>
      <router-link class="btn btn-primary" to="/about/contact/tel">电话热线</router-link>
      <!-- 路由展示 -->
      <router-view></router-view>
    </div>
    <div class="card-footer text-muted bg-success">14 days ago</div>
  </div>
</template>

<script>
export default {
  name: "Contact"
};
</script>

<style scoped>
</style>