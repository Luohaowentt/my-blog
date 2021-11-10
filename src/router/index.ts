import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: { path: '/home' },
  },
  {
    path: '/home',
    name: '门户主页',
    meta: { title: '门户主页' },
    component: () => import('@/app/home/index.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_APP_BASE_URL),
  routes,
});

export default router;
