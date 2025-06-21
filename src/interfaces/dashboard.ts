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

export interface Dashboard {
  id: number;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface GetUserDashboardsResponse {
  ok: boolean;
  data: Dashboard[];
}
