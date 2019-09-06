<template>
  <div class>
    <h3>Created event</h3>
    <form @submit.prevent="submitHandler">
      <div class="row">
        <div class="input-field col l6 s12">
          <input id="title" type="text" v-model="title" class="validate" />
          <label for="title">Name the event you are waiting for</label>
        </div>
      </div>
      <div class="row">
       <div class="col s6">
          <p>What is it?</p>
           <p>
          <label>
            <input name="group1" type="radio" value="Movie" v-model="category" />
            <span>Movie</span>
          </label> 
          <i class="material-icons dp48">local_movies</i>         
          </p>
        <p>
          <label>
            <input name="group1" type="radio" value="Serials" v-model="category" />
            <span>Serials</span> 
          </label>
          <i class="material-icons">ondemand_video</i>
        </p>
        <p>
          <label>
            <input name="group1" type="radio" value="Games" v-model="category" />
            <span>Games</span> 
          </label>
          <i class="material-icons">videogame_asset</i>
        </p>
        
       </div>
      </div>
      <div class="row">
        <div class="input-field col s6">
          <input id="date_event" type="text" ref="datepicker" class="datepicker" />
          <label for="date_event">Release date</label>
        </div>
      </div>             
          <div class="row">
            <div class="input-field col l6 s12">
              <textarea
                id="description"
                class="materialize-textarea"
                type="text"
                v-model="description"
                data-length="250"
              />
              <label for="description">Description</label>
              <span
                class="character-counter"
                style="float: right; font-size: 12px;"
              >{{description.length}}/250</span>
            </div>
          </div>        
      
      <button class="btn" type="submit">Create new event</button>
    </form>
  </div>
</template>
<script>
export default {
  name: "create",
  data: () => ({
    description: "",
    title: "",
    date: null,
    category: ''
  }),
  mounted() {
    this.date = M.Datepicker.init(this.$refs.datepicker, {
      format: "dd.mm.yy"
    });
  },
  methods: {
    submitHandler() {
      const event = {
        title: this.title,
        description: this.description,
        id: this.title + Math.round(Math.random()*(1000-1)+1),
        status: "active",
        date: this.date.date,
        category: this.category
      };
      
      this.$store.dispatch("createEvent", event);
      this.$router.push('/')
    }
  },
  destroyed() {
    if (this.date && this.date.destroy) {
      this.date.destroy();
    }
  }
};
</script>

<style lang="scss" scoped>
  i{
    position: absolute;
    padding-left: 5px;
  }
</style>