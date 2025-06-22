<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import DashboardLayout from "../layouts/DashboardLayout.vue";
import Loader from "../atoms/Loader.vue";
import { useDashboardDetails } from "../../composables/useDashboardDetails";

import { GridStack } from "gridstack";
import Button from "../atoms/Button.vue";
import InformativeCard from "../molecules/InformativeCard.vue";
import BestSellingComponentsList from "../molecules/BestSellingComponentsList.vue";
import SalesByMonthChart from "../organisms/SalesByMonthChart.vue";
import type { DashboardComponentData } from "../../interfaces/dashboard";

const grid = ref<GridStack | null>(null);
const isEditing = ref(false);

const router = useRouter();

const route = useRoute();
const dashboardId = route.params.id as string;

const {
  isLoading,
  error,
  dashboard,
  updateDashboard,
  widgets,
  getDashboard,
  createDashboardComponents,
  updateDashboardComponents,
} = useDashboardDetails();

const makeWidget = (widget: {
  id: number;
  title: string;
  grid: { x: number; y: number; w: number; h: number };
}) => {
  const elSelector = `#${widget.id}`;
  return grid.value?.makeWidget(elSelector);
};

const makeWidgets = (
  widgets: {
    id: number;
    title: string;
    grid: { x: number; y: number; w: number; h: number };
  }[]
) => {
  widgets.forEach((widget) => {
    makeWidget(widget);
  });
};

const initGridStack = () => {
  if (!widgets.value || widgets.value.length === 0) {
    alert("No widgets available yet");
    return;
  }

  grid.value = GridStack.init({
    column: 3,
    cellHeight: 150,
    minRow: 1,
    margin: 10,
    disableDrag: !isEditing.value,
    disableResize: !isEditing.value,
  });

  makeWidgets(widgets.value);
};

// Watch for changes in widgets and initialize GridStack when data is available
watch(
  widgets,
  (newWidgets) => {
    if (newWidgets && newWidgets.length > 0 && !grid.value) {
      console.log("🚀 ~ newWidgets:", newWidgets);
      initGridStack();
    }
  },
  { immediate: true }
);

onMounted(async () => {
  await getDashboard(dashboardId);

  // If widgets are already loaded after getDashboard, initialize GridStack
  if (widgets.value && widgets.value.length > 0) {
    initGridStack();
  }
});

const toggleEditing = () => {
  if (isEditing.value) {
    grid.value?.disable();
  } else {
    grid.value?.enable();
  }

  isEditing.value = !isEditing.value;
};
const getComponentsData = () => {
  // Obtener las posiciones actuales de GridStack
  const gridItems = grid.value?.getGridItems() || [];

  const componentsData = gridItems.map((item) => {
    const widgetId = parseInt(item.getAttribute("gs-id") || "0");
    const widget = widgets.value?.find((w) => w.id === widgetId);

    if (!widget) return;

    return {
      title: widget.title,
      width: item.getAttribute("gs-w")
        ? parseInt(item.getAttribute("gs-w")!)
        : widget.grid.w,
      height: item.getAttribute("gs-h")
        ? parseInt(item.getAttribute("gs-h")!)
        : widget.grid.h,
      x: item.getAttribute("gs-x")
        ? parseInt(item.getAttribute("gs-x")!)
        : widget.grid.x,
      y: item.getAttribute("gs-y")
        ? parseInt(item.getAttribute("gs-y")!)
        : widget.grid.y,
      widgetTypeId: widget.id,
    };
  });

  return componentsData;
};

const saveChanges = async () => {
  const componentsData = getComponentsData();
  if (componentsData.length === 0) return;

  let res = null;

  if (updateDashboard.value) {
    res = await updateDashboardComponents(
      +dashboardId,
      componentsData as DashboardComponentData[]
    );
  } else {
    res = await createDashboardComponents(
      +dashboardId,
      componentsData as DashboardComponentData[]
    );
  }

  if (res?.ok) {
    alert("Cambios guardados correctamente");
    router.push("/dashboard");
  } else {
    alert("Error al guardar los cambios");
  }
};

const getWidgetComponent = (widgetId: number) => {
  switch (widgetId) {
    case 1:
      return InformativeCard;
    case 2:
      return BestSellingComponentsList;
    case 3:
      return SalesByMonthChart;
    default:
      return "div";
  }
};

const getWidgetProps = (widget: any) => {
  switch (widget.id) {
    case 1:
      return {
        title: widget.title,
        value: 25000000,
        percentage: 10,
      };
    case 2:
      return {};
    default:
      return {};
  }
};
</script>

<template>
  <DashboardLayout>
    <template #content>
      <div v-if="isLoading" class="w-full flex justify-center items-center">
        <Loader />
      </div>

      <div v-else class="p-4 flex flex-col gap-6">
        <div class="w-full flex justify-between items-center">
          <h1 class="text-2xl font-bold text-indigo-600">
            {{ dashboard?.name }}
          </h1>

          <div class="flex items-center gap-5">
            <Button
              :label="isEditing ? 'Desactivar edición' : 'Activar edición'"
              type="button"
              variant="secondary"
              size="md"
              @click="toggleEditing"
            />

            <Button
              label="Guardar cambios"
              type="button"
              variant="primary"
              size="md"
              @click="saveChanges"
            />
          </div>
        </div>

        <div class="grid-stack">
          <div
            v-for="widget in widgets"
            :key="widget.id"
            :id="widget.id.toString()"
            :gs-id="widget.id"
            :gs-x="widget.grid.x"
            :gs-y="widget.grid.y"
            :gs-w="widget.grid.w"
            :gs-h="widget.grid.h"
          >
            <div
              :class="`grid-stack-item-content p-6 bg-white rounded-md shadow-md flex items-center justify-center text-gray-700 hide-scrollbar ${
                isEditing ? 'cursor-move' : ''
              }`"
            >
              <component
                :is="getWidgetComponent(widget.id)"
                v-bind="getWidgetProps(widget)"
              />
            </div>
          </div>
        </div>
      </div>
    </template>
  </DashboardLayout>
</template>
