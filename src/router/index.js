import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/destination',
    name: 'Destination',
    component: () => import( /* webpackChunkName: "destinations" */ '../views/Destination.vue')
  },
  {
    path: '/crew',
    name: 'Crew',
    component: () => import( /* webpackChunkName: "crew" */ '../views/Crew.vue')
  },
  {
    path: '/technology',
    name: 'Technology',
    component: () => import( /* webpackChunkName: "technology" */ '../views/Technology.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router