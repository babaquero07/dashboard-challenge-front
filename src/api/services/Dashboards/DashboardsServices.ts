import type { CreateDashboardResponse } from "../../../interfaces/dashboard";
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
}
