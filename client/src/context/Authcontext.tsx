import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from "react";
import { authApi, User } from "../api/auth";
import { tokenStorage } from "../utils/storage";

interface AuthContextType {
  isAuthenticated: boolean;
  user: User[] | null;
  loading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [token, setToken] = useState<string | null>(tokenStorage.getToken());
  const [user, setUser] = useState<User[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!token) {
      setUser(null);
      return;
    }

    const fetchUserInfo = async () => {
      setLoading(true);
      try {
        const userData = await authApi.getUserInfo(token);
        setUser([userData]);
        setError(null);
      } catch (err) {
        setError("Failed to load user data");
        console.error(err);
        logout();
      } finally {
        setLoading(false);
      }
    };

    fetchUserInfo();
  }, [token]);

  const login = async (email: string, password: string): Promise<boolean> => {
    setLoading(true);
    setError(null);
    try {
      const { token } = await authApi.login({ email, password });
      tokenStorage.setToken(token);
      setToken(token);
      return true;
    } catch (err) {
      setError("Invalid credentials");
      return false;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    tokenStorage.removeToken();
    setToken(null);
    setUser(null);
  };

  const value = {
    isAuthenticated: !!token,
    user,
    loading,
    error,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
