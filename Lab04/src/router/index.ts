import { createRouter, createWebHistory } from 'vue-router'

import About from '../views/About.vue'
import Experience from '../views/Experience.vue'
import Education from '../views/Education.vue'
import Skills from '../views/Skills.vue'
import Interests from '../views/Interests.vue'
import Awards from '../views/Awards.vue'

const routes = [
  { path: '/', redirect: '/about' },
  { path: '/about', component: About },
  { path: '/experience', component: Experience },
  { path: '/education', component: Education },
  { path: '/skills', component: Skills },
  { path: '/interests', component: Interests },
  { path: '/awards', component: Awards },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router