// Headerコンポーネント
import {
  Flex,
  Box,
  Heading,
  Button,
  Spacer,
  Avatar,
  useDisclosure,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../providers';
import { AddNewModal } from './modal/AddNewModal';

export const Header = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const clickUserAvatar = () => {
    // ユーザーページへ遷移
    if (auth.user?.name) {
      navigate(`users/${auth.user?.id}`);
    }
    console.log('ユーザーページへの遷移');
  };

  const logout = () => {
    auth.logout(() => navigate('/about'));
  };

  // modal操作
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex
        height='60px'
        alignItems='center'
        backgroundColor='rgb(113,113,113)'
      >
        <Box px='4' py='2'>
          <Heading size='md' color='whiteAlpha.900'>
            Chakra App
          </Heading>
        </Box>
        <Spacer />
        {auth.user ? (
          <Box>
            <Avatar
              size='sm'
              name='Prosper Otemuyiwa'
              src={auth.user.img}
              onClick={() => clickUserAvatar()}
              cursor='pointer'
            ></Avatar>
            <Button size='sm' mx='4' onClick={() => onOpen()}>
              add new
            </Button>
            <Button size='sm' mx='4' onClick={() => logout()}>
              logout
            </Button>
          </Box>
        ) : (
          <></>
        )}
      </Flex>
      <AddNewModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
    </>
  );
};
