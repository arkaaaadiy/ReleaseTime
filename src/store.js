import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    event: JSON.parse(localStorage.getItem('event') || '[]')
  },
  mutations: {
    createEvent(state, event){
      state.event.push(event)

      localStorage.setItem('event', JSON.stringify(state.event))
    }
  },
  actions: {
    createEvent({commit}, event){
      commit('createEvent', event)
    }
  },
  getters: {
    events: s => s.event 
  }
})
