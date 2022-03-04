import { useToast } from '@chakra-ui/react';
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
  const [authUser, setAuthUser] = useState<AuthUser | null>(null);
  const [signInCheck, setSignInCheck] = useState(false);
  const toast = useToast();

  const login = (callback: VoidFunction) => {
    return AuthClient.login()
      .then((res: AuthUser) => {
        setAuthUser(res);
        callback();
        toast({
          title: 'Success!',
          description: 'You have successfully logged in!',
          status: 'success',
          duration: 3000,
          isClosable: true,
        });
      })
      .catch(() => {
        toast({
          title: 'Failed...',
          description: 'Login failed...',
          status: 'error',
          duration: 3000,
          isClosable: true,
        });
      });
  };

  const logout = (callback: VoidFunction) => {
    return AuthClient.logout(auth)
      .then((res) => {
        setAuthUser(null);
        callback();
        toast({
          title: 'Success!',
          description: 'You are logged out!',
          status: 'success',
          duration: 3000,
          isClosable: true,
        });
      })
      .catch(() => {
        toast({
          title: 'Failed...',
          description: 'Logout failed... Please try again',
          status: 'error',
          duration: 3000,
          isClosable: true,
        });
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // TODO: idをなにかしらで取得する
        setAuthUser({
          id: 'sample',
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

  const value: AuthContextType = { user: authUser, login, logout };

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
