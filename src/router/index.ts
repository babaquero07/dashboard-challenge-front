import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";
import LoginView from "../ui/views/LoginView.vue";
import { useAuthStore } from "../stores/auth";
import RegisterView from "../ui/views/RegisterView.vue";
import Dashboard from "../ui/pages/Dashboard.vue";
import CreateDashboardView from "../ui/views/CreateDashboardView.vue";
import DashboardDetail from "../ui/pages/DashboardDetail.vue";

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
      requiresAuth: false,
    },
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/dashboard/new",
    name: "CreateDashboard",
    component: CreateDashboardView,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/dashboard/:id",
    name: "DashboardDetail",
    component: DashboardDetail,
    meta: {
      requiresAuth: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, _from, next) => {
  const authStore = useAuthStore();

  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    next({ name: "Login" });
  } else if (to.name === "Login" && authStore.isAuthenticated) {
    next("/dashboard");
  } else {
    next();
  }
});

export default router;
