import { Component, OnInit } from '@angular/core';
import { Menu } from '../../../client/orderpizza/menuelems/datamodels/menu';
import { Pizza } from '../../../client/orderpizza/menuelems/datamodels/pizza';
import { HttpParams, HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiurlService } from '../../../util/conf/urls/apiurl.service';
import { Servres } from '../../../util/datamodels/servres';
import { Pizzatopping } from '../../../client/orderpizza/menuelems/datamodels/pizzatopping';
import { Drink } from '../../../client/orderpizza/menuelems/datamodels/drink';
import { MenuservService } from '../../../client/orderpizza/menuserv/menuserv.service';

@Component({
  selector: 'app-editmenu',
  templateUrl: './editmenu.component.html',
  styleUrls: ['./editmenu.component.css']
})
export class EditmenuComponent implements OnInit {
 
  newpizzamsg: string;
  newtopingmsg: string;
  newdrinkmsg: string;
  constructor(public menuserv: MenuservService) { }

  ngOnInit() {
    this.menuserv.mergetopings = true;
  }

  addnewpizza() {
    if (this.checkifemptypizzaexists()) {
      this.newpizzamsg = "Dodałeś już miejsce na pizze";
      return;
    }

    let npizza = {} as Pizza;
    npizza.pizzaid = 0;
    this.menuserv.menu.pizzas.push(npizza);
    this.menuserv.menu.pizzas = this.menuserv.menu.pizzas.sort((p1, p2) => {
      if (p1.pizzaid==0 && p2.pizzaid!=0) return -1;
      if (p1.pizzaid!=0 && p2.pizzaid==0) return 1;
      return 0;
    });
  }

  checkifemptypizzaexists(): boolean {
    if (this.menuserv.menu.pizzas.find(p => p.pizzaid == 0)) return true;
    return false;
  }

  removepizza(event: number) {
    this.menuserv.menu.pizzas.splice(this.menuserv.menu.pizzas.findIndex(x => x.pizzaid == event), 1);
  }

  savedpizza(event: Pizza) {
    let pz = this.menuserv.menu.pizzas.findIndex(x => x.pizzaid == 0);
    this.menuserv.menu.pizzas[pz] = event;
  }



  addnewtopping() {
    if (this.checkifemptytopingexists()) {
      this.newtopingmsg = "Dodałeś już miejsce na dodatek";
      return;
    }
    let ntoping = {} as Pizzatopping;
    ntoping.pizzatoppingid = 0;
    this.menuserv.menu.toppings.push(ntoping);
    this.menuserv.menu.toppings = this.menuserv.menu.toppings.sort((p1, p2) => {
      if (p1.pizzatoppingid == 0 && p2.pizzatoppingid != 0) return -1;
      if (p1.pizzatoppingid != 0 && p2.pizzatoppingid == 0) return 1;
      return 0;
    });
  }

  checkifemptytopingexists(): boolean {
    if (this.menuserv.menu.toppings.find(p => p.pizzatoppingid == 0)) return true;
    return false;
  }

  removetoping(event) {
   this.menuserv.menu.toppings.splice(this.menuserv.menu.toppings.findIndex(x => x.pizzatoppingid == event), 1);
  }

  savedtoping(event: Pizzatopping) {
    let t = this.menuserv.menu.toppings.findIndex(x => x.pizzatoppingid == 0);
    this.menuserv.menu.toppings[t] = event;
  }


  addnewdrink() {
    if (this.checkifemptydrinkexists()) {
      this.newdrinkmsg = "Dodałeś już miejsce na picie";
      return;
    }
    let newdrink = {} as Drink;
    newdrink.drinkid = 0;
    this.menuserv.menu.drinks.push(newdrink);
    this.menuserv.menu.drinks = this.menuserv.menu.drinks.sort((p1, p2) => {
      if (p1.drinkid == 0 && p2.drinkid != 0) return -1;
      if (p1.drinkid != 0 && p2.drinkid == 0) return 1;
      return 0;
    });
  }

  checkifemptydrinkexists(): boolean {
    if (this.menuserv.menu.drinks.find(p => p.drinkid == 0)) return true;
    return false;
  }

  removedrink(event) {
    this.menuserv.menu.drinks.splice(this.menuserv.menu.drinks.findIndex(x => x.drinkid == event), 1);
  }

  saveddrinks(event: Drink) {
    let d = this.menuserv.menu.drinks.findIndex(x => x.drinkid == 0);
    this.menuserv.menu.drinks[d] = event;
  }







 



  
}
