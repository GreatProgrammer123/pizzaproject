import { Component, OnInit, AfterViewInit } from '@angular/core';
import { HttpParams, HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiurlService } from '../../../util/conf/urls/apiurl.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserservService } from '../../userserv/userserv.service';
import { Normaluser } from '../../datamodels/users/normaluser';
import { Address } from '../../datamodels/address';
import { Servres } from '../../../util/datamodels/servres';
import { EntryanimsoperatorService } from '../../../util/anims/entryanims/entryanimsoperator.service';
@Component({
  selector: 'app-registernormaluser',
  templateUrl: './registernormaluser.component.html',
  styleUrls: ['./registernormaluser.component.css']
})
export class RegisternormaluserComponent implements OnInit, AfterViewInit {
  normaluser = {} as Normaluser;
  after: string;
  servres: string;
  constructor(private urls: ApiurlService, private http: HttpClient, private route: ActivatedRoute,
    private userserv: UserservService, private router: Router, private entranims: EntryanimsoperatorService) { }

  ngOnInit() {
    this.normaluser.address = {} as Address;
    window.scrollTo(0, 0);
    this.route.paramMap.subscribe(params => {
      this.after = params.get("after");
    });
  }

  ngAfterViewInit(): void {
    this.entranims.playwithoutscrolling();
  }

  register() {
    if (!this.normaluser.email || !this.normaluser.password) {
      this.servres = "uzupełnij dane";
      return
    }
    let regex = /^([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})$/i;
    if (!regex.test(this.normaluser.email)) {
      this.servres = "Podaj prawidłowy e-mail";
      return;
    }
    if (this.normaluser.password.length < 5) {
      this.servres = "wpisz hasło dłuższe niż 5 znaków";
      return;
    }

    let usertosave = { ...this.normaluser };
    usertosave.email = encodeURIComponent(usertosave.email);
    usertosave.password = encodeURIComponent(usertosave.password);
    usertosave.address.street = encodeURIComponent(usertosave.address.street);
    usertosave.address.postcode = encodeURIComponent(usertosave.address.postcode);
    usertosave.address.city = encodeURIComponent(usertosave.address.city);
    this.http.post(this.urls.rooturl + "registeruser", usertosave, {
      headers: new HttpHeaders().set('content-type', 'application/x-www-form-urlencoded; charset=utf-8'),
    }).subscribe((data: Servres) => {
      console.log("res " + JSON.stringify(data));
      this.servres = data.msg;
      if (data.success) {
        this.router.navigate(["/login", "normaluser", this.after]);
      }
    },
      error => {
        console.log(' error' + JSON.stringify(error));
      }
    );
  }

}
