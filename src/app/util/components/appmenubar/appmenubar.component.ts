import { Component, OnInit, Input, HostListener, AfterViewInit } from '@angular/core';
import { UserservService } from '../../../user/userserv/userserv.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appmenubar',
  templateUrl: './appmenubar.component.html',
  styleUrls: ['./appmenubar.component.css']
})
export class AppmenubarComponent implements OnInit, AfterViewInit {
   
  @Input() whereismenu: string;
  @HostListener('window:scroll', ['$event']) 
  onScroll(event) {
    this.changemenuonscroll();
  }
  menuwrap: HTMLElement;
  menusticky = false;

  menustartedmove = false;
  constructor(public userserv: UserservService) { }

  ngOnInit() {
    console.log("location " + this.whereismenu);
    switch (this.whereismenu) {
      case "welcomepage":
        this.menusticky = true;
        break;
    }
  }

  ngAfterViewInit(): void {
    this.menuwrap = document.getElementById("menuwrap"); 
  }
  changemenuonscroll() {
    if (window.pageYOffset > 0 && !this.menustartedmove) {
      this.menustartedmove = true;
      this.menuwrap.classList.add("menumoved");
      this.menuwrap.classList.remove("menuopacited");
    } else if (window.pageYOffset < 10 && this.menustartedmove) {
      this.menustartedmove = false;
      this.menuwrap.classList.remove("menumoved");
      this.menuwrap.classList.add("menuopacited");
      
    }
  }


}
