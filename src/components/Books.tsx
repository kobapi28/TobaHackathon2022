// BookGraph内の複数の本(Bookコンポーネント)をまとめたコンポーネント
import { Book } from './Book';
import { MonthlyBookReviews } from '../types/MonthlyBookReviews';
import { Box, Flex, Text } from '@chakra-ui/react';
import { generateYearMonth } from '../utils/generateYearMonth';

type Props = MonthlyBookReviews;

export const Books: React.FC<Props> = ({ yearMonth, bookReviews }) => {
  return (
    <Box flexShrink='0' display='inline-block'>
      <Flex gap='8px'>
        {bookReviews.map((bookReview) => (
          <Book bookReview={bookReview} key={bookReview.readAt.toString()} />
        ))}
      </Flex>
      <Text textAlign='center' color='gray.700' fontWeight='semibold' py='1'>
        {yearMonth === generateYearMonth(new Date()) ? 'now' : yearMonth}
      </Text>
    </Box>
  );
};
