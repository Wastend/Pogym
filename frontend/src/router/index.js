import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from '../views/LoginPage.vue';
import HomePage from '../views/HomePage.vue';
import store from '../store';

const routes = [
  {
    path: '/login',
    name: 'LoginPage',
    component: LoginPage
  },
  {
    path: '/home',
    name: 'HomePage',
    component: HomePage,
    beforeEnter: (to, from, next) => {
      if (store.state.isAuthenticated) {
        next();
      } else {
        next('/login');
      }
    }
  },
  {
    path: '/',
    redirect: '/login'
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
  if (to.name !== 'LoginPage' && !store.state.isAuthenticated) {
    next({ name: 'LoginPage' });
  } else {
    next();
  }
});

export default router;
