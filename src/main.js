import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import router from './router'
import store from './store'
import 'materialize-css/dist/js/materialize.min'
import './registerServiceWorker'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false

Vue.use(
  Vuelidate
)

new Vue({
  router,
  store,
  created(){
    var firebaseConfig = {
      apiKey: "AIzaSyBX_Md2NCrtkU-oSWzn15DyGS1eY6PgwmQ",
      authDomain: "releaseschedule-89437.firebaseapp.com",
      databaseURL: "https://releaseschedule-89437.firebaseio.com",
      projectId: "releaseschedule-89437",
      storageBucket: "releaseschedule-89437.appspot.com",
      messagingSenderId: "604846244014",
      appId: "1:604846244014:web:63ff196a7e129ba34aad3f"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch('loggedUser', user.uid)

        this.$store.dispatch('loadEvent', user.uid)
      }
    });
  },
  render: h => h(App)
}).$mount('#app')
