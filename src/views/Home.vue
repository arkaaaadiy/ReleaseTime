<template>
  <div>
    <h1>Upcoming events</h1>

    <hr />

    <table v-if="events.length">
      <thead>
        <tr>
          <th>Title</th>
          <th>Category</th>
          <th>Status</th>
          <th>Date</th>
          <th>Before the event</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(event, index) in events" :key="index">
          <td>{{event.title}}</td>
          <td>
            {{event.category}}
            <i
              v-if="event.category == 'Movie'"
              class="material-icons dp48"
            >local_movies</i>
            <i v-if="event.category == 'Serials'" class="material-icons dp48">ondemand_video</i>
            <i v-if="event.category == 'Games'" class="material-icons dp48">videogame_asset</i>
          </td>
          <td>{{event.status}}</td>
          <td>{{new Date(event.date).toLocaleDateString()}}</td>
          <td v-if="Math.ceil((+new Date(event.date) - today) / (24 * 60 * 60 * 1000)) > 1">
          {{ Math.ceil((+new Date(event.date) - today) / (24 * 60 * 60 * 1000))}} days</td>
            <td v-else-if="Math.ceil((+new Date(event.date) - today) / (24 * 60 * 60 * 1000)) == 1">1 day</td>
            <td v-else-if="Math.ceil((+new Date(event.date) - today) / (24 * 60 * 60 * 1000)) == 0"> today</td>             
            <td v-else>Release took place {{new Date(event.date)}}</td>
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
  }),
  computed: {
    events() {
      return this.$store.getters.events;
    }
  },

  methods: {        
  }
};
</script>

<style lang="scss" scoped>
i {
  position: absolute;
  padding-left: 5px;
}
</style>
