import { Book } from '../types/Book';
import { BookReview } from '../types/BookReview';

export interface IBookReviewClient {
  search: (title: string) => Promise<Array<Book>>;
  storeBookReview: (bookReview: BookReview) => Promise<null>;
  getBookReviews: (userId: string) => Promise<Array<BookReview>>;
}
