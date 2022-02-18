// Headerコンポーネント

import { Flex, Box, Heading, Button, Spacer, Avatar } from '@chakra-ui/react';

export const Header = () => {
  const clickAddNew = () => {
    // ダイアログを開ける
  };

  const clickUserAvatar = () => {
    // ユーザーページへ遷移
  };
  return (
    <Flex height='60px' alignItems='center'>
      <Box p='2'>
        <Heading size='md'>Chakra App</Heading>
      </Box>
      <Spacer />
      <Box>
        <Avatar
          size='md'
          name='Prosper Otemuyiwa'
          src='https://bit.ly/prosper-baba'
        ></Avatar>
        <Button colorScheme='teal'>add new</Button>
      </Box>
    </Flex>
  );
};
