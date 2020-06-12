import { Component, OnInit } from '@angular/core';
import { Admin } from '../../datamodels/users/admin';
import { HttpParams, HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiurlService } from '../../../util/conf/urls/apiurl.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserservService } from '../../userserv/userserv.service';
import { Servres } from '../../../util/datamodels/servres';
@Component({
  selector: 'app-registeradmin',
  templateUrl: './registeradmin.component.html',
  styleUrls: ['./registeradmin.component.css']
})
export class RegisteradminComponent implements OnInit {
  admin = {} as Admin;
  after: string;
  servres: string;
  constructor(private urls: ApiurlService, private http: HttpClient, private route: ActivatedRoute, private userserv: UserservService, private router: Router) { }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.route.paramMap.subscribe(params => {
      this.after = params.get("after");
    });
  }

  register() {
    let admintosave = { ...this.admin };
    admintosave.email = encodeURIComponent(admintosave.email);
    admintosave.password = encodeURIComponent(admintosave.password);
    admintosave.name = encodeURIComponent(admintosave.name);
    admintosave.surname = encodeURIComponent(admintosave.surname);
    this.http.post(this.urls.rooturl + "registeradmin", admintosave, {
      headers: new HttpHeaders().set('content-type', 'application/x-www-form-urlencoded; charset=utf-8'),
    }).subscribe((data: Servres) => {
      console.log("res " + JSON.stringify(data));
      this.servres = data.msg;
      if (data.success) {
        this.router.navigate(["/login", "admin", this.after]);
      }
    },
      error => {
        console.log(' error' + JSON.stringify(error));
      }
    );
  }

}
