import { Component, OnInit, AfterViewInit } from '@angular/core';
import { HttpParams, HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiurlService } from '../../../util/conf/urls/apiurl.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserservService } from '../../userserv/userserv.service';
import { Servres } from '../../../util/datamodels/servres';
import { EntryanimsoperatorService } from '../../../util/anims/entryanims/entryanimsoperator.service';
@Component({
  selector: 'app-restorepassword',
  templateUrl: './restorepassword.component.html',
  styleUrls: ['./restorepassword.component.css']
})
export class RestorepasswordComponent implements OnInit, AfterViewInit {
  email: string;
  type: string;
  servres: string;
  constructor(private urls: ApiurlService, private http: HttpClient, private route: ActivatedRoute,
    private userserv: UserservService, private router: Router, private entranims: EntryanimsoperatorService) { }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.route.paramMap.subscribe(params => {
      this.type = params.get("type");
    });
  }
  ngAfterViewInit(): void {
    this.entranims.playwithoutscrolling();
  }
  restorepassword() {
    let data = {
      email: encodeURIComponent(this.email),
    };
    this.http.post(this.urls.rooturl + this.getpropurl(), data, {
      headers: new HttpHeaders().set('content-type', 'application/x-www-form-urlencoded; charset=utf-8'),
    }).subscribe((data: Servres) => {
      console.log("res " + JSON.stringify(data));
      this.servres = data.msg;
    },
      error => {
        console.log(' error' + JSON.stringify(error));
      }
    );
  }

  getpropurl():string {
    switch (this.type) {
      case "normaluser":
        return "restorepassworduser";
      case "worker":
        return "restorpasswordworker";
      case "admin":
        return "restorepasswordadmin";
    }
  }




}
