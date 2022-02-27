import Twitter from 'twitter';
import { Friend } from '../types/Friend';

// const client = new Twitter({
//   consumer_key: process.env.REACT_APP_TWITTER_API_KEY ?? '',
//   consumer_secret: process.env.REACT_APP_TWITTER_API_KEY_SECRET ?? '',
//   access_token_key: process.env.REACT_APP_TWITTER_ACCESSTOKEN ?? '',
//   access_token_secret: process.env.REACT_APP_TWITTER_ACCESSSECRET ?? '',
// });
const apiKey = 'L3AqqiLYtBiBqg8iB6zMvpsOQ';
const apiKeySecret = 'PSMcxvYMVCu5fSEoLjxi5ZCBehsdD7pJVPKHMah3IUASc34gZr';

const accessToken = '1191998467679211520-mNYhDV1Q5LQgGEKeMhKmXB4ywQxu4W';
const accessSecret = 'aTcVEr5t8Aa88Ua6hs0tZBnzWfFaiaFQaeq9L1dBTa22o';

const client = new Twitter({
  consumer_key: apiKey,
  consumer_secret: apiKeySecret,
  access_token_key: accessToken,
  access_token_secret: accessSecret,
});
console.log(client);

export const getFriends = async (twitterId: string): Promise<Array<Friend>> => {
  // const params: Twitter.RequestParams = {
  //   include_user_entities: false,
  //   count: 20,
  //   screen_name: twitterId,
  // };
  // const friendsList = <Ids>await client.get('friends/list', params);
  // const usersArray = friendsList.users;
  // console.log(usersArray);
  // return usersArray

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
