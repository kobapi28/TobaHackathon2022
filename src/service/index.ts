import { IBookReviewClient, IAuthClient } from './Interface';
import { login, logout } from './Auth';
import { getBookReviews, storeBookReview } from './BookReviewClient';
import { search } from './RakutenApiClient';

export const BookReviewClient: IBookReviewClient = {
  search: search,
  storeBookReview: storeBookReview,
  getBookReviews: getBookReviews,
};

export const AuthClient: IAuthClient = {
  login: login,
  logout: logout,
};
