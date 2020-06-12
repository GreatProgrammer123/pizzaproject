import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Address } from '../../../user/datamodels/address';
import { OrderpizzaService } from '../orderpizzaserv/orderpizza.service';
import { Router } from '@angular/router';
import { UserservService } from '../../../user/userserv/userserv.service';
import { EntryanimsoperatorService } from '../../../util/anims/entryanims/entryanimsoperator.service';

@Component({
  selector: 'app-writedeladr',
  templateUrl: './writedeladr.component.html',
  styleUrls: ['./writedeladr.component.css']
})
export class WritedeladrComponent implements OnInit, AfterViewInit {
   
 
  servres: string;
  constructor(public orderserv: OrderpizzaService, private router: Router, private userserv: UserservService, private entranims: EntryanimsoperatorService) { }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

  ngAfterViewInit(): void {
    this.entranims.playwithoutscrolling();
  }

  next() {
    console.log("adr " + this.orderserv.order.deliveryaddres.street);
    if ((!this.orderserv.order.deliveryaddres.street || !this.orderserv.order.deliveryaddres.city) && !this.orderserv.order.eathere) {
      this.servres = "Uzupełnij adres";
      return;
    }

    this.router.navigate(["/placeorder"]);
  }

  prev() {
    this.router.navigate(["/menu"]);
  }

  adrtypechanged(ntype: number) {
    this.orderserv.adrtype = ntype;
    console.log("adrtype changed " + this.orderserv.adrtype);
    if (this.orderserv.adrtype == 2) {
      if (!this.userserv.normaluser) {
        this.router.navigate(["login", "normaluser","writedeladr"]);
      }
      this.orderserv.order.deliveryaddres.street = this.userserv.normaluser.address.street;
      this.orderserv.order.deliveryaddres.city = this.userserv.normaluser.address.city;
    }

  }
}
