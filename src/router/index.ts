import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";
import LoginView from "../ui/views/LoginView.vue";
import { useAuthStore } from "../stores/auth";
import RegisterView from "../ui/views/RegisterView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/login",
    name: "Login",
    component: LoginView,
    meta: {
      requiresAuth: false, // Public route
    },
  },
  {
    path: "/register",
    name: "Register",
    component: RegisterView,
    meta: {
      requiresAuth: false, // Public route
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// router.beforeEach((to, from, next) => {
//   const authStore = useAuthStore();

//   if (to.meta.requiresAuth && !authStore.isAuthenticated) {
//     next({ name: "Login" });
//   } else if (to.name === 'login' && authStore.isAuthenticated) {
//     next('/dashboard')
//   } else {
//     next();
//   }
// });

export default router;
