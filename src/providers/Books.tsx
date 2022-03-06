import { createContext, useContext, useState } from 'react';
import { BookReviewClient } from '../service';
import { BooksReadByEachUser } from '../types/BooksReadEachUser';

type BookContextType = {
  booksReadByEachUser: BooksReadByEachUser[];
  fetchReadBook: (id: string) => void;
};

const BookContext = createContext<BookContextType>({} as BookContextType);

export const BookProvider = ({ children }: { children: React.ReactNode }) => {
  const [booksReadByEachUser, setBooksReadByEachUser] = useState<
    BooksReadByEachUser[]
  >([]);

  const fetchReadBook = (userId: string) => {
    // 本当ならアイテムを受け取りフロント側で追加することが好ましいと思うが、フェッチしてしまいます。
    BookReviewClient.getBookReviews(userId)
      .then((res) => {
        console.log(res);
        setBooksReadByEachUser(res);
      })
      .catch((err) => {
        // toastを出す？
        console.log(err);
      });
  };

  const value: BookContextType = { booksReadByEachUser, fetchReadBook };

  if (booksReadByEachUser) {
    return (
      <BookContext.Provider value={value}>{children}</BookContext.Provider>
    );
  } else {
    return <p>no content</p>;
  }
};

export const useBook = () => {
  return useContext(BookContext);
};
