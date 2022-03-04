import { Heading, Text } from '@chakra-ui/react';

// 存在しないところにアクセスした時
export const NotFound = () => {
  return (
    <Heading color='gray.700' textAlign='center' mt='10'>
      <Text>404</Text> Not Found
    </Heading>
  );
};
