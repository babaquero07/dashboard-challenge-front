<script setup lang="ts">
import { mockedProducts } from "../../utils/mockedData";
</script>

<template>
  <div class="w-full h-full flex flex-col gap-4">
    <h3 class="text-indigo-600 font-semibold text-[20px]">
      Productos más vendidos
    </h3>
    <ul class="flex flex-wrap gap-4">
      <li
        v-for="product in mockedProducts"
        :key="product.id"
        class="max-w-[320px] max-h-[150px] p-4 bg-white rounded-md shadow-2xl w-full h-full flex flex-col justify-between"
      >
        <h3 class="font-semibold text-gray-900">{{ product.name }}</h3>
        <p class="text-gray-500 font-semibold text-sm">
          Total vendido: {{ product.totalSold.toLocaleString() }}
        </p>
      </li>
    </ul>
  </div>
</template>
