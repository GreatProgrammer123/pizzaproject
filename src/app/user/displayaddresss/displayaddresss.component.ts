import { Component, OnInit, Input } from '@angular/core';
import { Address } from '../datamodels/address';

@Component({
  selector: 'app-displayaddresss',
  templateUrl: './displayaddresss.component.html',
  styleUrls: ['./displayaddresss.component.css']
})
export class DisplayaddresssComponent implements OnInit {
  @Input()address: Address;
  constructor() { }

  ngOnInit() {
  }

}
