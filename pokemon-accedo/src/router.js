import { createRouter, createWebHistory } from 'vue-router';
import Login from '@/components/Login.vue';
import Registro from '@/components/Registro.vue'
import Pokemon from '@/components/Pokemon.vue'
const routes = [
    {
        path: '/login',
        name: 'login',
        component: Login
      },
      {
        path: '/register',
        name: 'Register',
        component: Registro
      },
      {
        path: '/',
        name: 'Home',
        component: Pokemon
      }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;