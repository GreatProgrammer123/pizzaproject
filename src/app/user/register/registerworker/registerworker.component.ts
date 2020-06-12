import { Component, OnInit } from '@angular/core';
import { HttpParams, HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiurlService } from '../../../util/conf/urls/apiurl.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserservService } from '../../userserv/userserv.service';
import { Worker } from '../../datamodels/users/worker';
import { Servres } from '../../../util/datamodels/servres';
@Component({
  selector: 'app-registerworker',
  templateUrl: './registerworker.component.html',
  styleUrls: ['./registerworker.component.css']
})
export class RegisterworkerComponent implements OnInit {
  worker = {} as Worker;
  after: string;
  servres: string;
  constructor(private urls: ApiurlService, private http: HttpClient, private route: ActivatedRoute, private userserv: UserservService, private router: Router) {

  }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.route.paramMap.subscribe(params => {
      this.after = params.get("after");
    });
  }

  register() {
    let workertosave = { ...this.worker };
    workertosave.email = encodeURIComponent(workertosave.email);
    workertosave.password = encodeURIComponent(workertosave.password);
    workertosave.name = encodeURIComponent(workertosave.name);
    workertosave.surname = encodeURIComponent(workertosave.surname);
    this.http.post(this.urls.rooturl + "registerworker", workertosave, {
      headers: new HttpHeaders().set('content-type', 'application/x-www-form-urlencoded; charset=utf-8'),
    }).subscribe((data: Servres) => {
      console.log("res " + JSON.stringify(data));
      this.servres = data.msg;
      if (data.success) {
        this.router.navigate(["/login", "worker", this.after]);
      }
    },
      error => {
        console.log(' error' + JSON.stringify(error));
      }
    );
  }

}
