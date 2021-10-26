import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/home.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/about.vue')
  }
]

const router = createRouter({
  history: createWebHistory(''),
  routes
})

export default router
