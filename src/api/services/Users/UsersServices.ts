import type { createUser } from "../../../interfaces/general";
import type { CreateUserResponse } from "../../../interfaces/users";
import { dashboardApi } from "../../axios-config";

export class UsersServices {
  async createUser(createUserData: createUser): Promise<CreateUserResponse> {
    try {
      const response = await dashboardApi.post<CreateUserResponse>(
        "/users",
        createUserData
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
