import { Component, OnInit, Input } from '@angular/core';
import { Topingorder } from '../../../client/orderpizza/menuelems/datamodels/ordermodels/topingorder';

@Component({
  selector: 'app-displaytopingorder',
  templateUrl: './displaytopingorder.component.html',
  styleUrls: ['./displaytopingorder.component.css']
})
export class DisplaytopingorderComponent implements OnInit {
  @Input() topingorder: Topingorder;
  @Input() insideotherelem: boolean;
  constructor() { }

  ngOnInit() {
  }

}
