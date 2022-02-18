import { Book } from '@/types/Book';

export type BookReview = {
  book: Book;
  userName: string;
  review: number;
  readAt: Date;
};
