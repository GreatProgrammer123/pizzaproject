import { User } from './user';


export interface Admin extends User{
  name: string;
  surname: string;
}
