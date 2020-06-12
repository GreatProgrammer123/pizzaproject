import { Component, OnInit, ViewChild, AfterViewInit, HostListener } from '@angular/core';
import { } from 'googlemaps';
import { Element } from '@angular/compiler/src/render3/r3_ast';
import { EntryanimsoperatorService } from '../../../util/anims/entryanims/entryanimsoperator.service';

@Component({
  selector: 'app-welcomepage',
  templateUrl: './welcomepage.component.html',
  styleUrls: ['./welcomepage.component.css']
})
export class WelcomepageComponent implements OnInit, AfterViewInit {
   @ViewChild('map', { static: false }) mapElement: any;
  map: google.maps.Map;
 
 
  constructor(private entranims: EntryanimsoperatorService) {
 
  }

  ngOnInit() {
    window.scrollTo(0,0);
  }

  ngAfterViewInit(): void {
    let mylatlng = { lat: 52.4144, lng: 16.9211 };
    const mapProperties = {
      center: new google.maps.LatLng(mylatlng),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapProperties);

    let img = {
      url: 'assets/img/pizza.png',
      size: new google.maps.Size(128, 128),
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(0, 128)
    };


    var marker = new google.maps.Marker({
      position: mylatlng,
      map: this.map,
      title: 'PizzaProject',
      icon: img

    });
    marker.setMap(this.map);
  }


 

}
