export const API_CONFIG = {
  BASE_URL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001",
  ENDPOINTS: {
    AUTH: "/api/auth",
    TEAMS: "/api/teams",
    TEST: "/test",
  },
};
