<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import Input from "../atoms/Input.vue";
import Button from "../atoms/Button.vue";
import { UsersServices } from "../../api/services/Users/UsersServices";

const email = ref("");
const password = ref("");
const loading = ref(false);

const router = useRouter();

const usersServices = new UsersServices();

const handleRegister = async () => {
  loading.value = true;

  try {
    await usersServices.createUser({
      email: email.value,
      password: password.value,
    });

    alert("Cuenta creada exitosamente!");
    router.push("/login");
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
  <form class="mt-8 space-y-6" @submit.prevent="handleRegister">
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
        label="Crear cuenta"
        type="submit"
        :disabled="loading || !email || !password"
        :loading="loading"
        :fullWidth="true"
        variant="primary"
        size="md"
        :handleClick="handleRegister"
      />
    </div>

    <div class="w-full flex justify-center">
      <span class="text-sm text-gray-900">
        Ya tienes una cuenta?
        <RouterLink to="/login">
          <span class="underline text-indigo-700">Inicia sesión</span>
        </RouterLink>
      </span>
    </div>
  </form>
</template>
