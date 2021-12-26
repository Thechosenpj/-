<template>
  <div id="app">
    <left-nav></left-nav>
    <div class="main">
      <router-view/>
    </div>
    
  </div>
</template>
<script>


import leftNav from './components/common/leftNav.vue'
export default {
  name:"app",
  components: {
    leftNav
  },
  mounted(){
    var orderHeight=document.body.clientHeight;
    document.getElementById("order-list").style.height=orderHeight+'px';
  }
}
</script>

<style>
#app {
  font-family: 'Microsoft YaHei','Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  height:100%;
  overflow: hidden;
}

.main{
  float:left;
  width:95%; 
  background-color: #EFF2F7;
  height:100%;
  overflow: auto;
}
html,body{
  height: 100%;
}
</style>
