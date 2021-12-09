import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '@/store';
Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/destination',
    component: () => import( /* webpackChunkName: "destinations" */ '../views/Destination.vue'),
    props: true,

    children: [{
        name: 'Destination',
        path: '',
        redirect: {
          name: 'DestinationDetails',
          params: {
            destinationId: 1
          },
        },
      },

      {
        path: ':destinationId',
        name: 'DestinationDetails',
        component: () => import( /* webpackChunkName: "destinationdetails" */ '../views/DestinationDetails.vue'),
        props: true
      },

    ],
    beforeEnter: (to, from, next) => {
      let exist = store.destinations.find(dest => dest.id == to.params.destinationId);
      if (exist) {
        next()
      } else {
        next({
          name: 'NotFound'
        })
      }
    }
  },
  {
    path: '/crew',
    name: 'Crew',
    component: () => import( /* webpackChunkName: "crew" */ '../views/Crew.vue'),
    redirect: {
      name: 'CrewDetails',
      params: {
        crewId: 1
      },
    },
    children: [{
        path: ':crewId',
        name: 'CrewDetails',
        component: () => import( /* webpackChunkName: "crewdetails" */ '../views/CrewDetails.vue'),
        props: true
      },

    ],
    beforeEnter: (to, from, next) => {
      let exist = store.crew.find(crew => crew.id == to.params.crewId);
      if (exist) {
        next()
      } else {
        next({
          name: 'NotFound'
        })
      }
    }
  },
  {
    path: '/technology',
    name: 'Technology',
    component: () => import( /* webpackChunkName: "technology" */ '../views/Technology.vue'),
    redirect: {
      name: 'TechnologyDetails',
      params: {
        technoId: 1
      },
    },
    children: [{
        path: ':technoId',
        name: 'TechnologyDetails',
        component: () => import( /* webpackChunkName: "technodetails" */ '../views/TechnologyDetails.vue'),
        props: true
      },

    ],
    beforeEnter: (to, from, next) => {
      let exist = store.technology.find(tech => tech.id == to.params.technoId);
      if (exist) {
        next()
      } else {
        next({
          name: 'NotFound'
        })
      }
    }

  },
  {
    path: '*',
    name: 'NotFound',
    component: () => import( /* webpackChunkName: "404" */ '../views/NotFound.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router