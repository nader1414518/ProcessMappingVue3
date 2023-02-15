import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TokenUtility from '@/utilities/TokenUtility'
import axios from 'axios'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/create_project',
    name: 'create_project',
    component: () => import("@/views/core/CreateProjectPage.vue")
  },
  {
    path: '/project_editor/:id',
    name: 'project_editor',
    component: () => import("@/views/core/ProjectEditor.vue")
  },
  {
    path: '/login',
    name: 'login',
    component: () => import("@/views/core/LoginPage.vue"),
  },
  { path: '/:pathMatch(.*)*', name: 'not_found', component: () => import("@/views/core/NotFoundPage.vue") },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, form, next) => {

  const token = TokenUtility.getToken();

  if (token && to.name === "login")
  {
    next({path: '/',replace: true});
  }

  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }

  if (to.name !== "login" && !token) next({ name: 'login' });

  

  next();

});

export default router
