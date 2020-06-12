import { Component, OnInit, Input } from '@angular/core';
import { Drinkorder } from '../../../client/orderpizza/menuelems/datamodels/ordermodels/drinkorder';

@Component({
  selector: 'app-displaydrinkorder',
  templateUrl: './displaydrinkorder.component.html',
  styleUrls: ['./displaydrinkorder.component.css']
})
export class DisplaydrinkorderComponent implements OnInit {
  @Input() drinkorder: Drinkorder;
  constructor() { }

  ngOnInit() {
  }

}
