export interface APIResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  salary: string;
  address: string;
}
