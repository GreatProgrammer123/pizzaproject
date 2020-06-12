import { Component, OnInit } from '@angular/core';
import { HttpParams, HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiurlService } from '../../../util/conf/urls/apiurl.service';
import { Servres } from '../../../util/datamodels/servres';
@Component({
  selector: 'app-contactform',
  templateUrl: './contactform.component.html',
  styleUrls: ['./contactform.component.css']
})
export class ContactformComponent implements OnInit {
  email: string;
  phonenumber: string;
  title: string;
  content: string;

  servres: string;
  constructor(private urls: ApiurlService, private http: HttpClient) { }

  ngOnInit() {
  }


  sendmsg() {
    let msg = {
      email: this.email,
      phonenumber: this.phonenumber,
      title: this.title,
      content: this.content
    };
     
    this.http.post(this.urls.rooturl + "sendcontactform", msg, {
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
