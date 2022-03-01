import { Box, Image } from '@chakra-ui/react';
import React, { useState } from 'react';
import { BookReview } from '../types/BookReview';
import { Rating } from './Rating';

// BookGraph内の1つの本を扱うコンポーネント
type Props = {
  bookReview: BookReview;
};

type ImageHeightWidth = {
  height: number;
  width: number;
};

export const Book: React.FC<Props> = ({ bookReview }) => {
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

  const purchaseSiteTransition = () => {
    window.open(bookReview.book.link, '_blank');
  };

  return (
    <Box position='relative' cursor='pointer' onClick={purchaseSiteTransition}>
      <Image
        id={bookReview.book.link}
        htmlHeight={height + 'px'}
        htmlWidth={calculateWidth()}
        objectFit='cover'
        src={bookReview.book.img}
        alt='bookImage'
        onLoad={(e) => getImageSize(e)}
      />
      <Box
        position='absolute'
        left='0px'
        bottom='0px'
        background='rgba(247, 250, 252, 0.9)'
        width='100%'
      >
        <Box px='1' py='2'>
          <Rating review={bookReview.review} />
        </Box>
      </Box>
    </Box>
  );
};
