import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import authRouter from '../modules/auth/router'
import loansRouter from '../modules/loans/router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/auth',
    ...authRouter
  },
  {
    path: '/loans',
    ...loansRouter
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
