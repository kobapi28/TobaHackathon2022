// 一覧画面のそれぞれのユーザーのグラフ
import { Books } from './Books';
import { BooksReadByEachUser } from '../types/BooksReadEachUser';

type Props = BooksReadByEachUser;

export const BookGraph: React.FC<Props> = ({
  userName,
  monthlyBookReviews,
}) => {
  return (
    <div>
      <h1>{userName}</h1>
      {monthlyBookReviews.map((monthlyBookReview) => (
        <Books
          yearMonth={monthlyBookReview.yearMonth}
          bookReviews={monthlyBookReview.bookReviews}
          key={monthlyBookReview.yearMonth}
        />
      ))}
    </div>
  );
};
