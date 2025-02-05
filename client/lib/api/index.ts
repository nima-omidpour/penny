import { API_CONFIG } from "./config";
import { authApi } from "./endpoints/auth";
import { teamsApi } from "./endpoints/teams";

export const api = {
  auth: authApi,
  teams: teamsApi,

  // Test endpoints
  test: async () => {
    const response = await fetch(
      `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.TEST}`
    );
    return response.json();
  },
};

export * from "./types";
