import {Writer} from '@customTypes/user';

export interface Article {
  id: number;
  title: string;
  contents: string;
  categories: ARTICLE_CATEGORY[];
  image: string;
  createdAt: number;
  writer: Writer;
}

export type ARTICLE_CATEGORY = '숙제';
