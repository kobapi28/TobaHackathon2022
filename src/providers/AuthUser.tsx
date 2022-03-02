import { onAuthStateChanged } from 'firebase/auth';
import React, { useContext, useState, createContext, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthClient } from '../service';
import { auth } from '../service/Auth';
import { AuthUser } from '../types/AuthUser';

type AuthContextType = {
  user: AuthUser | null;
  login: (callback: VoidFunction) => void;
  logout: (callback: VoidFunction) => void;
};

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [signInCheck, setSignInCheck] = useState(false);

  const login = (callback: VoidFunction) => {
    return AuthClient.login().then((res: AuthUser) => {
      setUser(res);
      callback();
    });
  };

  const logout = (callback: VoidFunction) => {
    return AuthClient.logout(auth).then((res) => {
      setUser(null);
      callback();
    });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // TODO: idをなにかしらで取得する
        setUser({
          id: '',
          uid: user.uid,
          name: user.displayName ?? '',
          img: user.photoURL ?? '',
        });
        setSignInCheck(true);
      } else {
        setSignInCheck(true);
      }
    });
  }, []);

  const value: AuthContextType = { user, login, logout };

  if (signInCheck) {
    return (
      <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
  } else {
    return <p>loading...</p>;
  }
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export const RequireAuth = ({ children }: { children: any }) => {
  if (!auth.currentUser) {
    return <Navigate to='/about' />;
  }
  return children;
};
