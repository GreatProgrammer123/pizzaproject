import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Drink } from '../../../../client/orderpizza/menuelems/datamodels/drink';
import { HttpParams, HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiurlService } from '../../../../util/conf/urls/apiurl.service';
import { Servres } from '../../../../util/datamodels/servres';
import { UserservService } from '../../../../user/userserv/userserv.service';
@Component({
  selector: 'app-displaydrinkeditable',
  templateUrl: './displaydrinkeditable.component.html',
  styleUrls: ['./displaydrinkeditable.component.css']
})
export class DisplaydrinkeditableComponent implements OnInit {
  @Input() drink: Drink;
  @Output() removeemit: EventEmitter<number> = new EventEmitter<number>();
  @Output() saved: EventEmitter<Drink> = new EventEmitter<Drink>();
  servres: string;
  constructor(private urls: ApiurlService, private http: HttpClient, private userserv: UserservService) { }

  ngOnInit() {
  }


  save() {
    let drinktosave = { ...this.drink };
    drinktosave.name = encodeURIComponent(drinktosave.name);
    drinktosave.token = this.userserv.admin.password;
    this.http.post(this.urls.rooturl + "addnewdrink", drinktosave, {
      headers: new HttpHeaders().set('content-type', 'application/x-www-form-urlencoded; charset=utf-8'),
    }).subscribe((data: Servres) => {
      console.log("res " + JSON.stringify(data));
      this.servres = data.msg;
      if (data.success) {
        this.drink = data.data;
        this.saved.emit(this.drink);
      }
    },
      error => {
        console.log(' error' + JSON.stringify(error));
      }
    );
  }

  remove() {
    if (this.drink.drinkid == 0) {
      this.removeemit.emit(this.drink.drinkid);
      return;
    }
    const data = {
      id: this.drink.drinkid,
      token: this.userserv.admin.password
    }
    this.http.post(this.urls.rooturl + "deletedrink", data, {
      headers: new HttpHeaders().set('content-type', 'application/x-www-form-urlencoded; charset=utf-8'),
    }).subscribe((data: Servres) => {
      console.log("res " + JSON.stringify(data));
      this.servres = data.msg;
      if (data.success) {
        this.removeemit.emit(this.drink.drinkid);
      }
    },
      error => {
        console.log(' error' + JSON.stringify(error));
      }
    );
  }

}
