import { Box, Button, Flex, Image, Link, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { BookReviewClient } from '../../service';
import { Book } from '../../types/Book';
import { Rating } from '../Rating';

type Props = {
  selectedBook: Book;
  setSelectedBook: React.Dispatch<React.SetStateAction<Book | undefined>>;
  onClose: Function;
};

type ImageHeightWidth = {
  height: number;
  width: number;
};

export const Review: React.FC<Props> = ({
  selectedBook,
  setSelectedBook,
  onClose,
}) => {
  const [review, setReview] = useState<number>(1);
  const [imageHeightWidth, setImageHeightWidth] = useState<ImageHeightWidth>({
    height: 0,
    width: 0,
  });

  const height: number = window.innerHeight * 0.3;

  const getImageSize = (e: any) => {
    setImageHeightWidth({
      height: e.target.naturalHeight,
      width: e.target.naturalWidth,
    });
  };

  const calculateWidth = (): string => {
    return `${(imageHeightWidth.width / imageHeightWidth.height) * height}px`;
  };

  const register = () => {
    // TODO: エラー処理
    BookReviewClient.storeBookReview({
      userId: 'sample',
      review: review,
      readAt: new Date(),
      book: selectedBook,
    });
    onClose();
  };

  return (
    <Box mx='auto'>
      <Flex gap='4' pt='8' mx='0'>
        <Box flexShrink={0}>
          <Image
            height={height}
            width={calculateWidth()}
            src={selectedBook.img}
            onLoad={(e) => getImageSize(e)}
          />
        </Box>
        <Box p='4' flexShrink={1}>
          <Text
            fontWeight='semibold'
            fontSize='20px'
            wordBreak='break-word'
            color='gray.700'
            mb='2'
          >
            {selectedBook.title}
          </Text>
          <Link fontSize='16px' color='gray.700'>
            {selectedBook.link}
          </Link>
          <Box mt='4'>
            <Text fontSize='16px' color='gray.700' fontWeight='semibold'>
              この本はどうだった？
            </Text>
            <Rating review={review} setReview={setReview}></Rating>
          </Box>
        </Box>
      </Flex>
      <Flex py='8' mx='auto' gap='4'>
        <Button onClick={() => setSelectedBook(undefined)} flexGrow={1}>
          前のページへ戻る
        </Button>
        <Button
          flexGrow={3}
          background='blue.500'
          color='gray.100'
          _hover={{ bg: 'blue.600' }}
          onClick={register}
        >
          読んだ本を登録する
        </Button>
      </Flex>
    </Box>
  );
};
