import { createRouter, createWebHashHistory } from 'vue-router'
import authRouter from '../modules/auth/router'
import loansRouter from '../modules/loans/router'
import isAuthGuard from '../modules/auth/router/auth-guard'

const routes = [
  {
    path: '',
    beforeEnter: [ isAuthGuard ],
    ...loansRouter
  },
  {
    path: '/auth',
    ...authRouter
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
