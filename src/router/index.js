import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BookingsView from '@/views/BookingsView.vue'
import DoggydaycareView from '@/views/DoggydaycareView.vue'
import SleepoversView from '@/views/SleepoversView.vue'
import SignUp from '@/views/SignUp.vue'

import LoginView from '@/views/LoginView.vue'



const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },

  {
    path : '/signup',
    name : 'signup',
    component : SignUp
  },

  {
    path : '/login',
    name : 'login',
    component : LoginView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },

  {
    path: '/doggydaycare',
    name: 'doggydaycare',
    component: DoggydaycareView
  },

  {
    path: '/bookings',
    name: 'bookings',
    component: BookingsView
  },

  {
    path: '/sleepovers',
    name: 'sleepovers',
    component: SleepoversView
  },

  {
    path: '/contact',
    name: 'contact',
    component: () => import(/* webpackChunkName: "contact" */ '../views/ContactView.vue')
  },
  {
    path:'/ratespackages',
    name:'ratespackages',
    component: () => import('../views/RatesPackages.vue')
  }



]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
