export interface User {
  walletAddress: string; // Primary identifier (0x...)
  nonce: string; // Current nonce for authentication
  createdAt: Date; // When the user first connected
  lastLoginAt: Date; // Last successful authentication
  username?: string; // Optional: Custom username
  profileImage?: string; // Optional: Profile image URL
  role: "user" | "admin"; // User role for permissions
  isActive: boolean; // Account status
}
