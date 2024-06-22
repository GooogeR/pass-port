import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from '../views/LoginPage.vue';
import AppPage from '../views/AppPage.vue';
import store from '../store';

const routes = [
  {
    path: '/',
    redirect: '/app'
  },
  {
    path: '/app',
    component: AppPage,
    meta: { requiresAuth: true }
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginPage
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
