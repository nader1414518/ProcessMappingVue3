import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: () => import("@/views/core/LoginPage.vue"),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, form, next) => {

  const token = TokenUtility.getToken();

  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    if (to.name === "login") next({ name: 'home' });
  }

  if (to.name !== "login" && !token) next({ name: 'login' });

  next();

});

export default router
