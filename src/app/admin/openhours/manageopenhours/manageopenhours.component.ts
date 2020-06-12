import { Component, OnInit } from '@angular/core';
import { Openhours } from '../datamodels/openhours';
import { HttpParams, HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiurlService } from '../../../util/conf/urls/apiurl.service';
import { Servres } from '../../../util/datamodels/servres';
@Component({
  selector: 'app-manageopenhours',
  templateUrl: './manageopenhours.component.html',
  styleUrls: ['./manageopenhours.component.css']
})
export class ManageopenhoursComponent implements OnInit {
  openhours: Openhours[];
  ohmsg: string;
  constructor(private urls: ApiurlService, private http: HttpClient) { }

  ngOnInit() {
    this.downloaddata();
  }

  addnewopenhours() {
    if (this.openhours.length > 6) {
      this.ohmsg = "dodałeś już 7 dni";
      return;
    }

    if (this.checkifemptyopenhoursexists()) {
      this.ohmsg = "dodałeś już puste miejsce";
      return;
    }
    let oh = {} as Openhours;
    oh.openhoursid = 0;
    this.openhours.push(oh);
  }

  checkifemptyopenhoursexists() {
    let filtered = this.openhours.filter(oh => oh.openhoursid == 0);
    if (filtered.length > 0) return true;
    return false;
  }

  removeopenhours(event: number) {
    for (let i = 0; i < this.openhours.length; i++) {
      if (this.openhours[i].openhoursid == event) {
        this.openhours.splice(i, 1);
        return;
      }
    }
  }

  saved(event: Openhours) {
    for (let i = 0; i < this.openhours.length; i++) {
      if (this.openhours[i] == event) {
        this.openhours[i] = event;
        return;
      }
    }
  }


  downloaddata() {
    this.http.get(this.urls.rooturl + "readopenhours").subscribe((res: Servres) => {
      console.log("res " + JSON.stringify(res));
      this.openhours = res.data;
      if (!this.openhours) {
        this.openhours = [];
      }
      //   console.log("conv  " + JSON.stringify(data));

    },
      error => {
        console.log(' error' + JSON.stringify(error));

      }
    );
  }

}
