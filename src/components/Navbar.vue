<template>
  <div>    
    <nav class="deep-purple darken-4">
    <div class="nav-wrapper">
      <router-link to="/" class="brand-logo">Logo</router-link>
      <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
      <ul class="right hide-on-med-and-down">
        <router-link 
        tag="li"
        to="/"
        exact
        active-class="active"
        >
        <a href="#">Home</a>
        </router-link> 
        <router-link 
        tag="li"
        to="/create"
        exact
        active-class="active"
        >
        <a href="#">Create</a>
        </router-link> 
        <router-link 
        tag="li"
        to="/Movie"
        exact
        active-class="active"
        >
        <a href="#">Movie</a>
        </router-link>     
        <router-link 
        tag="li"
        to="/Serials"
        exact
        active-class="active"
        >
        <a href="#">Serials</a>
        </router-link>     
        <router-link 
        tag="li"
        to="/Games"
        exact
        active-class="active"
        >
        <a href="#">Games</a>
        </router-link>     
      </ul>
    </div>
  </nav>

  <ul class="sidenav" ref="sidenav" id="mobile-demo">
      <router-link 
        tag="li"
        to="/"
        exact
        active-class="active"
        >
        <a href="#" class="sidenav-close">Home</a>
        </router-link> 
      <router-link 
        tag="li"
        to="/create"
        exact
        active-class="active"
        >
        <a href="#" class="sidenav-close">Create</a>
        </router-link> 
        <router-link 
        tag="li"
        to="/Movie"
        exact
        active-class="active"
        >
        <a href="#" class="sidenav-close">Movie</a>
        </router-link>     
        <router-link 
        tag="li"
        to="/Serials"
        exact
        active-class="active"
        >
        <a href="#" class="sidenav-close">Serials</a>
        </router-link>     
        <router-link 
        tag="li"
        to="/Games"
        exact
        active-class="active"
        >
        <a href="#" class="sidenav-close">Games</a>
        </router-link>  
  </ul>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Navbar',  
  mounted() {
    M.Sidenav.init(this.$refs.sidenav, {
      //onOpenEnd: sidenav.close(),
    })
  },
}
</script>

<style lang="scss" scoped>
  nav {
    padding: 0 2rem;
  }
  @media screen and (max-width: 450px){
    nav{
      padding: 0;
    }
  }
</style>