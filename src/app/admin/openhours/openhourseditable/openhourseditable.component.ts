import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Openhours } from '../datamodels/openhours';
import { Weekdays } from '../datamodels/weekdays';
import { HttpParams, HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiurlService } from '../../../util/conf/urls/apiurl.service';
import { Servres } from '../../../util/datamodels/servres';
import { UserservService } from '../../../user/userserv/userserv.service';
@Component({
  selector: 'app-openhourseditable',
  templateUrl: './openhourseditable.component.html',
  styleUrls: ['./openhourseditable.component.css']
})
export class OpenhourseditableComponent implements OnInit {
  @Input() openhours: Openhours;
  @Output() saved: EventEmitter<Openhours> = new EventEmitter<Openhours>();
  @Output() removeopenhours: EventEmitter<number> = new EventEmitter<number>();
  wkdays = new Weekdays();

  servres: string;
  constructor(private urls: ApiurlService, private http: HttpClient, private usersev: UserservService) { }

  ngOnInit() {
    this.timestostring(); 
  }

  timestostring() {
    if (!this.openhours.open || !this.openhours.close) return;
    this.openhours.open = this.openhours.open.hour + ":" + this.openhours.open.minute;
    this.openhours.close = this.openhours.close.hour + ":" + this.openhours.close.minute;
  }

  addday() {
    if (this.wkdays.dayexists(this.openhours.day)) {
      this.servres = "wybierz dzień z listy";
    }
  }

  save() {
    let ohtosave = { ...this.openhours };
    ohtosave.token = this.usersev.admin.password;


    this.http.post(this.urls.rooturl + "saveopenhours", ohtosave, {
      headers: new HttpHeaders().set('content-type', 'application/x-www-form-urlencoded; charset=utf-8'),
    }).subscribe((data: Servres) => {
      console.log("res " + JSON.stringify(data));
      this.servres = data.msg;
      if (data.success) {
        this.openhours = data.data;
        this.timestostring(); 
        this.saved.emit(this.openhours);
      }
    },
      error => {
        console.log(' error' + JSON.stringify(error));
      }
    );

  }

  remove() {
    if (this.openhours.openhoursid == 0) {
      this.removeopenhours.emit(this.openhours.openhoursid);
      return;
    }

    const data = {
      id: this.openhours.openhoursid
    }
    this.http.post(this.urls.rooturl + "deleteopenhours", data, {
      headers: new HttpHeaders().set('content-type', 'application/x-www-form-urlencoded; charset=utf-8'),
    }).subscribe((data: Servres) => {
      console.log("res " + JSON.stringify(data));
      this.servres = data.msg;
      if (data.success) {
        this.removeopenhours.emit(this.openhours.openhoursid);
      }
    },
      error => {
        console.log(' error' + JSON.stringify(error));
      }
    );
  }

}
