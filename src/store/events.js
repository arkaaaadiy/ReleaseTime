import firebase from 'firebase/app'

import Event from './event_help'

export default({
  state: {
    events: []
  },
  mutations: {
    loadEvents(state, payload) {
      state.events = payload    
    },    
    createEvent(state, payload) {
      state.events.push(payload)    
    },
    clearEvents(state){
      state.event = []
    }    
  },
  actions: {
    async createEvent({commit, getters}, payload){
      commit('clearError')
      commit('setLoading', true)
      try {
        const newEvent = new Event(
          payload.title,
          payload.category,
          payload.date,
          payload.description,
          payload.complited,
          getters.user.id
        )         
        const event = await firebase.database().ref('events').child(`${newEvent.user}`).push(newEvent)

        commit('createEvent',{
          ...newEvent,
          id: event.key
        })          
        commit('setLoading', false)
      } catch (error) {
        commit('setLoading', false)
        commit('setError', error.message)
        throw error
      }
    },

    async loadEvent ({commit}, payload) {
      commit('clearError')
      commit('setLoading', true)
      try {
        const event = await firebase.database().ref('events').child(`${payload}`).once('value')        
        const events = event.val()

        const eventsArray = []
        events ? 
        Object.keys(events).forEach(key => {
          const e = events[key]
          eventsArray.push(
            new Event(
              e.title,
              e.category,
              e.date,
              e.description,
              e.complited,
              e.user,
              key
            )
          )
        })
        : ''

        commit('loadEvents', eventsArray)

        commit('setLoading', false)
      } catch (error) {
        commit('setLoading', false)
        commit('setError', error.message)
        throw error
      }
    },

    async deleteEvent({commit},[user, id]){         
      commit('clearError')
      commit('setLoading', true)
      try {        
        await firebase.database().ref('events').child(user).child(id).remove()
        commit('setLoading', false)
      } catch (error) {
        commit('setLoading', false)
        commit('setError', error.message)
        throw error
      }
    }
  },
  getters: {
    events( state, getters) {
      return state.events.filter(event => {
        return event.user === getters.user.id
      })
    },
    eventMovie (state, getters){
      return getters.events.filter(event => {
        return event.category === 'Movie'
      })
    },
    eventSerials(state, getters) {
      return getters.events.filter(event => {
        return event.category === 'Serials'
      })
    },
    eventGames(state, getters) {
      return getters.events.filter(event => {
        return event.category === 'Games'
      })
    },
  }
})
