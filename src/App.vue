<template>
  <div id="app">
    <Navbar/>
    <div class="container">  
    <router-view/>
    </div>
  </div>
</template>

<script>
  import Navbar from '@/components/Navbar'
export default {
  components: {Navbar}
}
</script>

<style lang="css">
  @import "~materialize-css/dist/css/materialize.min.css";
</style>
