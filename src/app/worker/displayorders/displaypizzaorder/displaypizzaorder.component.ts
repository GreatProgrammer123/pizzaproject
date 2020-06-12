import { Component, OnInit, Input } from '@angular/core';
import { Pizzaorder } from '../../../client/orderpizza/menuelems/datamodels/ordermodels/pizzaorder';

@Component({
  selector: 'app-displaypizzaorder',
  templateUrl: './displaypizzaorder.component.html',
  styleUrls: ['./displaypizzaorder.component.css']
})
export class DisplaypizzaorderComponent implements OnInit {
  @Input() pizzaorder: Pizzaorder;
  constructor() { }

  ngOnInit() {
    console.log("res " + JSON.stringify(this.pizzaorder.sizep.size));
  }

}
