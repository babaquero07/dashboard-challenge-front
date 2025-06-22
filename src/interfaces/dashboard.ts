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

export interface DashboardComponent {
  id: number;
  title: string;
  width: number;
  height: number;
  x: number;
  y: number;
  widgetType: WidgetType;
  createdAt: Date;
  updatedAt: Date;
}

export interface DashboardComponentData
  extends Omit<DashboardComponent, "widgetType" | "createdAt" | "updatedAt"> {
  widgetTypeId: number;
}

export interface CreateDashboardComponentsResponse {
  ok: boolean;
  message: string;
}

export interface UpdateDashboardComponentsResponse
  extends CreateDashboardComponentsResponse {}

export interface WidgetType {
  id: number;
  name: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface DashboardWithComponents extends Dashboard {
  dashboardComponents: DashboardComponent[];
}

export interface GetDashboardResponse {
  ok: boolean;
  data: DashboardWithComponents;
}

export interface GetWidgetTypeResponse {
  ok: boolean;
  data: WidgetType[];
}
