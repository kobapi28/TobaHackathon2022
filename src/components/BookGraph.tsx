// 一覧画面のそれぞれのユーザーのグラフ
import { Books } from './Books';
import { BooksReadByEachUser } from '../types/BooksReadEachUser';
import { Box, Flex, Heading } from '@chakra-ui/react';

type Props = BooksReadByEachUser;

export const BookGraph: React.FC<Props> = ({
  userName,
  monthlyBookReviews,
}) => {
  return (
    <Box backgroundColor='gray.100' px='4' py='2' mx='4' my='0'>
      <Heading
        as='h3'
        size='lg'
        color='gray.700'
        paddingBottom='2'
        fontWeight='semibold'
      >
        {userName}
      </Heading>
      <Flex
        gap='80px'
        overflowX='auto'
        whiteSpace='nowrap'
        flexDirection='row-reverse'
      >
        {monthlyBookReviews.map((monthlyBookReview) => (
          <Books
            yearMonth={monthlyBookReview.yearMonth}
            bookReviews={monthlyBookReview.bookReviews}
            key={monthlyBookReview.yearMonth}
          />
        ))}
      </Flex>
    </Box>
  );
};
