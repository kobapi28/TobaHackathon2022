import { IBookReviewClient, IAuthClient } from './Interface';
import { Book } from '../types/Book';
import { login, logout } from './Auth';
import { getBookReviews, storeBookReview } from './BookReviewClient';
const searchMock = async (title: string): Promise<Array<Book>> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          title: 'Team Geek ―Googleのギークたちはいかにしてチームを作るのか',
          img: 'https://images-na.ssl-images-amazon.com/images/I/41SlY0zvpKL._SX350_BO1,204,203,200_.jpg',
          link: 'https://www.amazon.co.jp/dp/4873116309/?coliid=I1BCLDLBL7US62&colid=10WYP57Z19TPE&psc=1&ref_=lv_ov_lig_dp_it',
        },
        {
          title:
            'SCRUM BOOT CAMP THE BOOK【増補改訂版】 スクラムチームではじめるアジャイル開発',
          img: 'https://images-na.ssl-images-amazon.com/images/I/71591oKcHWL.jpg',
          link: 'https://www.amazon.co.jp/-/en/dp/4798163686/?coliid=I3C3Y6TXT3F0BX&colid=10WYP57Z19TPE&psc=1&ref_=lv_ov_lig_dp_it',
        },
      ]);
    }, 1000);
  });
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
