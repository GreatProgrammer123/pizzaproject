import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Sizeprice } from '../../../../client/orderpizza/menuelems/datamodels/sizeprice';

@Component({
  selector: 'app-displaysizepriceeditable',
  templateUrl: './displaysizepriceeditable.component.html',
  styleUrls: ['./displaysizepriceeditable.component.css']
})
export class DisplaysizepriceeditableComponent implements OnInit {
  @Input() sizeprice: Sizeprice;
  @Output() remove: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }


  removesp() {
    console.log("remove size price " + this.sizeprice.editid);
    this.remove.emit(this.sizeprice.editid);
  }
}
