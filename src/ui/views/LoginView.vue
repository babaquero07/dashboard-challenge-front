<script setup lang="ts">
import AuthLayout from "../layouts/AuthLayout.vue";
import LoginForm from "../organisms/LoginForm.vue";
</script>

<template>
  <AuthLayout>
    <template #content>
      <div class="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-md">
        <div class="text-center">
          <h2 class="mt-6 text-3xl font-extrabold text-gray-900">
            Iniciar sesión
          </h2>
        </div>

        <LoginForm />
      </div>
    </template>
  </AuthLayout>
</template>
