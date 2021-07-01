import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'main',
    meta: { layout: 'main' },
    component: () => import('../views/mainLayoutPages/MainPage.vue'),
  },
  {
    path: '/operation/whole-list',
    name: 'whole-list',
    meta: { layout: 'main' },
    component: () => import('../views/mainLayoutPages/About.vue'),
  },
  {
    path: '/auth/signup',
    name: 'signup',
    meta: { layout: 'auth' },
    component: () => import('../views/authLayoutPages/AuthPage.vue'),
  },
  {
    path: '/auth/signin',
    name: 'signin',
    meta: { layout: 'auth' },
    component: () => import('../views/authLayoutPages/AuthPage.vue'),
  },
  {
    path: '/error',
    name: 'error',
    meta: { layout: 'error' },
    component: () => import('../views/errorLayoutPages/ErrorPage.vue'),
  },

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
