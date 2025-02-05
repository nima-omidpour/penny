import { API_CONFIG } from "../config";
import { APIResponse } from "../types";

export const authApi = {
  login: async (
    address: string,
    signature: string
  ): Promise<APIResponse<{ token: string }>> => {
    const response = await fetch(
      `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.AUTH}/verify`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ address, signature }),
      }
    );
    return response.json();
  },
};
