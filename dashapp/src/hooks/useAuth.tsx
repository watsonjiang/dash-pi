import { createContext, ReactNode, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "./useLocalStorage";

type UserInfo = {
  name: string;
};

type AuthContextType = null | {
  user: UserInfo;
  login: (data: UserInfo) => Promise<void>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType>(null);

interface Props {
  children?: ReactNode;
}

export const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useLocalStorage("user", null);
  const navigate = useNavigate();

  // call this function when you want to authenticate the user
  const login = async (data: UserInfo) => {
    setUser(data);
    navigate("/profile");
  };

  // call this function to sign out logged in user
  const logout = () => {
    setUser(null);
    navigate("/", { replace: true });
  };

  const value = useMemo(
    () => ({
      user,
      login,
      logout,
    }),
    [user]
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
