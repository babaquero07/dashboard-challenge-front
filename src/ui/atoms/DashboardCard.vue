<script setup lang="ts">
const props = defineProps<{
  dashboardName: string;
  handleClick: () => void;
}>();
</script>

<template>
  <li
    class="min-w-[200px] text-center border border-solid border-gray-700 p-4 rounded-md bg-indigo-400 hover:bg-indigo-500 transition-all duration-300 text-white font-semibold cursor-pointer ease-in-out"
    @click="handleClick"
  >
    <h2>{{ dashboardName }}</h2>
  </li>
</template>
