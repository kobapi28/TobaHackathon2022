import { Book } from '../types/Book';
import { BookReview } from '../types/BookReview';
import { BooksReadByEachUser } from '../types/BooksReadEachUser';

export interface IBookReviewClient {
  search: (title: string) => Promise<Array<Book>>;
  storeBookReview: (bookReview: BookReview) => Promise<null>;
  getBookReviews: (userId: string) => Promise<Array<BooksReadByEachUser>>;
}
