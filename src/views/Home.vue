<template>
  <div>
    <h3 v-if="checkUser">Hello</h3>

    <router-link 
        tag="li"
        to="/create"
        exact        
        v-if="checkUser"
        active-class="active"
        >
        <a href="/create" class="sidenav-close">Create</a></router-link>

        <router-link 
        tag="li"
        to="/movie"
        v-if="checkUser"
        exact        
        active-class="active"
        >
        <a href="#" class="sidenav-close">Movie</a></router-link>
    <!-- <h3>Upcoming release</h3>

    <hr /> -->

    <!-- <table v-if="events.length" >
      <thead>
        <tr>
          <th>Title</th>
          <th>Category</th>
          <th>Date</th>
          <th>Before the event</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(event, index) in events" :key="index">
          <td>{{event.title}}</td>
          <td>
            {{event.category}}
            
          </td>
          <td>{{new Date(event.date).toLocaleDateString()}}</td>
          
          <td
            v-if="Math.ceil((+new Date(event.date) - today) / (24 * 60 * 60 * 1000)) > 1"
          >{{ Math.ceil((+new Date(event.date) - today) / (24 * 60 * 60 * 1000))}} days</td>
          <td
            v-else-if="Math.ceil((+new Date(event.date) - today) / (24 * 60 * 60 * 1000)) == 1"
          >1 day</td>
          <td
            v-else-if="Math.ceil((+new Date(event.date) - today) / (24 * 60 * 60 * 1000)) == 0"
          >today</td>
          <td v-else>Released</td>
          <td><button class="waves-effect waves-teal btn-flat"><i class="material-icons">delete</i></button></td>
        </tr>
      </tbody>
    </table>
    <p v-else>no events have been added</p> -->

    <div class="fixed-action-btn direction-top" id="add_btn">
     
     <router-link 
      tag="a"
      to="/create"
      class="btn-floating waves-effect waves-light btn-large red"
     ><i class="material-icons">add</i>
     </router-link>
     </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "home",
  data: () => ({
    dl: 0,
    today: +new Date()
  }),
  mounted() {
   
  },
  computed: {
    checkUser() {          
      return this.$store.getters.checkUser 
    }
  },

  methods: {    
  }
};
</script>

<style lang="css" scoped>
#add_btn{
  bottom: 45px;
  right: 24px;
}
</style>
