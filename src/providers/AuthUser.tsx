import { getAuth } from 'firebase/auth';
import React, { useContext, useState, createContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthClient } from '../service';
import { AuthUser } from '../types/AuthUser';

type AuthContextType = {
  user: AuthUser | null;
  login: (callback: VoidFunction) => void;
  logout: (callback: VoidFunction) => void;
};

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<AuthUser | null>(null);

  const login = (callback: VoidFunction) => {
    return AuthClient.login().then((res: AuthUser) => {
      setUser(res);
      callback();
    });
  };

  const logout = (callback: VoidFunction) => {
    return AuthClient.logout(getAuth()).then((res) => {
      setUser(null);
      callback();
    });
  };

  const value: AuthContextType = { user, login, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export const RequireAuth = ({ children }: { children: any }) => {
  const auth = useAuth();
  if (!auth.user) {
    return <Navigate to='/about' />;
  }
  return children;
};
