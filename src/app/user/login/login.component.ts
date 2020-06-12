import { Component, OnInit, AfterViewInit } from '@angular/core';
import { HttpParams, HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiurlService } from '../../util/conf/urls/apiurl.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserservService } from '../userserv/userserv.service';
import { Servres } from '../../util/datamodels/servres';
import { EntryanimsoperatorService } from '../../util/anims/entryanims/entryanimsoperator.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, AfterViewInit {
  type: string;
  after: string;
  email: string;
  password: string;
  servres: Servres;
  constructor(private urls: ApiurlService, private http: HttpClient, private route: ActivatedRoute
    , private userserv: UserservService, private router: Router, private entranims: EntryanimsoperatorService) { }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.route.paramMap.subscribe(params => {
      this.type = params.get("type");
      this.after = params.get("after");
    });
  }

  ngAfterViewInit(): void {
    this.entranims.playwithoutscrolling();
  }


  login() {
    let data = {
      email: encodeURIComponent(this.email),
      password: encodeURIComponent(this.password)
    };
    this.http.post(this.urls.rooturl + this.getpropurl(), data, {
      headers: new HttpHeaders().set('content-type', 'application/x-www-form-urlencoded; charset=utf-8'),
    }).subscribe((data: Servres) => {
      console.log("res " + JSON.stringify(data));
      this.servres = data;
      if (data.success) {
        this.postloginaction(data.data);
      }
    },
      error => {
        console.log(' error' + JSON.stringify(error));
      }
    );
  }

  postloginaction(user) {
    switch (this.type) {
      case "normaluser":
        sessionStorage.setItem('normaluser', JSON.stringify(user));
        this.userserv.normaluser = user;
        break;
      case "worker":
        sessionStorage.setItem('worker', JSON.stringify(user));
        this.userserv.worker = user;
        break;
      case "admin":
        sessionStorage.setItem('admin', JSON.stringify(user));
        this.userserv.admin = user;
        break;
    }
    if (!this.after) this.after = "";
    this.router.navigate([this.after]);
  }


  getpropurl() {
    switch (this.type) {
      case "normaluser":
        return "loginuser";
      case "worker":
        return "loginworker";
      case "admin":
        return "loginadmin";
    }
  }




}
