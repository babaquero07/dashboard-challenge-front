export const navigateToLogin = () => {
  try {
    if (typeof window !== "undefined" && window.location) {
      window.location.href = "/login";
    }
  } catch (error) {
    if (typeof window !== "undefined") {
      window.location.href = "/login";
    }
  }
};

export const clearAuthData = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
};
