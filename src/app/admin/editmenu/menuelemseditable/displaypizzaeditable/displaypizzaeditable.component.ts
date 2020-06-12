import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pizza } from '../../../../client/orderpizza/menuelems/datamodels/pizza';
import { Sizeprice } from '../../../../client/orderpizza/menuelems/datamodels/sizeprice';
import { ApiurlService } from '../../../../util/conf/urls/apiurl.service';
import { HttpParams, HttpClient, HttpHeaders } from '@angular/common/http';
import { Servres } from '../../../../util/datamodels/servres';
import { UserservService } from '../../../../user/userserv/userserv.service';
@Component({
  selector: 'app-displaypizzaeditable',
  templateUrl: './displaypizzaeditable.component.html',
  styleUrls: ['./displaypizzaeditable.component.css']
})
export class DisplaypizzaeditableComponent implements OnInit {
  @Input()pizza: Pizza
  @Output() remove: EventEmitter<number> = new EventEmitter<number>();
  @Output() saved: EventEmitter<Pizza> = new EventEmitter<Pizza>();
  sizepeditid = 1;

  servres: string;
  constructor(private urls: ApiurlService, private http: HttpClient, private userserv: UserservService) { }

  ngOnInit() {
  }

  save() {
    let pizzatosave = { ...this.pizza };
    pizzatosave.name = encodeURIComponent(pizzatosave.name);
    pizzatosave.ingredients = encodeURIComponent(pizzatosave.ingredients);
    pizzatosave.description = encodeURIComponent(pizzatosave.description);
    pizzatosave.token = this.userserv.admin.password;
    pizzatosave.availablesizes.forEach(sp => sp.name = encodeURIComponent(sp.name));

    this.http.post(this.urls.rooturl + "addnewpizza", pizzatosave, {
      headers: new HttpHeaders().set('content-type', 'application/x-www-form-urlencoded; charset=utf-8'),
    }).subscribe((data: Servres) => {
      console.log("res " + JSON.stringify(data));
      this.servres = data.msg;
      if (data.success) {
        this.pizza = data.data;
        this.saved.emit(this.pizza);
      }
    },
      error => {
        console.log(' error' + JSON.stringify(error));
      }
    );
   
  }

  removepizza() {
    if (this.pizza.pizzaid==0) {
      this.remove.emit(this.pizza.pizzaid);
      return;
    }

    const data = {
      id: this.pizza.pizzaid,
      token: this.userserv.admin.password
    }   
    this.http.post(this.urls.rooturl + "deletepizza", data, {
      headers: new HttpHeaders().set('content-type', 'application/x-www-form-urlencoded; charset=utf-8'),
    }).subscribe((data: Servres) => {
      console.log("res " + JSON.stringify(data));
      this.servres = data.msg;
      if (data.success) {
        this.remove.emit(this.pizza.pizzaid);
      }
    },
      error => {
        console.log(' error' + JSON.stringify(error));
      }
    );
   
  }

  addsizeprice() {
    if (!this.pizza.availablesizes) this.pizza.availablesizes = [];
    let sizeprice = {} as Sizeprice;
    sizeprice.editid = this.sizepeditid;
    this.pizza.availablesizes.push(sizeprice);
    this.sizepeditid++;
    this.servres = "Pamiętaj żeby zapisać zmiany";
  }

  removesizep(event) {
    let ind = this.pizza.availablesizes.findIndex(x => x.editid == event);
    this.pizza.availablesizes.splice(ind, 1);
    this.servres = "Pamiętaj żeby zapisać zmiany";
  }
}
