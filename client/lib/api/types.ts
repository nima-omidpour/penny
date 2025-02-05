export interface APIResponse<T> {
  data?: T;
  error?: string;
  message?: string;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  // ... other team member properties
}
