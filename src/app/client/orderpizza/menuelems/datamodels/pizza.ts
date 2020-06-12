import { Sizeprice } from './sizeprice';

export interface Pizza {
pizzaid:number;
name:string;
description:string;
ingredients: string;
  availablesizes: Sizeprice[];
  token: string;
}
