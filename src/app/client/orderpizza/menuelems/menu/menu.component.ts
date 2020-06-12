import { Component, OnInit, HostListener, AfterViewInit } from '@angular/core';
import { MenuservService } from '../../menuserv/menuserv.service';
import { Router } from '@angular/router';
import { OrderpizzaService } from '../../orderpizzaserv/orderpizza.service';
import { EntryanimsoperatorService } from '../../../../util/anims/entryanims/entryanimsoperator.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit, AfterViewInit {
  
  servres: string;
  constructor(public menuserv: MenuservService, private router: Router, private orderserv: OrderpizzaService, private entranims: EntryanimsoperatorService) { }

  ngOnInit() {
    this.menuserv.mergetopings = false;
    window.scrollTo(0, 0);
  
  }
  ngAfterViewInit(): void {
    window.scrollTo(0, 1);
  }

  next() {
    if (!this.menuserv.isrestaurantopened()) {
      this.servres = "Restauracja jest zamknięta";
      return;
    }
    if (!this.orderserv.cangotowriteadr()) {
      this.servres = "twoje zamówienie jest puste";
      return;
    }
       
    this.router.navigate(["/writedeladr"]);
  }


}
