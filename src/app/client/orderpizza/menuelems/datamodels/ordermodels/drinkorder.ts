import { Topingorder } from './topingorder';
import { Sizeprice } from '../sizeprice';
import { Drink } from '../drink';

export interface Drinkorder {
drinkorderid: number;
count: number;
  price: number
  drink: Drink;
  drinkid:number;
cost:number;
}
