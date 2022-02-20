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
import { AddNewModal } from './modal/AddNewModal';

export const Header = () => {
  const clickUserAvatar = () => {
    // ユーザーページへ遷移
    console.log('ユーザーページへの遷移');
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
        <Avatar
          size='sm'
          name='Prosper Otemuyiwa'
          src='https://bit.ly/prosper-baba'
          onClick={() => clickUserAvatar()}
          cursor='pointer'
        ></Avatar>
        <Button size='sm' mx='4' onClick={() => onOpen()}>
          add new
        </Button>
      </Flex>
      <AddNewModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
    </>
  );
};
