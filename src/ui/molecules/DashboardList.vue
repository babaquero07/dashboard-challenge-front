<script setup lang="ts">
import { useRouter } from "vue-router";
import DashboardCard from "../atoms/DashboardCard.vue";
import type { Dashboard } from "../../interfaces/dashboard";

const router = useRouter();
defineProps<{
  listTitle?: string;
  dashboards: Dashboard[];
}>();
</script>

<template>
  <div class="flex flex-col shadow-md gap-4 p-4 mb-6 rounded-md">
    <h1 v-if="listTitle" class="text-2xl font-bold text-indigo-600">
      {{ listTitle }}
    </h1>

    <ul class="flex flex-wrap gap-4">
      <DashboardCard
        v-for="dashboard in dashboards"
        :key="dashboard.id"
        :dashboardName="dashboard.name"
        :handleClick="() => router.push(`/dashboard/${dashboard.id}`)"
      />
    </ul>
  </div>
</template>
