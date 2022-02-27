import { Friend } from '../types/Friend';
export const getFriends = async (twitterId: string): Promise<Array<Friend>> => {
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
