import { Book } from '../types/Book';
import { BookReview } from '../types/BookReview';
import { BooksReadByEachUser } from '../types/BooksReadEachUser';
import { Auth } from 'firebase/auth';
import { AuthUser } from '../types/AuthUser';

export interface IBookReviewClient {
  search: (title: string) => Promise<Array<Book>>;
  storeBookReview: (bookReview: BookReview) => Promise<null>;
  getBookReviews: (userId: string) => Promise<Array<BooksReadByEachUser>>;
}

export interface IAuthClient {
  login: () => Promise<AuthUser>;
  logout: (auth: Auth) => Promise<void>;
}
