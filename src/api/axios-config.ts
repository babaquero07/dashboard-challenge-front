import axios, {
  type AxiosResponse,
  type InternalAxiosRequestConfig,
} from "axios";
import { clearAuthData, navigateToLogin } from "./navigation";

export const dashboardApi = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

dashboardApi.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = localStorage.getItem("token");

    if (token) {
      if (token.trim() && token.length > 10) {
        config.headers.Authorization = `Bearer ${token}`;
      } else {
        localStorage.removeItem("token");
      }
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

dashboardApi.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  async (error) => {
    const { response } = error;

    if (response) {
      switch (response.status) {
        case 401:
          clearAuthData();
          navigateToLogin();
          break;

        default:
          console.error(`Error ${response.status}:`, response.data);
      }
    } else if (error.code === "ECONNABORTED") {
      console.error("La petición tardó demasiado en completarse");
    } else if (error.code === "NETWORK_ERROR") {
      console.error("Error de conexión de red");
    }

    return Promise.reject(error);
  }
);
