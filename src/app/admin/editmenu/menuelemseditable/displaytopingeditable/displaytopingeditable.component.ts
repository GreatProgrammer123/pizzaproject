import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pizzatopping } from '../../../../client/orderpizza/menuelems/datamodels/pizzatopping';
import { ApiurlService } from '../../../../util/conf/urls/apiurl.service';
import { HttpParams, HttpClient, HttpHeaders } from '@angular/common/http';
import { Servres } from '../../../../util/datamodels/servres';
import { UserservService } from '../../../../user/userserv/userserv.service';
@Component({
  selector: 'app-displaytopingeditable',
  templateUrl: './displaytopingeditable.component.html',
  styleUrls: ['./displaytopingeditable.component.css']
})
export class DisplaytopingeditableComponent implements OnInit {
  @Input() toping: Pizzatopping;
  @Output() removeemit: EventEmitter<number> = new EventEmitter<number>();
  @Output() saved: EventEmitter<Pizzatopping> = new EventEmitter<Pizzatopping>();
  servres: string;
  constructor(private urls: ApiurlService, private http: HttpClient, private userserv: UserservService) {

  }

  ngOnInit() {
  }

  save() {
    let topingtosave = { ...this.toping };
    topingtosave.name = encodeURIComponent(topingtosave.name);
    topingtosave.description = encodeURIComponent(topingtosave.description);
    topingtosave.token = this.userserv.admin.password;
    this.http.post(this.urls.rooturl + "addnewpizzatoping", topingtosave, {
      headers: new HttpHeaders().set('content-type', 'application/x-www-form-urlencoded; charset=utf-8'),
    }).subscribe((data: Servres) => {
      console.log("res " + JSON.stringify(data));
      this.servres = data.msg;
      if (data.success) {
        this.toping = data.data;
        this.saved.emit(this.toping);
      }
    },
      error => {
        console.log(' error' + JSON.stringify(error));
      }
    );
  }

  remove() {
    if (this.toping.pizzatoppingid == 0) {
      this.removeemit.emit(this.toping.pizzatoppingid);
      return;
    }
    const data = {
      id: this.toping.pizzatoppingid,
      token: this.userserv.admin.password
    }
    this.http.post(this.urls.rooturl + "deletetoping", data, {
      headers: new HttpHeaders().set('content-type', 'application/x-www-form-urlencoded; charset=utf-8'),
    }).subscribe((data: Servres) => {
      console.log("res " + JSON.stringify(data));
      this.servres = data.msg;
      if (data.success) {
        this.removeemit.emit(this.toping.pizzatoppingid);
      }
    },
      error => {
        console.log(' error' + JSON.stringify(error));
      }
    );
  
  }
}
