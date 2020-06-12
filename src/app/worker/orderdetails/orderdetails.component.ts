import { Component, OnInit } from '@angular/core';
import { Anorder } from '../../client/orderpizza/menuelems/datamodels/ordermodels/anorder';
import { HttpParams, HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiurlService } from '../../util/conf/urls/apiurl.service';
import { ActivatedRoute } from '@angular/router';
import { Servres } from '../../util/datamodels/servres';
import { UserservService } from '../../user/userserv/userserv.service';
@Component({
  selector: 'app-orderdetails',
  templateUrl: './orderdetails.component.html',
  styleUrls: ['./orderdetails.component.css']
})
export class OrderdetailsComponent implements OnInit {
  order: Anorder;
  servres: string;
  showdeladr = false;
  constructor(private urls: ApiurlService, private http: HttpClient, private route: ActivatedRoute, private userserv: UserservService) { }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.route.paramMap.subscribe(params => {
      let id = params.get("id");
      this.downloadorder(id);
    });
  }

  changeorderstate(nstate: number) {
  
    let data = {
      orderid: this.order.orderid,
      newstate: nstate,
      token: this.userserv.getworkeradmintoken()
    };
    this.http.post(this.urls.rooturl + "updateorderstate", data, {
      headers: new HttpHeaders().set('content-type', 'application/x-www-form-urlencoded; charset=utf-8'),
    }).subscribe((data: Servres) => {
      console.log("res " + JSON.stringify(data));
      this.servres = data.msg;
      if (data.success) {
        this.order.state = nstate;
      }
    },
      error => {
        console.log(' error' + JSON.stringify(error));
      }
    );
  }

  downloadorder(id) {
    let params = new HttpParams()
      .set("orderid", id);
    this.http.get(this.urls.rooturl + "readorderbyid", { params }).subscribe((res: Servres) => {
     // console.log("res " + JSON.stringify(res));
      this.order = res.data;
    },
      error => {
        console.log(' error' + JSON.stringify(error));

      }
    );
  }

}
