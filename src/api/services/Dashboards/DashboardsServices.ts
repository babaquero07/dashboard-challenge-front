import type {
  CreateDashboardComponentsResponse,
  CreateDashboardResponse,
  DashboardComponentData,
  GetDashboardResponse,
  GetUserDashboardsResponse,
  GetWidgetTypeResponse,
  UpdateDashboardComponentsResponse,
} from "../../../interfaces/dashboard";
import { dashboardApi } from "../../axios-config";

export class DashboardsServices {
  async createDashboard(name: string): Promise<CreateDashboardResponse> {
    try {
      const response = await dashboardApi.post<CreateDashboardResponse>(
        "/dashboards",
        { name }
      );

      return response.data;
    } catch (error: any) {
      if (error.response?.data?.message) {
        throw new Error(error.response.data.message);
      }

      throw new Error("Error de conexión. Intente nuevamente.");
    }
  }

  async getUserDashboards(): Promise<GetUserDashboardsResponse> {
    try {
      const response = await dashboardApi.get<GetUserDashboardsResponse>(
        "/dashboards"
      );

      return response.data;
    } catch (error: any) {
      if (error.response?.data?.message) {
        throw new Error(error.response.data.message);
      }

      throw new Error("Error de conexión. Intente nuevamente.");
    }
  }

  async getDashboard(dashboardId: string): Promise<GetDashboardResponse> {
    try {
      const response = await dashboardApi.get<GetDashboardResponse>(
        `/dashboards/${dashboardId}`
      );

      return response.data;
    } catch (error: any) {
      if (error.response?.data?.message) {
        throw new Error(error.response.data.message);
      }

      throw new Error("Error de conexión. Intente nuevamente.");
    }
  }

  async getWidgetTypes(): Promise<GetWidgetTypeResponse> {
    try {
      const response = await dashboardApi.get<GetWidgetTypeResponse>(
        "/dashboards/widget-types"
      );

      return response.data;
    } catch (error: any) {
      if (error.response?.data?.message) {
        throw new Error(error.response.data.message);
      }

      throw new Error("Error de conexión. Intente nuevamente.");
    }
  }

  async createDashboardComponents(
    dashboardId: number,
    components: DashboardComponentData[]
  ): Promise<CreateDashboardComponentsResponse> {
    try {
      const response =
        await dashboardApi.post<CreateDashboardComponentsResponse>(
          `/dashboards/${dashboardId}/components`,
          components
        );

      return response.data;
    } catch (error: any) {
      if (error.response?.data?.message) {
        throw new Error(error.response.data.message);
      }

      throw new Error("Error de conexión. Intente nuevamente.");
    }
  }

  async updateDashboardComponents(
    dashboardId: number,
    components: DashboardComponentData[]
  ): Promise<UpdateDashboardComponentsResponse> {
    try {
      const response =
        await dashboardApi.patch<UpdateDashboardComponentsResponse>(
          `/dashboards/${dashboardId}/components`,
          components
        );

      return response.data;
    } catch (error: any) {
      if (error.response?.data?.message) {
        throw new Error(error.response.data.message);
      }

      throw new Error("Error de conexión. Intente nuevamente.");
    }
  }
}
