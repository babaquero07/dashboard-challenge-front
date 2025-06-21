<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "../../stores/auth";
import Input from "../atoms/Input.vue";
import Button from "../atoms/Button.vue";

const email = ref("");
const password = ref("");
const loading = ref(false);

const router = useRouter();
const authStore = useAuthStore();

const handleLogin = async () => {
  loading.value = true;

  try {
    await authStore.login({ email: email.value, password: password.value });
    router.push("/dashboard");
  } catch (error: any) {
    alert(error.message);
  } finally {
    loading.value = false;
  }

  return {
    email,
    password,
    loading,
  };
};
</script>

<template>
  <form class="mt-8 space-y-6" @submit.prevent="handleLogin">
    <div class="rounded-md shadow-sm space-y-4">
      <Input v-model="email" type="email" placeholder="Email" name="email" />
      <Input
        v-model="password"
        type="password"
        placeholder="Contraseña"
        name="password"
      />
    </div>

    <div>
      <Button
        label="Iniciar sesión"
        type="submit"
        :disabled="loading || !email || !password"
        :loading="loading"
        :fullWidth="true"
        variant="primary"
        size="md"
        :handleClick="handleLogin"
      />
    </div>

    <div class="w-full flex justify-center">
      <span class="text-sm text-indigo-700">
        <RouterLink to="/register" class="underline">Crear cuenta</RouterLink>
      </span>
    </div>
  </form>
</template>
