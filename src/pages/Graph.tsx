// 一覧ページ
import { useEffect, useState } from 'react';
import { BookGraph } from '../components';
import { BookReviewClient } from '../service/index';
import { BooksReadByEachUser } from '../types/BooksReadEachUser';

export const Graph = () => {
  const [booksReadByEachUser, setBooksReadByEachUser] = useState<
    BooksReadByEachUser[]
  >([]);

  useEffect(() => {
    BookReviewClient.booksReadByEachUser()
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
      <h1>Graph</h1>
      {booksReadByEachUser.map((booksReadByUser) => (
        <BookGraph
          monthlyBookReviews={booksReadByUser.monthlyBookReviews}
          userName={booksReadByUser.userName}
          key={booksReadByUser.userName}
        />
      ))}
    </div>
  );
};
