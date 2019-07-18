<template>
  <div class="container">
    
    <!-- 路由导航栏 -->
    <div class="row">
        <nav  class="col-md-4">
             <P>
                 <router-link  class="text-center mt-3 list-group-item list-group-item-action list-group-item-success" to="/about/activity">热门活动</router-link>
            </p>
            <P>
                <router-link  class="text-center mt-3 list-group-item list-group-item-action list-group-item-danger"  to="/about/contact">联系我们</router-link>
            </p>
            <P>
                <router-link  class="text-center mt-3 list-group-item list-group-item-action list-group-item-warning" to="/about/deliery">历史订单</router-link>
            </p>
            <P>
                <router-link  class="text-center mt-3 list-group-item list-group-item-action list-group-item-info" to="/about/histioy">快递信息</router-link>
            </p>
        </nav>
        <div  class="col-md-8">
             <router-view> </router-view>
        </div>
         
    </div>
   
    <!-- 路由展示区 -->
  
  </div>
</template>

<script>
export default {
  name: "About"
};
</script>

<style scoped>

</style>