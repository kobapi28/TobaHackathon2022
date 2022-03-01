import axios from 'axios';
import { IBookReviewClient, IAuthClient } from './Interface';
import { Book } from '../types/Book';
import { login, logout } from './Auth';
import { getBookReviews, storeBookReview } from './BookReviewClient';

type Res = {
  Items: Array<Item>;
};
type Item = {
  Item: {
    affiliateUrl: string;
    author: string;
    itemUrl: string;
    smallImageUrl: string; //largeImageUrl, mediumImageUrl
    title: string;
  };
};

const searchMock = async (title: string): Promise<Array<Book>> => {
  const applicationId = process.env.REACT_APP_RAKUTEN_APP_ID;
  const url = `https://app.rakuten.co.jp/services/api/BooksBook/Search/20170404?applicationId=${applicationId}&title=${encodeURI(
    title
  )}`;

  let books: Array<Book>;
  const { data } = await axios.get<Res>(url);
  books = data.Items.map((i) => {
    return {
      title: i.Item.title,
      link: i.Item.itemUrl,
      img: i.Item.smallImageUrl,
    };
  });

  return books;
};

export const BookReviewClient: IBookReviewClient = {
  search: searchMock,
  storeBookReview: storeBookReview,
  getBookReviews: getBookReviews,
};

export const AuthClient: IAuthClient = {
  login: login,
  logout: logout,
};
