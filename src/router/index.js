import { createRouter, createWebHistory } from 'vue-router'

import IntroductionView from '../views/IntroductionView.vue'
import DemoView from '../views/DemoView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: IntroductionView
    },
    {
      path: '/demo',
      name: 'demo',
      component: DemoView
    }
  ]
})

export default router
