import { User } from './user';

export interface Worker extends User{
  name: string;
  surname: string;
}
