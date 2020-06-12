import { Component, OnInit } from '@angular/core';
import { Anorder } from '../../client/orderpizza/menuelems/datamodels/ordermodels/anorder';
import { HttpParams, HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiurlService } from '../../util/conf/urls/apiurl.service';
import { Servres } from '../../util/datamodels/servres';
import { DatePipe } from '@angular/common';
import { interval } from 'rxjs';
import { UserservService } from '../../user/userserv/userserv.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-workerpanel',
  templateUrl: './workerpanel.component.html',
  styleUrls: ['./workerpanel.component.css']
})
export class WorkerpanelComponent implements OnInit {
  states = [{ name: "oczekujące", state: 1 }, { name: "w trakcie realizacji", state: 2 }, { name: "zrealizowane", state: 3 }];
  chosenstate=1;
  orders = [] as Anorder[];
  lastupdatedate: Date;
  servres: string;
  constructor(private urls: ApiurlService, private http: HttpClient, private userserv: UserservService, private router: Router) { }

  ngOnInit() {

    if (!this.userserv.admin && !this.userserv.worker) {
      this.router.navigate(["login", "worker", "workerpanel"]);
      return;
    }


    this.downloadorders();

    interval(60000).subscribe(x => {
      this.downloadorders();
    });


  }

  stateselectionchange() {
    this.orders = [];
    console.log("selected state " + this.chosenstate);
    this.downloadorders();
  }

  downloadorders() {
    let dateins = null;
    if (this.lastupdatedate) dateins = new DatePipe('en-US').transform(this.lastupdatedate, 'yyyy-MM-dd HH:mm');
    if (this.orders.length == 0) dateins = null;

    console.log("token    " + this.userserv.getworkeradmintoken());
    let params = new HttpParams()
      .set("state", this.chosenstate.toString())
      .set("lastupdatedate", dateins)
      .set("token", this.userserv.getworkeradmintoken());
    this.http.get(this.urls.rooturl + "readorders", { params }).subscribe((res: Servres) => {
      console.log("res " + JSON.stringify(res));
      if (res.success) {
        this.orders = this.orders.concat(res.data);
        this.lastupdatedate = new Date();
        //   console.log("conv  " + JSON.stringify(data));
        this.servres = null;
      } else {
        this.servres = res.msg;
      }
    },
      error => {
        console.log(' error' + JSON.stringify(error));

      }
    );
  }


}
