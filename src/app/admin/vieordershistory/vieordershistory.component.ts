import { Component, OnInit } from '@angular/core';
import { HttpParams, HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiurlService } from '../../util/conf/urls/apiurl.service';
import { UserservService } from '../../user/userserv/userserv.service';
import { DatePipe } from '@angular/common';
import { Servres } from '../../util/datamodels/servres';
import { Anorder } from '../../client/orderpizza/menuelems/datamodels/ordermodels/anorder';
@Component({
  selector: 'app-vieordershistory',
  templateUrl: './vieordershistory.component.html',
  styleUrls: ['./vieordershistory.component.css']
})
export class VieordershistoryComponent implements OnInit {
  startdate: Date;
  enddate: Date;
  orders: Anorder[];
  constructor(private urls: ApiurlService, private http: HttpClient, private userserv: UserservService) { }

  ngOnInit() {
    this.downloadorders();
  }

  downloadorders():void{
    //startdate  enddate
    let params = new HttpParams()
      .set("startdate", new DatePipe('en-US').transform(this.startdate, 'yyyy-MM-dd HH:mm'))
      .set("enddate", new DatePipe('en-US').transform(this.enddate, 'yyyy-MM-dd HH:mm'))
      .set("token", this.userserv.admin.password);
     // .set("token", this.userserv.admin.password);
    this.http.get(this.urls.rooturl + "readordersforadmin", { params }).subscribe((res: Servres) => {
      console.log("res " + JSON.stringify(res));
      this.orders = res.data;
    },
      error => {
        console.log(' error' + JSON.stringify(error));

      }
    );
  }


}
