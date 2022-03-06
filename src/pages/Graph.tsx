// 一覧ページ
import { useEffect } from 'react';
import { BookGraph } from '../components';
import { useBook } from '../providers/Books';

export const Graph = () => {
  const book = useBook();

  useEffect(() => {
    // ここのuserIdをstoreからとってくるとかそういう処理は必要
    const userId = 'sample';
    book.fetchReadBook(userId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      {book.booksReadByEachUser.map((booksReadByUser) => (
        <BookGraph
          monthlyBookReviews={booksReadByUser.monthlyBookReviews}
          userName={booksReadByUser.userName}
          key={booksReadByUser.userName}
        />
      ))}
    </div>
  );
};
