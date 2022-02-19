import { MonthlyBookReviews } from './MonthlyBookReviews';

export type BooksReadByEachUser = {
  userName: string;
  monthlyBookReviews: MonthlyBookReviews[];
};
