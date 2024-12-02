import { createMemoryHistory, createRouter } from 'vue-router'

import Doctors from './views/Doctors.vue'
import Nurses from './views/Nurses.vue'

const routes = [
  { path: '/', redirect: '/doctors' },
  { path: '/doctors', component: Doctors, name: 'Doctors' },
  { path: '/nurses', component: Nurses, name: 'Nurses' },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router