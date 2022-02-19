import { BookReview } from '../types/BookReview';

// BookGraph内の1つの本を扱うコンポーネント
type Props = {
  bookReview: BookReview;
};
export const Book: React.FC<Props> = ({ bookReview }) => {
  return (
    <div>
      <h1>{bookReview.book.title}</h1>
      <h1>{bookReview.book.link}</h1>
      <img src={bookReview.book.img} alt='bookimage' />
    </div>
  );
};
