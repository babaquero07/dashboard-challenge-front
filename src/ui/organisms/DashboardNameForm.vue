<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import Input from "../atoms/Input.vue";
import Button from "../atoms/Button.vue";
import { DashboardsServices } from "../../api/services/Dashboards/DashboardsServices";

const name = ref("");
const loading = ref(false);

const router = useRouter();

const dashboardsServices = new DashboardsServices();

const handleCreateDashboard = async () => {
  try {
    loading.value = true;

    const { data } = await dashboardsServices.createDashboard(name.value);

    router.push(`/dashboard/${data.id}`);
  } catch (error) {
    console.log("🚀 ~ handleCreateDashboard ~ error:", error);
    alert(error);
  } finally {
    loading.value = false;
  }
};
</script>

<template>
  <form class="mt-8 space-y-6" @submit.prevent="handleCreateDashboard">
    <div class="rounded-md shadow-sm space-y-4">
      <Input
        v-model="name"
        type="text"
        placeholder="Titulo del dashboard"
        name="name"
      />
    </div>

    <div>
      <Button
        label="Continuar"
        type="submit"
        :disabled="loading || !name"
        :loading="loading"
        :fullWidth="true"
        variant="primary"
        size="md"
        :handleClick="handleCreateDashboard"
      />
    </div>
  </form>
</template>
