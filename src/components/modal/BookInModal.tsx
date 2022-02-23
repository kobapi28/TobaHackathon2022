import { Box, Image, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { Book } from '../../types/Book';

// BookGraph内の1つの本を扱うコンポーネント
type Props = {
  book: Book;
  setSelectedBook: React.Dispatch<React.SetStateAction<Book | undefined>>;
};

type ImageHeightWidth = {
  height: number;
  width: number;
};

export const BookInModal: React.FC<Props> = ({ book, setSelectedBook }) => {
  const [imageHeightWidth, setImageHeightWidth] = useState<ImageHeightWidth>({
    height: 0,
    width: 0,
  });

  const height: number = 250;

  const getImageSize = (e: any) => {
    setImageHeightWidth({
      height: e.target.naturalHeight,
      width: e.target.naturalWidth,
    });
  };

  const calculateWidth = (): string => {
    return `${(imageHeightWidth.width / imageHeightWidth.height) * height}px`;
  };

  return (
    <Box position='relative' onClick={() => setSelectedBook(book)}>
      <Image
        id={book.link}
        htmlHeight={height + 'px'}
        htmlWidth={calculateWidth()}
        objectFit='cover'
        src={book.img}
        alt='bookImage'
        onLoad={(e) => getImageSize(e)}
      />
      <Box
        position='absolute'
        left='0px'
        bottom='0px'
        background='rgba(12, 25, 25, 0.9)'
        width='100%'
      >
        <Box px='1' py='2'>
          <Text px='2' color='gray.100' isTruncated>
            {book.title}
          </Text>
        </Box>
      </Box>
    </Box>
  );
};
