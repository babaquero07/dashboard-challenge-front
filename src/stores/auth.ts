import { defineStore } from "pinia";
import type { User } from "../interfaces/general";
import type { LoginData } from "../interfaces/auth";
import { AuthServices } from "../api/services/Auth/AuthServices";

const authService = new AuthServices();

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null as User | null,
    token: localStorage.getItem("token") || null,
  }),
  getters: {
    isAuthenticated: (state) => !!state.token,
  },
  actions: {
    async login(loginData: LoginData) {
      try {
        const { user, token } = await authService.login(loginData);
        this.user = user;
        this.token = token;

        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
      } catch (error) {
        throw error;
      }
    },
    logout() {
      this.user = null;
      this.token = null;
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    },
  },
});
