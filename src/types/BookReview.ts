import { Book } from './Book';

export type BookReview = {
  book: Book;
  userName: string;
  review: number;
  read_at: Date;
};
