import { createRouter, createWebHistory } from '@ionic/vue-router';
import Ejercicio1 from '../views/Ejercicio1.vue';

const routes = [
  {
    path: '/',
    redirect: '/tabs/ejemplo1'
  },
  {
    path: '/tabs/',
    component: Ejercicio1,
    children: [
      {
        path: 'ejemplo1',
        component: () => import('@/views/EjercicioDos.vue')
      },
      {
        path: 'ejemplo2',
        component: () => import('@/views/EjercicioTres.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
