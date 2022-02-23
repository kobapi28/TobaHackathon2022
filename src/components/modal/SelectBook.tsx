import { Box, Flex, Input } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { BookReviewClient } from '../../service';
import { Book } from '../../types/Book';
import { BookInModal } from './BookInModal';

type Props = {
  setSelectedBook: React.Dispatch<React.SetStateAction<Book | undefined>>;
};

export const SelectBook: React.FC<Props> = ({ setSelectedBook }) => {
  const [books, setBooks] = useState<Book[]>();
  // とりあえず初期化時に
  // TODO: 検索ボックスとの連携
  useEffect(() => {
    const value = 'hoge';
    BookReviewClient.search(value).then((res) => {
      setBooks(res);
    });
  }, []);
  return (
    <Box>
      <Input placeholder='例) TypeScript' />
      <Flex gap='8px'>
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
