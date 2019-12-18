import Vue from 'vue'
import Router from 'vue-router'
import home from './views/home.vue'
import store from './store'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: home      
    },
    {
      path: '/movie',
      name: 'movie',
      // beforeEnter(to, from, next) {
      //   store.getters.checkUser ? next() : next('/login')
      // },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import( /* webpackChunkName: "movie" */ './views/movie.vue')
    },    
    {
      path: '/create',
      name: 'create',
      // beforeEnter(to, from, next) {
      //     store.getters.checkUser ? next() : next('/login')
      // },    
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import( /* webpackChunkName: "create" */ './views/create.vue')
    },
    {
      path: '/registration',
      name: 'registration',      
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import( /* webpackChunkName: "registration" */ './views/registration.vue')
    },
    {
      path: '/login',
      name: 'login',      
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import( /* webpackChunkName: "login" */ './views/login.vue')
    },
  ]
})
