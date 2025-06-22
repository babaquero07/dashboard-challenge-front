<script setup lang="ts">
import { useRouter } from "vue-router";
import { useAuthStore } from "../../stores/auth";

const authStore = useAuthStore();
const router = useRouter();

const handleLogout = () => {
  authStore.logout();
  router.push("/login");
};
</script>

<template>
  <nav class="w-full bg-white px-8 py-4 border-b border-gray-200">
    <ul class="flex items-center justify-between">
      <li>
        <RouterLink to="/dashboard">
          <span
            class="text-[20px] font-bold text-gray-800 hover:text-indigo-700"
            >Dashboard Challenge 👨🏻‍💻</span
          >
        </RouterLink>
      </li>
      <li @click="handleLogout">
        <span
          class="text-gray-900 hover:text-indigo-700 cursor-pointer font-medium"
          >Cerrar sesión</span
        >
      </li>
    </ul>
  </nav>
</template>
