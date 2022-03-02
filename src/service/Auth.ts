import {
  browserLocalPersistence,
  getAdditionalUserInfo,
  getAuth,
  setPersistence,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { provider } from '../firebase';
import { AuthUser } from '../types/AuthUser';

export const auth = getAuth();

export const login = async (): Promise<AuthUser> => {
  return setPersistence(auth, browserLocalPersistence).then(() => {
    return signInWithPopup(auth, provider).then((credential) => {
      const userInfo = getAdditionalUserInfo(credential);
      return {
        id: userInfo?.username ?? '',
        uid: credential.user.uid ?? '',
        name: credential.user.displayName ?? '',
        img: credential.user.photoURL ?? '',
      };
    });
  });
};

export const logout = async (): Promise<void> => {
  return signOut(auth);
};
