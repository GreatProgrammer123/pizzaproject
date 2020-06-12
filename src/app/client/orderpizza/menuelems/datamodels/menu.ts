import { Pizzatopping } from './pizzatopping';
import { Pizza } from './pizza';
import { Drink } from './drink';
import { Openhours } from '../../../../admin/openhours/datamodels/openhours';

export interface Menu {
  pizzas: Pizza[];
  toppings: Pizzatopping[];
  notintegraltopings: Pizzatopping[];
  drinks: Drink[];
  openhours: Openhours[];
}
