// BookGraph内の複数の本(Bookコンポーネント)をまとめたコンポーネント
import { Book } from './Book';
import { MonthlyBookReviews } from '../types/MonthlyBookReviews';

type Props = MonthlyBookReviews;

export const Books: React.FC<Props> = ({ yearMonth, bookReviews }) => {
  return (
    <div>
      <h1>{yearMonth}</h1>
      {bookReviews.map((bookReview) => (
        <Book bookReview={bookReview} key={bookReview.readAt.toString()} />
      ))}
    </div>
  );
};
