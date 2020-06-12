import { Pizzaorder } from './pizzaorder';
import { Drinkorder } from './drinkorder';
import { Address } from '../../../../../user/datamodels/address';
import { Payment } from './payment';
import { Topingorder } from './topingorder';


export interface Anorder{
  orderid:number;
  state: number;
  date: any;
  updatedate:any;
  pizzas: Pizzaorder[];
  othertopings: Topingorder[];
  drinks: Drinkorder[];
  deliveryaddres: Address;
  eathere: boolean;
  payment: Payment;
  userid:number;
  cost: number;
  ispayingincash: boolean;
}
