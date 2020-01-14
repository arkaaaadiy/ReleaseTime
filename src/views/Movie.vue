<template>
  <div>
    <div class="row">
        <h3 class="col s6">Upcoming events</h3>
      <div  class="input-field col m6 s12">
      <select ref="select" v-model="selected">
        <option value=""  selected>All</option>
        <option v-for="option in options" :key="option.id" :value="option.value">{{option.text}}</option>        
      </select>
        <label>Filter Select</label>
      </div>
    </div>
    <hr />

    <table v-if="events">
      <thead>
        <tr>
          <th>Title</th>
          <th>Category</th>
          <th>Date</th>
          <th>Before the event</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(event, index) in events" :key="index">
          <td>{{event.title}}</td>
          <td>{{event.category}}</td>
          <td>{{new Date(event.date).toLocaleDateString()}}</td>
          <td
            v-if="getDay(event.date) > 1"
          >{{ getDay(event.date)}} days</td>
          <td
            v-else-if="getDay(event.date) == 1"
          >1 day</td>
          <td
            v-else-if="getDay(event.date) == 0"
          >today</td>
          <td v-else>Released</td>
          <td>
            <button 
            @click="deleteEvent(event.id)"
            class="waves-effect waves-teal btn-flat">
              <i class="material-icons">delete</i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <p v-else>no events have been added</p>
    
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "home",
  data: () => ({
    dl: 0,
    today: +new Date(),
    selected: '',
    options: [
      {text:'Movie', value: 'Movie'},
      {text:'Serials', value: 'Serials'},
      {text:'Games', value: 'Games'},
      
    ]
  }),
  mounted() {
    M.FormSelect.init(this.$refs.select)
  },
  computed: {
    events() { 
      if (this.selected === 'Movie') {
        return this.$store.getters.eventMovie
      } else if (this.selected === 'Serials') {
        return this.$store.getters.eventSerials
      }  else if (this.selected === 'Games') {
        return this.$store.getters.eventGames
      } else
      return this.$store.getters.events      
    },
    
  },

  methods: {
    deleteEvent(id) {
      this.$store.dispatch("deleteEvent", id).then(() => {
        this.$store.dispatch('loadEvent')
      });
    },
    getDay(date){
      return Math.ceil((+new Date(date) - this.today) / (24 * 60 * 60 * 1000))
    },    
  }
};
</script>

<style lang="css" scoped>
#add_btn {
  bottom: 45px;
  right: 24px;
}
.input-field{
  margin-top: 3%;
}
</style>
