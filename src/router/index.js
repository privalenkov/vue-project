import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Main',
    meta: { layout: 'main' },
    component: () => import('../views/MainPage.vue'),
  },
  {
    path: '/operation/whole-list',
    name: 'whole-list',
    meta: { layout: 'main' },
    component: () => import('../views/About.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
