import { BooksReadByEachUser } from '../types/BooksReadEachUser';
import { MonthlyBookReviews } from '../types/MonthlyBookReviews';
import { FirestoreClient } from './FirestoreClient';
import { Friend } from '../types/Friend';
import { generateYearMonth } from '../utils/generateYearMonth';

const getBooksReadByEachUserFromFriend = async (
  friend: Friend
): Promise<BooksReadByEachUser> => {
  let bookReviews = await FirestoreClient.getBookReviews(friend.id); //TODO: length==0ならerror

  const monthlyBookReviews: Array<MonthlyBookReviews> = [];

  const now = new Date();
  const date = new Date(now.getFullYear(), now.getMonth());

  while (bookReviews.length !== 0) {
    // TODO: 過去何カ月分の制約にする
    const newer_review = bookReviews.filter((b) => b.readAt >= date);
    const older_review = bookReviews.filter((b) => b.readAt < date);

    if (newer_review.length !== 0) {
      monthlyBookReviews.push({
        yearMonth: generateYearMonth(date),
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
  const friends = await FirestoreClient.getFriends(userId);

  return await Promise.all(
    friends.map(async (friend) => {
      return await getBooksReadByEachUserFromFriend(friend);
    })
  );
};
