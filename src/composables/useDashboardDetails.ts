import { ref } from "vue";
import type {
  DashboardWithComponents,
  WidgetType,
} from "../interfaces/dashboard";
import { DashboardsServices } from "../api/services/Dashboards/DashboardsServices";

export const useDashboardDetails = () => {
  const isLoading = ref(false);
  const error = ref("");
  const dashboard = ref<DashboardWithComponents | null>(null);
  const widgets = ref<
    | {
        id: number;
        title: string;
        grid: { x: number; y: number; w: number; h: number };
      }[]
    | null
  >(null);

  const dashboardsServices = new DashboardsServices();

  const setWidgets = (widgetTypes: WidgetType[]) => {
    widgets.value = widgetTypes.map((widgetType) => ({
      id: widgetType.id,
      title: widgetType.name,
      grid: {
        x: Math.floor(Math.random() * 2) + 1,
        y: Math.floor(Math.random() * 2) + 1,
        w: Math.floor(Math.random() * 3) + 1,
        h: Math.floor(Math.random() * 3) + 1,
      },
    }));
  };

  const getWidgetTypes = async () => {
    try {
      isLoading.value = true;
      const { data } = await dashboardsServices.getWidgetTypes();

      setWidgets(data);
    } catch (error) {
      console.log(error);
    } finally {
      isLoading.value = false;
    }
  };

  const getDashboard = async (dashboardId: string) => {
    try {
      isLoading.value = true;
      const { data } = await dashboardsServices.getDashboard(dashboardId);
      dashboard.value = data;

      if (data.dashboardComponents.length > 0) {
        const components = data.dashboardComponents.map((component) => ({
          id: component.widgetType.id,
          title: component.title,
          grid: {
            x: component.x,
            y: component.y,
            w: component.width,
            h: component.height,
          },
        }));
        widgets.value = components;
      } else {
        await getWidgetTypes();
      }
    } catch (error) {
      console.log(error);
    } finally {
      isLoading.value = false;
    }
  };

  return {
    isLoading,
    error,
    dashboard,
    widgets,
    getDashboard,
    getWidgetTypes,
  };
};
