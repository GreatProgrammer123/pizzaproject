import { Topingorder } from './topingorder';
import { Sizeprice } from '../sizeprice';
import { Pizza } from '../pizza';

export interface Pizzaorder {
  pizzaorderid: number;
  count: number;
  topings: Topingorder[];
  sizep: Sizeprice;
  cost: number;
  pizzaid: number;
  pizza: Pizza;
}
