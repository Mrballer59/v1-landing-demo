import { api } from "./apiService";

export interface CreateUserResponse {
  message: string;
  user: {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    createdAt: string;
    updatedAt: string;
  };
}

export const userService = {
  async createUser(userData: {
    firstName: string;
    lastName: string;
    email: string;
  }) {
    const { data } = await api.post<CreateUserResponse>("/users", userData);
    return data;
  },
};
