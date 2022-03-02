// LP的な役割をするページ。
// 実装は後回し

import { Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../providers';

export const About = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const login = () => {
    auth.login(() => {
      navigate('/');
    });
  };

  return (
    <div>
      <br></br>
      <h1>About</h1>
      <Button onClick={login}>ろぐいん！</Button>
    </div>
  );
};
