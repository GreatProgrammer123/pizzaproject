import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pizzatopping } from '../../datamodels/pizzatopping';
import { Topingorder } from '../../datamodels/ordermodels/topingorder';
import { OrderpizzaService } from '../../../orderpizzaserv/orderpizza.service';

@Component({
  selector: 'app-displaytoping',
  templateUrl: './displaytoping.component.html',
  styleUrls: ['./displaytoping.component.css']
})
export class DisplaytopingComponent implements OnInit {
  @Input() toping: Pizzatopping;
  @Input() pizzaid: number;
  @Input() insideotherelem: boolean;
  @Output() topingchanged: EventEmitter<Topingorder> = new EventEmitter<Topingorder>();
  topingorder: Topingorder;
  addtoorder: boolean;
  constructor(private orderserv: OrderpizzaService) { }

  ngOnInit() {
    this.topingorder = this.orderserv.gettopingbyid(this.toping.pizzatoppingid, this.pizzaid);
    if (!this.topingorder) {
      this.topingorder = {} as Topingorder;
      this.topingorder.pizzatoppingid = this.toping.pizzatoppingid;
      this.topingorder.price = this.toping.price;
      this.topingorder.cost = this.toping.price;
    }
  }

  changedcount() {
    if (this.topingorder.count && this.topingorder.count != 0) this.topingorder.cost = this.topingorder.count * this.topingorder.price; else this.topingorder.cost = this.toping.price;
    if (!this.toping.notpizzaintegrated) this.topingchanged.emit(this.topingorder); else this.orderserv.addtoping(this.topingorder);
  }

  singletoponly() {
    if (this.addtoorder) this.topingorder.count = 1; else this.topingorder.count = 0;
    this.changedcount();
  
  }

}
