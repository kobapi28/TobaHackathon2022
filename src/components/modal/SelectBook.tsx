import { Box, Flex, Input, Text } from '@chakra-ui/react';
import { ChangeEvent, useState } from 'react';
import { BookReviewClient } from '../../service';
import { Book } from '../../types/Book';
import { BookInModal } from './BookInModal';

type Props = {
  setSelectedBook: React.Dispatch<React.SetStateAction<Book | undefined>>;
};

export const SelectBook: React.FC<Props> = ({ setSelectedBook }) => {
  const [books, setBooks] = useState<Book[]>();
  const [lastTime, setLastTime] = useState<number>(0);

  const interval = 500;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const now = Date.now();
    if (now - lastTime > interval) {
      setLastTime(now);
      BookReviewClient.search(event.target.value).then(setBooks);
    }
  };

  return (
    <Box>
      <Text color='gray.700' fontWeight='semibold'>
        本のタイトルを入力
      </Text>
      <Input
        mt='2'
        placeholder='例) TypeScript'
        onChange={(e) => handleChange(e)}
      />
      <Flex gap='8px' mt='4' wrap='wrap'>
        {books?.map((book) => (
          <BookInModal
            book={book}
            key={book.link}
            setSelectedBook={setSelectedBook}
          />
        ))}
      </Flex>
    </Box>
  );
};
