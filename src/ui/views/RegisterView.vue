<script setup lang="ts">
import AuthLayout from "../layouts/AuthLayout.vue";
import RegisterForm from "../organisms/RegisterForm.vue";
</script>

<template>
  <AuthLayout>
    <template #content>
      <div class="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-md">
        <div class="text-center">
          <h2 class="mt-6 text-3xl font-extrabold text-gray-900">
            Crear cuenta
          </h2>
        </div>

        <RegisterForm />
      </div>
    </template>
  </AuthLayout>
</template>
