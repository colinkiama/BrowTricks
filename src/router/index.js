import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../store';

import { authRoutes } from './authRoutes';
import { PMURoutes } from './PMURoutes';
import { clientRoutes } from './clientRoutes';

Vue.use(VueRouter);

const routes = [
  ...PMURoutes,
  // test routes
  {
    path: '/test-layout-splash',
    name: 'TestLayoutSplash',
    component: () => import('@/views/TestLayoutSplash.vue')
  },
  {
    path: '/test-layout-splash-with-header',
    name: 'TestLayoutSplashWithHeader',
    component: () => import('@/views/TestLayoutSplashWithHeader.vue')
  },
  {
    path: '/shop/test-tenant-94',
    name: 'CustomerHome',
    component: () => import('@/views/CustomerHome.vue')
  },
  {
    path: '/shop/test-tenant-94/business-hours',
    name: 'CustomerBusinessHours',
    component: () => import('@/views/CustomerBusinessHours.vue')
  },
  {
    path: '/shop/test-tenant-94/contact',
    name: 'CustomerContact',
    component: () => import('@/views/CustomerContact.vue')
  },
  {
    path: '/shop/test-tenant-94/categories',
    name: 'CustomerCategories',
    component: () => import('@/views/CustomerCategories.vue')
  },
  ...clientRoutes,
  ...authRoutes,
  {
    path: '/',
    redirect: { name: 'CustomerHome' }
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  store
    .dispatch('auth/ping')
    .then(response => {
      if (response && response.isAuthenticated) {
        next();
      } else {
        throw new Error();
      }
    })
    .catch(() => {
      if (!to.meta.requiresAuth) {
        return next();
      } else {
        next({ name: 'Welcome' });
      }
    });
});

export default router;
