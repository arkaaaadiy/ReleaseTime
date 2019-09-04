<template>
  <div class>
    <h3>Created event</h3>
    <form @submit.prevent="submitHandler">
    <div class="row">
      <div class="input-field col s6">
        <input id="title" type="text" v-model="title" class="validate" />
        <label for="title">Name the event you are waiting for</label>
      </div>
    </div>
    <div class="row">
      <div class="input-field col s6">
        <input id="date_event" type="text" ref="datepicker" class="datepicker" />
        <label for="date_event">Release date</label>
      </div>
    </div>
    <div class="row">
      <div class="col s12">
        <div class="row">
          <div class="input-field col s6">
            <textarea id="description" class="materialize-textarea" type="text" v-model="description" data-length="180" />
            <label for="description">Description</label>
            <span
              class="character-counter"
              style="float: right; font-size: 12px;"
            >{{description.length}}/180</span>
          </div>
        </div>
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
    date: null
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
        description: this.title,
        id: "",
        status: "active",
        date: this.date.date
      };
      console.log(event);
    }
  },
  destroyed() {
    if (this.date && this.date.destroy) {
      this.date.destroy();
    }
  }
};
</script>