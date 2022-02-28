// 一覧ページ
import { useEffect, useState } from 'react';
import { BookGraph } from '../components';
import { BookReviewClient } from '../service/index';
import { BooksReadByEachUser } from '../types/BooksReadEachUser';
import { getFriends } from '../service/TwitterApiClient';

export const Graph = () => {
  const [booksReadByEachUser, setBooksReadByEachUser] = useState<
    BooksReadByEachUser[]
  >([]);

  useEffect(() => {
    // ここのuserIdをstoreからとってくるとかそういう処理は必要
    const userId = 'sample';
    console.log(getFriends('oonya2002'));
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
    </div>
  );
};
