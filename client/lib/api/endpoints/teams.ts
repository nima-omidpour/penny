import { API_CONFIG } from "../config";
import { APIResponse, TeamMember } from "../types";

export const teamsApi = {
  getTeamMembers: async (): Promise<APIResponse<TeamMember[]>> => {
    const response = await fetch(
      `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.TEAMS}`
    );
    return response.json();
  },
};
