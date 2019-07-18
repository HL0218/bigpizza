<template>
  <div id="app">
    <Headers></Headers>
    <!-- <img width="200" src="./assets/2.jpg"> -->
    <router-view></router-view>
    <div class="container mt-5">
    
         <router-view name="deliery" class="deliery"></router-view>
    </div>
  
  </div>
</template>

<script>
import Headers from './components/Header'
export default {
  name: 'App',
  data(){
    return{
      msg:'这是我披萨项目'
    }
  },
  components:{
    Headers
  }
}
</script>

<style>
#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50; */
 
}
.deliery{
  display: flex
}
.deliery-home{
  flex: 1;
  padding: 30px;
  margin: 20px;
}
</style>
