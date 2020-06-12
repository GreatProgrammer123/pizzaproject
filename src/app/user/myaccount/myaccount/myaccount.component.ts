import { Component, OnInit, AfterViewInit } from '@angular/core';
import { UserservService } from '../../userserv/userserv.service';
import { Router } from '@angular/router';
import { EntryanimsoperatorService } from '../../../util/anims/entryanims/entryanimsoperator.service';

@Component({
  selector: 'app-myaccount',
  templateUrl: './myaccount.component.html',
  styleUrls: ['./myaccount.component.css']
})
export class MyaccountComponent implements OnInit, AfterViewInit {

  constructor(private router: Router, public userserv: UserservService, private entranims: EntryanimsoperatorService) { }

  ngOnInit() {
    if (!this.userserv.normaluser) {
      this.router.navigate(["login", "normaluser", "myaccount"]);
    }
  }

  ngAfterViewInit(): void {
    this.entranims.playwithoutscrolling();
  }

}
