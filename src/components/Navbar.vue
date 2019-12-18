<template>
  <div>    
    <nav class="deep-purple darken-4">
    <div class="nav-wrapper">
      <router-link to="/" class="brand-logo">ReleaseTime</router-link>
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
        to="/movie"
        exact
        
        active-class="active"
        >
        <a href="#">Movie</a>
        </router-link> 

        <router-link 
        tag="li"
        to="/registration"
        v-if="!checkUser"
        exact        
        active-class="active"
        >
        <a href="#">Sign Up</a>
        </router-link>

        <router-link         
        tag="li"
        to="/login"
        v-if="!checkUser"        
        exact
        active-class="active"
        >
        <a href="#">Sign In</a>
        </router-link>

        <li
        v-if="checkUser"
        @click="logout">
        <a href="#">Logout</a>
        </li>       
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
        v-if="checkUser"
        active-class="active"
        >
        <a href="#" class="sidenav-close">Create</a>
        </router-link>

        <router-link 
        tag="li"
        to="/movie"
        exact        
        active-class="active"
        >
        <a href="#" class="sidenav-close">Movie</a>
        </router-link>

        <router-link 
        tag="li"
        to="/registration"
        exact
        v-if="!checkUser"
        active-class="active"
        >
        <a href="#" class="sidenav-close">Sign Up</a>
        </router-link>

        <router-link 
        tag="li"
        to="/login"
        v-if="!checkUser"
        exact       
        active-class="active"
        >
        <a href="#" class="sidenav-close">Sign In</a>
        </router-link>

        <li
        v-if="checkUser"
        @click="logout">
        <a href="#" class="sidenav-close">Logout</a>
        </li> 
  </ul>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Navbar',    
  mounted() {    
    M.Sidenav.init(this.$refs.sidenav, {
      // onOpenEnd: sidenav.close(),
      edge: 'right'
    })
  },
  computed: {
    checkUser() {
      return this.$store.getters.checkUser
    },
    // onOpenEnd(){
    //   this.$refs.sivenav.close();
    // }
  },
  methods: {
    logout() {      
        this.$store.dispatch('logoutUser')
        this.$router.push('/login')                    
      }        
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
  .sidenav{
    width: 150px;
  }
  .sidenav-trigger{
    float: right;
  }
</style>