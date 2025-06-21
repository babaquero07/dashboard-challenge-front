<script setup lang="ts">
import DashboardLayout from "../layouts/DashboardLayout.vue";
import DashboardNameForm from "../organisms/DashboardNameForm.vue";
</script>

<template>
  <DashboardLayout>
    <template #content>
      <div class="flex justify-center">
        <div
          class="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-md"
        >
          <div class="text-center">
            <h2 class="mt-6 text-3xl font-extrabold text-gray-900">
              Escribe el nombre de tu dashboard
            </h2>
          </div>

          <DashboardNameForm />
        </div>
      </div>
    </template>
  </DashboardLayout>
</template>
