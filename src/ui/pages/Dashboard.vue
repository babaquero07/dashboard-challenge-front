<script setup lang="ts">
import { onMounted, ref } from "vue";
import Button from "../atoms/Button.vue";
import DashboardLayout from "../layouts/DashboardLayout.vue";
import { useRouter } from "vue-router";
import { DashboardsServices } from "../../api/services/Dashboards/DashboardsServices";
import type { Dashboard } from "../../interfaces/dashboard";
import DashboardList from "../molecules/DashboardList.vue";
import Loader from "../atoms/Loader.vue";

const isLoading = ref(false);
const dashboards = ref<Dashboard[]>([]);

const router = useRouter();

const handleNewDashboard = () => {
  router.push("/dashboard/new");
};

const dashboardsServices = new DashboardsServices();

const getUserDashboards = async () => {
  try {
    isLoading.value = true;
    const { data } = await dashboardsServices.getUserDashboards();
    dashboards.value = data;
  } catch (error) {
    console.log("🚀 ~ getUserDashboards ~ error:", error);
  } finally {
    isLoading.value = false;
  }
};

onMounted(() => {
  getUserDashboards();
});
</script>

<template>
  <DashboardLayout>
    <template #content>
      <div v-if="isLoading" class="w-full flex justify-center items-center">
        <Loader />
      </div>

      <div v-else="!isLoading">
        <DashboardList
          v-if="dashboards.length > 0"
          listTitle="Tus dashboards"
          :dashboards="dashboards"
        />

        <div v-else class="flex flex-col mb-4">
          <h1 class="text-2xl font-bold text-red-400">
            No tienes dashboards creados
          </h1>
        </div>

        <Button
          label="Crear dashboard"
          size="md"
          variant="secondary"
          @click="handleNewDashboard"
        />
      </div>
    </template>
  </DashboardLayout>
</template>
