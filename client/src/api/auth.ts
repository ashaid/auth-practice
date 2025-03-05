const API_URL = "http://localhost:8080/api";

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface AuthResponse {
  token: string;
}

export interface User {
  status: string;
  name: string;
  email: string;
}

export const authApi = {
  login: async (credentials: LoginCredentials): Promise<AuthResponse> => {
    const response = await fetch(`${API_URL}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    });

    if (!response.ok) {
      // TODO: return the error thrown by the backend in response
      throw new Error("Login failed");
    }

    return response.json();
  },

  getUserInfo: async (token: string): Promise<User[]> => {
    const response = await fetch(`${API_URL}/auth/userInfo`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      // TODO: return the error thrown by the backend in response
      throw new Error("Failed to fetch user info");
    }

    return response.json();
  },
};
