import { Book } from '../types/Book';
import axios from 'axios';

type Res = {
  Items: Array<Item>;
};
type Item = {
  Item: {
    affiliateUrl: string;
    author: string;
    itemUrl: string;
    largeImageUrl: string;
    title: string;
  };
};

export const search = async (title: string): Promise<Array<Book>> => {
  const applicationId = process.env.REACT_APP_RAKUTEN_APP_ID;
  const url = `https://app.rakuten.co.jp/services/api/BooksBook/Search/20170404?applicationId=${applicationId}&title=${encodeURI(
    title
  )}`;

  const { data } = await axios.get<Res>(url);
  return data.Items.map((i) => {
    return {
      title: i.Item.title,
      link: i.Item.itemUrl,
      img: i.Item.largeImageUrl,
    };
  });
};
