import { BookReview } from '../types/BookReview';
import { Friend } from '../types/Friend';
const getBookReviews = async (userId: string): Promise<Array<BookReview>> => {
  return [
    {
      userId: 'sample',
      review: 1,
      book: {
        title: 'titile1',
        link: 'link1',
        img: 'img1',
      },
      readAt: new Date(2021, 11, 15, 22, 30),
    },
    {
      userId: 'sample',
      review: 2,
      book: {
        title: 'titile2',
        link: 'link2',
        img: 'img2',
      },
      readAt: new Date(2022, 0, 15, 22, 30),
    },
    {
      userId: 'sample',
      review: 3,
      book: {
        title: 'titile3',
        link: 'link3',
        img: 'img3',
      },
      readAt: new Date(2022, 1, 15, 22, 30),
    },
    {
      userId: 'sample',
      review: 4,
      book: {
        title: 'titile4',
        link: 'link4',
        img: 'img4',
      },
      readAt: new Date(2022, 1, 17, 22, 30),
    },
  ];
};

const addBookReviews = async (bookReview: BookReview): Promise<void> => {
  //TODO
};

const getFriends = async (userId: string): Promise<Array<Friend>> => {
  return [
    {
      id: 'shoma28_',
      name: 'コバショウ',
    },
    {
      id: '_takumma',
      name: 'いちかわ',
    },
  ];
};

export interface IFirestoreClient {
  getBookReviews: (userId: string) => Promise<Array<BookReview>>;
  addBookReviews: (bookReview: BookReview) => Promise<void>;
  getFriends: (userId: string) => Promise<Array<Friend>>;
}

export const FirestoreClient: IFirestoreClient = {
  getBookReviews: getBookReviews,
  addBookReviews: addBookReviews,
  getFriends: getFriends,
};
