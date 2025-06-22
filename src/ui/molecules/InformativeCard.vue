<script setup lang="ts">
defineProps<{
  title: string;
  value: number;
  percentage: number;
}>();
</script>

<template>
  <div
    class="flex flex-col gap-2 p-4 bg-white rounded-md shadow-md w-full h-full"
  >
    <h3 class="text-sm font-medium text-gray-500">{{ title }}</h3>
    <p class="text-2xl font-bold text-gray-900">
      ${{ value.toLocaleString() }}
    </p>
    <p class="text-sm text-gray-500">
      {{ percentage > 0 ? "+" : "" }}{{ percentage }}% respecto al mes anterior
    </p>
  </div>
</template>
