import { Component, OnInit } from '@angular/core';
import { HttpParams, HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiurlService } from '../../../util/conf/urls/apiurl.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserservService } from '../../userserv/userserv.service';
import { Servres } from '../../../util/datamodels/servres';
import { Normaluser } from '../../datamodels/users/normaluser';
import { EntryanimsoperatorService } from '../../../util/anims/entryanims/entryanimsoperator.service';
@Component({
  selector: 'app-mydata',
  templateUrl: './mydata.component.html',
  styleUrls: ['./mydata.component.css']
})
export class MydataComponent implements OnInit {
  servres: string;
  user: Normaluser;
  constructor(private urls: ApiurlService, private http: HttpClient, private userserv: UserservService,
    private router: Router, private entranims: EntryanimsoperatorService) { }

  ngOnInit() {
    this.user = { ...this.userserv.normaluser };
    this.user.password = "";
  }

  ngAfterViewInit(): void {
    this.entranims.playwithoutscrolling();
  }

  savechanges() {
    let usertosave = { ...this.user };
    usertosave.email = encodeURIComponent(usertosave.email);
    usertosave.password = encodeURIComponent(usertosave.password);
    usertosave.address.street = encodeURIComponent(usertosave.address.street);
    usertosave.address.postcode = encodeURIComponent(usertosave.address.postcode);
    usertosave.address.city = encodeURIComponent(usertosave.address.city);
    this.http.post(this.urls.rooturl + "updatenormaluser", usertosave, {
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

}
