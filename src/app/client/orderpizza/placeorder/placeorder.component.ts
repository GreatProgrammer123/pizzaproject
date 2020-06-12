import { Component, OnInit, AfterViewInit } from '@angular/core';
import { OrderpizzaService } from '../orderpizzaserv/orderpizza.service';
import { EntryanimsoperatorService } from '../../../util/anims/entryanims/entryanimsoperator.service';

@Component({
  selector: 'app-placeorder',
  templateUrl: './placeorder.component.html',
  styleUrls: ['./placeorder.component.css']
})
export class PlaceorderComponent implements OnInit, AfterViewInit {
 
  showwait = false;
  constructor(public orderserv: OrderpizzaService, private entranims: EntryanimsoperatorService) { }

  ngOnInit() {
    window.scrollTo(0, 1);
   
  }

  ngAfterViewInit(): void {
    this.entranims.playwithoutscrolling();
  }

  order() {
    this.showwait = true;
    document.getElementById("orderbtn").classList.add("faduotubtn");
    this.orderserv.saveorder();
  }

  pay() {
    window.open(this.orderserv.orderres.data, "_blank");
  }

}
