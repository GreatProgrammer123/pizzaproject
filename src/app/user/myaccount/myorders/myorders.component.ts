import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Anorder } from '../../../client/orderpizza/menuelems/datamodels/ordermodels/anorder';

import { HttpParams, HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiurlService } from '../../../util/conf/urls/apiurl.service';
import { UserservService } from '../../userserv/userserv.service';
import { Servres } from '../../../util/datamodels/servres';
import { EntryanimsoperatorService } from '../../../util/anims/entryanims/entryanimsoperator.service';
@Component({
  selector: 'app-myorders',
  templateUrl: './myorders.component.html',
  styleUrls: ['./myorders.component.css']
})
export class MyordersComponent implements OnInit, AfterViewInit {
  orders: Anorder[];
  constructor(private urls: ApiurlService, private http: HttpClient, private userserv: UserservService, private entranims: EntryanimsoperatorService) { }

  ngOnInit() {
    this.downloadorders();
  }

  ngAfterViewInit(): void {
    this.entranims.playwithoutscrolling();
  }

  downloadorders() {
    let params = new HttpParams()
      .set("userid", this.userserv.normaluser.userid.toString());
     // .set("token", this.userserv.getworkeradmintoken());
    this.http.get(this.urls.rooturl + "readmyorders", { params }).subscribe((res: Servres) => {
      console.log("res " + JSON.stringify(res));
      this.orders = res.data;
    },
      error => {
        console.log(' error' + JSON.stringify(error));

      }
    );
  }
}
