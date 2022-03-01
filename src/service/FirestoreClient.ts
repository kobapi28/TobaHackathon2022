import { BookReview } from '../types/BookReview';
import { db } from '../firebase';
import { Book } from '../types/Book';
import {
  collection,
  getDocs,
  DocumentData,
  CollectionReference,
  where,
  query,
  Timestamp,
  doc,
  setDoc,
} from 'firebase/firestore';

const createCollection = <T = DocumentData>(collectionName: string) => {
  return collection(db, collectionName) as CollectionReference<T>;
};

type BookReviewFirestore = {
  book: Book;
  userId: string;
  review: number;
  readAt: Timestamp;
};
const timestamp2date = (br: BookReviewFirestore): BookReview => {
  return {
    book: br.book,
    userId: br.userId,
    review: br.review,
    readAt: br.readAt.toDate(),
  };
};

const getBookReviews = async (userId: string): Promise<Array<BookReview>> => {
  const bookReviewsCol = createCollection<BookReviewFirestore>('bookReviews');
  const q = query(bookReviewsCol, where('userId', '==', userId));
  const bookDocs = await getDocs(q);
  return bookDocs.docs.map((doc) => {
    const data = doc.data();
    return timestamp2date(data);
  });
};

const addBookReviews = async (bookReview: BookReview): Promise<void> => {
  const bookReviewsFirestoreCol = createCollection<BookReview>('bookReviews');
  const bookReviewRef = doc(bookReviewsFirestoreCol);
  await setDoc(bookReviewRef, bookReview);
};

export interface IFirestoreClient {
  getBookReviews: (userId: string) => Promise<Array<BookReview>>;
  addBookReviews: (bookReview: BookReview) => Promise<void>;
}

export const FirestoreClient: IFirestoreClient = {
  getBookReviews: getBookReviews,
  addBookReviews: addBookReviews,
};
