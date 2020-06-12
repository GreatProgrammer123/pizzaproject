import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Sizeprice } from '../../datamodels/sizeprice';
import { SizephihlightService } from '../expandhiglightservs/sizephighlight/sizephihlight.service';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-displaysizeprice',
  templateUrl: './displaysizeprice.component.html',
  styleUrls: ['./displaysizeprice.component.css'],
  animations: [
    trigger('highlightanim', [
      state('normal', style({
        background: "#FFF0CD"
      })),
      state('higlighted', style({
        background: "#EFC971"
      })),
      transition('collapsed <=> extended', [
        animate('500ms')
      ]),
    ]),
  ]
})
export class DisplaysizepriceComponent implements OnInit {
  @Input() sizep: Sizeprice;
  @Output() choosesp: EventEmitter<Sizeprice> = new EventEmitter<Sizeprice>();
  higlightanimstate = "normal";
  constructor(private sizephiglight: SizephihlightService) {

  }

  ngOnInit() {
    this.sizephiglight.higlighter.subscribe((x: Sizeprice) => {
      if (this.sizep.sizepriceid == x.sizepriceid) {
        console.log("higlihgting " + x.sizepriceid);
        this.higlightanimstate = "higlighted";
      } else if (this.sizep.pizzaid == x.pizzaid) {
        this.higlightanimstate = "normal";
      }
    })
  }

  choosethis() {
    console.log("coose sizep " + this.sizep.sizepriceid);
    this.choosesp.emit({ ...this.sizep });
    this.sizephiglight.higlighter.emit(this.sizep);
  }

}
