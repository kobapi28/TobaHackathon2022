import { IBookReviewClient, IAuthClient } from './Interface';
import { Book } from '../types/Book';
import { BookReview } from '../types/BookReview';
import { BooksReadByEachUser } from '../types/BooksReadEachUser';
import { login, logout } from './Auth';
const searchMock = async (title: string): Promise<Array<Book>> => {
  return [
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
  ];
};

const storeBookReviewMock = async (bookReview: BookReview): Promise<null> => {
  return null;
};

const getBookReviewsMock = async (
  userId: string
): Promise<Array<BooksReadByEachUser>> => {
  return [
    {
      userName: 'shoma',
      monthlyBookReviews: [
        {
          yearMonth: '2022.02',
          bookReviews: [
            {
              book: {
                title:
                  'SCRUM BOOT CAMP THE BOOK【増補改訂版】 スクラムチームではじめるアジャイル開発',
                img: 'https://images-na.ssl-images-amazon.com/images/I/71591oKcHWL.jpg',
                link: 'https://www.amazon.co.jp/-/en/dp/4798163686/?coliid=I3C3Y6TXT3F0BX&colid=10WYP57Z19TPE&psc=1&ref_=lv_ov_lig_dp_it',
              },
              userName: 'shoma',
              review: 5,
              readAt: new Date(),
            },
            {
              book: {
                title:
                  'Team Geek ―Googleのギークたちはいかにしてチームを作るのか',
                img: 'https://images-na.ssl-images-amazon.com/images/I/41SlY0zvpKL._SX350_BO1,204,203,200_.jpg',
                link: 'https://www.amazon.co.jp/dp/4873116309/?coliid=I1BCLDLBL7US62&colid=10WYP57Z19TPE&psc=1&ref_=lv_ov_lig_dp_it',
              },
              userName: 'shoma',
              review: 5,
              readAt: new Date('1995-12-17T03:24:00'),
            },
            {
              book: {
                title:
                  'SCRUM BOOT CAMP THE BOOK【増補改訂版】 スクラムチームではじめるアジャイル開発',
                img: 'https://images-na.ssl-images-amazon.com/images/I/71591oKcHWL.jpg',
                link: 'https://www.amazon.co.jp/-/en/dp/4798163686/?coliid=I3C3Y6TXT3F0BX&colid=10WYP57Z19TPE&psc=1&ref_=lv_ov_lig_dp_it',
              },
              userName: 'shoma',
              review: 5,
              readAt: new Date('1995-11-17T03:24:00'),
            },
          ],
        },
        {
          yearMonth: '2022.01',
          bookReviews: [
            {
              book: {
                title:
                  'SCRUM BOOT CAMP THE BOOK【増補改訂版】 スクラムチームではじめるアジャイル開発',
                img: 'https://images-na.ssl-images-amazon.com/images/I/71591oKcHWL.jpg',
                link: 'https://www.amazon.co.jp/-/en/dp/4798163686/?coliid=I3C3Y6TXT3F0BX&colid=10WYP57Z19TPE&psc=1&ref_=lv_ov_lig_dp_it',
              },
              userName: 'shoma',
              review: 5,
              readAt: new Date(),
            },
          ],
        },
        {
          yearMonth: '2021.12',
          bookReviews: [
            {
              book: {
                title:
                  'SCRUM BOOT CAMP THE BOOK【増補改訂版】 スクラムチームではじめるアジャイル開発',
                img: 'https://images-na.ssl-images-amazon.com/images/I/71591oKcHWL.jpg',
                link: 'https://www.amazon.co.jp/-/en/dp/4798163686/?coliid=I3C3Y6TXT3F0BX&colid=10WYP57Z19TPE&psc=1&ref_=lv_ov_lig_dp_it',
              },
              userName: 'shoma',
              review: 5,
              readAt: new Date(),
            },
            {
              book: {
                title:
                  'Team Geek ―Googleのギークたちはいかにしてチームを作るのか',
                img: 'https://images-na.ssl-images-amazon.com/images/I/41SlY0zvpKL._SX350_BO1,204,203,200_.jpg',
                link: 'https://www.amazon.co.jp/dp/4873116309/?coliid=I1BCLDLBL7US62&colid=10WYP57Z19TPE&psc=1&ref_=lv_ov_lig_dp_it',
              },
              userName: 'shoma',
              review: 5,
              readAt: new Date('1995-12-17T03:24:00'),
            },
            {
              book: {
                title:
                  'SCRUM BOOT CAMP THE BOOK【増補改訂版】 スクラムチームではじめるアジャイル開発',
                img: 'https://images-na.ssl-images-amazon.com/images/I/71591oKcHWL.jpg',
                link: 'https://www.amazon.co.jp/-/en/dp/4798163686/?coliid=I3C3Y6TXT3F0BX&colid=10WYP57Z19TPE&psc=1&ref_=lv_ov_lig_dp_it',
              },
              userName: 'shoma',
              review: 5,
              readAt: new Date('1995-11-17T03:24:00'),
            },
            {
              book: {
                title:
                  'Team Geek ―Googleのギークたちはいかにしてチームを作るのか',
                img: 'https://images-na.ssl-images-amazon.com/images/I/41SlY0zvpKL._SX350_BO1,204,203,200_.jpg',
                link: 'https://www.amazon.co.jp/dp/4873116309/?coliid=I1BCLDLBL7US62&colid=10WYP57Z19TPE&psc=1&ref_=lv_ov_lig_dp_it',
              },
              userName: 'shoma',
              review: 5,
              readAt: new Date('1995-10-17T03:24:00'),
            },
          ],
        },
      ],
    },
  ];
};

export const BookReviewClient: IBookReviewClient = {
  search: searchMock,
  storeBookReview: storeBookReviewMock,
  getBookReviews: getBookReviewsMock,
};

export const AuthClient: IAuthClient = {
  login: login,
  logout: logout,
};
