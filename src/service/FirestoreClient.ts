import { BookReview } from '../types/BookReview';
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

export interface IFirestoreClient {
  getBookReviews: (userId: string) => Promise<Array<BookReview>>;
  addBookReviews: (bookReview: BookReview) => Promise<void>;
}

export const FirestoreClient: IFirestoreClient = {
  getBookReviews: getBookReviews,
  addBookReviews: addBookReviews,
};
