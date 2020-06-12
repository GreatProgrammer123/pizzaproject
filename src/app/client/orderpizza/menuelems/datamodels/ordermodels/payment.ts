import { Anorder } from './anorder';

export interface Payment {
 paymentid:number;
 amount: number;
 completed: number;
 idfrompayu: number;
 anorder: Anorder;
}
