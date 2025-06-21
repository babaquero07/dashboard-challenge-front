import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";
import LoginView from "../ui/views/LoginView.vue";

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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
