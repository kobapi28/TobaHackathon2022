// 一覧ページ
import { useEffect, useState } from 'react';
import { BookGraph } from '../components';
import { Rating } from '../components/Rating';
import { BookReviewClient } from '../service/index';
import { BooksReadByEachUser } from '../types/BooksReadEachUser';

export const Graph = () => {
  const [booksReadByEachUser, setBooksReadByEachUser] = useState<
    BooksReadByEachUser[]
  >([]);

  // test
  const [review, setReview] = useState(1);

  useEffect(() => {
    // ここのuserIdをstoreからとってくるとかそういう処理は必要
    const userId = 'sample';
    BookReviewClient.getBookReviews(userId)
      .then((res) => {
        setBooksReadByEachUser(res);
      })
      .catch((err) => {
        // toastを出す？
        console.log(err);
      });
  }, []);
  return (
    <div>
      {booksReadByEachUser.map((booksReadByUser) => (
        <BookGraph
          monthlyBookReviews={booksReadByUser.monthlyBookReviews}
          userName={booksReadByUser.userName}
          key={booksReadByUser.userName}
        />
      ))}
      {/* test */}
      <Rating review={review} setReview={setReview} />
    </div>
  );
};
