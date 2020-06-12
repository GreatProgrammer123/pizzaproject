import { Component, OnInit, Input } from '@angular/core';
import { Anorder } from '../../client/orderpizza/menuelems/datamodels/ordermodels/anorder';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orderinlist',
  templateUrl: './orderinlist.component.html',
  styleUrls: ['./orderinlist.component.css']
})
export class OrderinlistComponent implements OnInit {
  @Input() order: Anorder;
  constructor(private router: Router) { }

  ngOnInit() {
    // this.order.date.
    //console.log("date " + JSON.stringify(this.order.date));
    //   this.order.date.hour
    
  }

  gotodetails() {
    this.router.navigate(['/orderdetails', this.order.orderid]);
  }

  getpizzanames(): string {
    let names = "";
    this.order.pizzas.forEach(x => names += x.pizza.name + ", ");
    return names.substring(0, names.length - 2);
  }

  getdate():string {
    let date = this.order.date.time.hour;
    date += ":";
    if (this.order.date.time.minute < 10) date += "0";
    date += this.order.date.time.minute;
    return date;
  }


}
