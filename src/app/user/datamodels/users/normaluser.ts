import { User } from './user';
import { Anorder } from '../../../client/orderpizza/menuelems/datamodels/ordermodels/anorder';
import { Address } from '../address';


export interface Normaluser extends User{
  address: Address;
  myorders: Anorder[];
}
