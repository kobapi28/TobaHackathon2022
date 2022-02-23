import { Box, Button, Image } from '@chakra-ui/react';
import { Book } from '../../types/Book';

type Props = {
  selectedBook: Book;
  setSelectedBook: React.Dispatch<React.SetStateAction<Book | undefined>>;
};

export const Review: React.FC<Props> = ({ selectedBook, setSelectedBook }) => {
  return (
    <Box>
      <Image src={selectedBook.img} />
      <Button onClick={() => setSelectedBook(undefined)}>戻る</Button>
    </Box>
  );
};
