import { BooksReadByEachUser } from '../types/BooksReadEachUser';
import { MonthlyBookReviews } from '../types/MonthlyBookReviews';
import { FirestoreClient } from './FirestoreClient';
import { getFriends } from './TwitterApiClient';
import { Friend } from '../types/Friend';

const date2yearMonth = (date: Date): string => {
  return `${date.getFullYear()}.${date.getMonth()}`;
};

const getBooksReadByEachUserFromFriend = async (
  friend: Friend
): Promise<BooksReadByEachUser> => {
  var bookReviews = await FirestoreClient.getBookReviews(friend.id); //TODO: length==0ならerror

  var monthlyBookReviews: Array<MonthlyBookReviews> = [];

  const now = new Date();
  const date = new Date(now.getFullYear(), now.getMonth());

  while (bookReviews.length !== 0) {
    // TODO: 過去何カ月分の制約にする
    const newer_review = bookReviews.filter((b) => b.readAt >= date);
    const older_review = bookReviews.filter((b) => b.readAt < date);

    if (newer_review.length !== 0) {
      monthlyBookReviews.push({
        yearMonth: date2yearMonth(date),
        bookReviews: newer_review,
      });
    }
    bookReviews = older_review;
    date.setMonth(date.getMonth() - 1);
  }

  return {
    userName: friend.name,
    monthlyBookReviews: monthlyBookReviews,
  };
};

// userId == twitterID == twiterAPI.screen_name
export const getBookReviews = async (
  userId: string
): Promise<Array<BooksReadByEachUser>> => {
  var res: Array<BooksReadByEachUser> = [];
  const friends = await getFriends(userId);

  friends.map((friend) =>
    getBooksReadByEachUserFromFriend(friend).then((b) => res.push(b))
  );
  return res;
};
