import { Component, OnInit } from '@angular/core';
import { Normaluser } from './user/datamodels/users/normaluser';
import { UserservService } from './user/userserv/userserv.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'pizzaproject';

  constructor(private userserv: UserservService) {
    
  }

  ngOnInit(): void {
    this.userserv.getusersfromstorage();
    
  }

  

}
