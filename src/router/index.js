import { createRouter, createWebHistory } from "vue-router";
import LoginView from '@/views/Auth/LoginView.vue'
import RegisterView from '@/views/Auth/RegisterView.vue'
import DashboardView from '@/views/DashboardView.vue'
import FinesView from '@/views/FinesView.vue'
import PaymentsView from '@/views/PaymentsView.vue'

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginView,
    meta: { requiresAuth: false }
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView,
    meta: { requiresAuth: false }
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: DashboardView,
    meta: { requiresAuth: true }
  },
  {
    path: '/fines',
    name: 'fines',
    component: FinesView,
    meta: { requiresAuth: true }
  },
  {
    path: '/payments',
    name: 'payments',
    component: PaymentsView,
    meta: { requiresAuth: true }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore()

  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    next({name: 'login'})
  } else if (!to.meta.requiresAuth && authStore.isAuthenticated) {
    next({name: 'dashboard'})
  } else {
    next()
  }
})

export default router