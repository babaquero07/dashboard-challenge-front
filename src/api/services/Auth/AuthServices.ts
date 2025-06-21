import { dashboardApi } from "../../axios-config";
import type { LoginData, LoginResponse } from "../../../interfaces/auth";

export class AuthServices {
  async login(loginData: LoginData): Promise<LoginResponse> {
    try {
      const response = await dashboardApi.post<LoginResponse>(
        "/auth/login",
        loginData
      );

      return response.data;
    } catch (error: any) {
      if (error.response?.status === 401) {
        throw new Error("Credenciales inválidas");
      }

      if (error.response?.data?.message) {
        throw new Error(error.response.data.message);
      }

      throw new Error("Error de conexión. Intente nuevamente.");
    }
  }
}
