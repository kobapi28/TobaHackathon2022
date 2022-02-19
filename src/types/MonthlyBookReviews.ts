import { BookReview } from './BookReview';

export type MonthlyBookReviews = {
  yearMonth: string; // stringって書いちゃうの嫌だな
  bookReviews: BookReview[];
};
