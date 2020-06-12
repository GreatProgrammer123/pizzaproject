import { Injectable } from '@angular/core';
import { Menu } from '../menuelems/datamodels/menu';
import { HttpParams, HttpClient, HttpHeaders } from '@angular/common/http';
import { Servres } from '../../../util/datamodels/servres';
import { ApiurlService } from '../../../util/conf/urls/apiurl.service';
import { Weekdays } from '../../../admin/openhours/datamodels/weekdays';
import { Openhours } from '../../../admin/openhours/datamodels/openhours';
@Injectable({
  providedIn: 'root'
})
export class MenuservService {
  menu: Menu;
  todayopenhours: Openhours;
  mergetopings = false;
  private wkdays = new Weekdays();
  constructor(private urls: ApiurlService, private http: HttpClient) {
    this.downloadmenu();
  }

  downloadmenu() {
    this.http.get(this.urls.rooturl + "readmenu").subscribe((res: Servres) => {
      console.log("res " + JSON.stringify(res));
      this.menu = res.data;
      if (this.mergetopings) this.menu.toppings = this.menu.toppings.concat(this.menu.notintegraltopings);
      if (!this.menu) {
        this.menu = {} as Menu;
        this.menu.pizzas = [];
        this.menu.toppings = [];
        this.menu.notintegraltopings = [];
        this.menu.drinks = [];
        this.menu.openhours = [];
      }

      this.gettodayopenhours();
      //   console.log("conv  " + JSON.stringify(data));

    },
      error => {
        console.log(' error' + JSON.stringify(error));

      }
    );
  }

  gettodayopenhours() {
    let dayinnum = new Date().getDay() - 1;
    if (dayinnum < 0) dayinnum = 6;
    let today = this.wkdays.days[dayinnum];
    this.todayopenhours = this.menu.openhours.find(x => x.day == today);
  }


  isrestaurantopened(): boolean {
    if (!this.todayopenhours) return true;
    let open = new Date().setHours(this.todayopenhours.open.hour, this.todayopenhours.open.minute);
    let close = new Date().setHours(this.todayopenhours.close.hour, this.todayopenhours.close.minute);
    let now = new Date().getTime();
    console.log("open h  " + open + " " + close + " " + now);
    if (open < now && now < close) return true;
    return false;
  }


}
