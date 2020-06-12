import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Drinkorder } from '../../datamodels/ordermodels/drinkorder';
import { Drink } from '../../datamodels/drink';
import { OrderpizzaService } from '../../../orderpizzaserv/orderpizza.service';

@Component({
  selector: 'app-displaydrink',
  templateUrl: './displaydrink.component.html',
  styleUrls: ['./displaydrink.component.css']
})
export class DisplaydrinkComponent implements OnInit {
  @Input() drink: Drink;
  drinkorder;
  constructor(private orderserv: OrderpizzaService) { }

  ngOnInit() {
    this.drinkorder = this.orderserv.getdrinkbyid(this.drink.drinkid);
    if (!this.drinkorder) {
      this.drinkorder = {} as Drinkorder;
      this.drinkorder.drinkid = this.drink.drinkid;
      this.drinkorder.price = this.drink.price;
      this.drinkorder.cost = this.drink.price;
    }
  }

  changedcount() {
    if (this.drinkorder.count && this.drinkorder.count != 0) this.drinkorder.cost = this.drinkorder.count * this.drinkorder.price; else this.drinkorder.cost = this.drinkorder.price;
    this.orderserv.adddrink(this.drinkorder);
  }
}
