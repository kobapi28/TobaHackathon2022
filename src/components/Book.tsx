import { Box, Image, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { BookReview } from '../types/BookReview';

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

  return (
    <Box position='relative'>
      <Image
        id={bookReview.book.link}
        htmlHeight={height + 'px'}
        htmlWidth={calculateWidth()}
        objectFit='cover'
        src={bookReview.book.img}
        alt='bookImage'
        onLoad={(e) => getImageSize(e)}
      />
      <Text
        position='absolute'
        left='0px'
        bottom='0px'
        background='gray.600'
        width='100%'
      >
        {bookReview.review}
      </Text>
    </Box>
  );
};
