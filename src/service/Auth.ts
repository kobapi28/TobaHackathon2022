import {
  getAdditionalUserInfo,
  getAuth,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { provider } from '../firebase';
import { AuthUser } from '../types/AuthUser';

export const login = async (): Promise<AuthUser> => {
  const auth = getAuth();
  return signInWithPopup(auth, provider).then((credential) => {
    const userInfo = getAdditionalUserInfo(credential);
    return {
      id: userInfo?.username ?? '',
      uid: credential.user.uid ?? '',
      name: credential.user.displayName ?? '',
      img: credential.user.photoURL ?? '',
    };
  });
};

export const logout = async (): Promise<void> => {
  const auth = getAuth();
  return signOut(auth);
};
