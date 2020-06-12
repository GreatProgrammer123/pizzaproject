import { Component, OnInit } from '@angular/core';
import { UserservService } from '../../user/userserv/userserv.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminpanel',
  templateUrl: './adminpanel.component.html',
  styleUrls: ['./adminpanel.component.css']
})
export class AdminpanelComponent implements OnInit {

  constructor(private router: Router, public userserv: UserservService) { }

  ngOnInit() {
    if (!this.userserv.admin) {
      this.router.navigate(["login","admin","adminpanel"]);
    }

  }

}
