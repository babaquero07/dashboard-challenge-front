export interface CreateUserResponse {
  ok: boolean;
  message: string;
  user: {
    id: number;
    email: string;
    createdAt: Date;
    updatedAt: Date;
  };
}
