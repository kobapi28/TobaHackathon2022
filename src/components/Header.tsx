// Headerコンポーネント

import { Flex, Box, Heading, Button, Spacer, Avatar } from '@chakra-ui/react';

export const Header = () => {
  // const clickAddNew = () => {
  //   // ダイアログを開ける
  //   console.log('ダイアログを開ける');
  // };

  // const clickUserAvatar = () => {
  //   // ユーザーページへ遷移
  //   console.log('ユーザーページへの遷移');
  // };
  return (
    <Flex height='60px' alignItems='center' backgroundColor='rgb(113,113,113)'>
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
      ></Avatar>
      <Button size='sm' mx='4'>
        add new
      </Button>
    </Flex>
  );
};
