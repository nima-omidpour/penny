import { API_CONFIG } from "../config";
import { APIResponse, TeamMember } from "../types";

export const teamsApi = {
  getTeamMembers: async (): Promise<APIResponse<TeamMember[]>> => {
    const response = await fetch(
      `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.TEAMS}`
    );
    return response.json();
  },

  addTeamMember: async (memberData: Omit<TeamMember, "id">): Promise<APIResponse<TeamMember>> => {
    const response = await fetch(
      `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.TEAMS}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(memberData),
      }
    );
    return response.json();
  },

  updateTeamMember: async (id: number, memberData: Partial<TeamMember>): Promise<APIResponse<TeamMember>> => {
    const response = await fetch(
      `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.TEAMS}/${id}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(memberData),
      }
    );
    return response.json();
  },

  deleteTeamMember: async (id: number): Promise<APIResponse<void>> => {
    const response = await fetch(
      `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.TEAMS}/${id}`,
      {
        method: 'DELETE',
      }
    );
    return response.json();
  },
};
