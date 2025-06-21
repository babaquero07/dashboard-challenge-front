export interface CreateDashboardResponse {
  ok: boolean;
  message: string;
  data: {
    name: string;
    user: {
      id: number;
    };
    id: number;
    createdAt: Date;
    updatedAt: Date;
  };
}
