import Vue from 'vue'
import Vuex from 'vuex'

import user from './user'
import events from './events'
import common from './common'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    modules:{
        user,
        common,
        events
    },
    strict: debug    
})