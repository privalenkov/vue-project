import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'main',
    meta: { layout: 'main' },
    component: () => import('../views/mainLayoutPages/MainPage.vue'),
  },
  {
    path: '/auth/signup',
    name: 'signup',
    meta: { layout: 'signup' },
    component: () => import('../views/loginLayoutPages/LoginPage.vue'),
  },
  {
    path: '/operation/whole-list',
    name: 'whole-list',
    meta: { layout: 'main' },
    component: () => import('../views/mainLayoutPages/About.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
