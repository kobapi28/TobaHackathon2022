import { Book } from './Book';

export type BookReview = {
  book: Book;
  userId: string;
  review: number;
  readAt: Date;
};
