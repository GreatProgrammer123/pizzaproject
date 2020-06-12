import { Injectable } from '@angular/core';
import { Anorder } from '../menuelems/datamodels/ordermodels/anorder';
import { Pizzaorder } from '../menuelems/datamodels/ordermodels/pizzaorder';
import { Drinkorder } from '../menuelems/datamodels/ordermodels/drinkorder';
import { Address } from '../../../user/datamodels/address';
import { HttpParams, HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiurlService } from '../../../util/conf/urls/apiurl.service';
import { Servres } from '../../../util/datamodels/servres';
import { DatePipe } from '@angular/common';
import { Topingorder } from '../menuelems/datamodels/ordermodels/topingorder';
import { UserservService } from '../../../user/userserv/userserv.service';

@Injectable({
  providedIn: 'root'
})
export class OrderpizzaService {
  order = {} as Anorder;
  orderres: Servres;
  adrtype = 1;
  constructor(private urls: ApiurlService, private http: HttpClient, private userserv: UserservService) {
    this.createemptyorder();
  }

  createemptyorder() {
    this.order.pizzas = [];
    this.order.othertopings = [];
    this.order.drinks = [];
    this.order.deliveryaddres = {} as Address;
    this.order.ispayingincash = false;
    this.order.eathere = false;
  }

  addpizza(pizza: Pizzaorder) {
     let pz = this.order.pizzas.find(x => x.pizzaid == pizza.pizzaid);
    if (pz) {
      pz = pizza;
      return;
    }
    this.order.pizzas.push(pizza);
  
  }

  addtoping(toping: Topingorder) {
    let tp = this.order.othertopings.find(x => x.pizzatoppingid == toping.pizzatoppingid);
    if (tp) {
      tp = toping;
      return;
    }
    this.order.othertopings.push(toping);
  
  }



  adddrink(drink: Drinkorder) {
    let d = this.order.drinks.find(x => x.drinkid == drink.drinkid);
    if (d) {
      d = drink;
      return;
    }
    this.order.drinks.push(drink);
  }

  saveorder() {
    this.order.date = new DatePipe('en-US').transform(new Date(), 'yyyy-MM-dd HH:mm');
    this.order.updatedate = this.order.date; 
    this.http.post(this.urls.rooturl + "placeorder", this.prepareordertosava(), {
        headers: new HttpHeaders().set('content-type', 'application/x-www-form-urlencoded; charset=utf-8'),
      }).subscribe((data: Servres) => {
        console.log("res " + JSON.stringify(data));
        this.orderres = data;
       // this.createemptyorder();
      },
        error => {
          console.log(' error' + JSON.stringify(error));
        }
      );
  }


  //wszystkie te id przy zapisywaniu do 0 trzeba zmienić
  prepareordertosava(): Anorder {
    let ordertosave = { ...this.order };
    if (this.userserv.normaluser) ordertosave.userid = this.userserv.normaluser.userid;
    ordertosave.date = encodeURIComponent(ordertosave.date);
    ordertosave.updatedate = encodeURIComponent(ordertosave.updatedate);
    ordertosave.pizzas.forEach(x => {
      x.sizep.sizepriceid = 0;
      x.sizep.name = encodeURIComponent(x.sizep.name);
    });
    console.log("ordertosave " + JSON.stringify(ordertosave));
    return ordertosave;
  }


  cangotowriteadr(): boolean {
    if (this.order.pizzas.length == 0 && this.order.drinks.length == 0 && this.order.othertopings.length == 0) return false;
    return true;
  }

  getpizzabyid(id: number): Pizzaorder {
    return this.order.pizzas.find(x => x.pizzaid == id);
  }

  gettopingbyid(id: number, pizzaid: number): Topingorder {
    if (pizzaid) {
      let pz = this.order.pizzas.find(x => x.pizzaid == pizzaid);
      if (!pz) return null;
      return pz.topings.find(x => x.pizzatoppingid == id);
    }
    return this.order.othertopings.find(x => x.pizzatoppingid == id);
  }

  getdrinkbyid(id: number) {
    return this.order.drinks.find(x => x.drinkid == id);
  }


  calctotalcost():number {
    let cost = 0;
    this.order.pizzas.forEach(x => {
      cost += (x.sizep.price * x.count);
      x.topings.forEach(tp => {
        cost += (tp.count * tp.price);
      });
    });
    this.order.drinks.forEach(x => {
      cost += (x.count * x.price);
    });
    this.order.othertopings.forEach(x => {
      cost += (x.count * x.price);
    });
    return cost;
  }


}
