import { Component, OnInit, Input, EventEmitter, AfterViewInit } from '@angular/core';
import { Pizza } from '../../datamodels/pizza';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { MenuservService } from '../../../menuserv/menuserv.service';
import { Pizzaorder } from '../../datamodels/ordermodels/pizzaorder';
import { OrderpizzaService } from '../../../orderpizzaserv/orderpizza.service';
import { Sizeprice } from '../../datamodels/sizeprice';
import { Topingorder } from '../../datamodels/ordermodels/topingorder';
import { ExtendpizzadetService } from '../expandhiglightservs/ectendpizzadet/extendpizzadet.service';
import { SizephihlightService } from '../expandhiglightservs/sizephighlight/sizephihlight.service';

@Component({
  selector: 'app-displaypizza',
  templateUrl: './displaypizza.component.html',
  styleUrls: ['./displaypizza.component.css'],
  animations: [
    trigger('extendanim', [
      state('collapsed', style({
        maxHeight: 0,
        overflow: "hidden"
      })),
      state('extended', style({
        maxHeight: "800px",
      })),
      transition('collapsed <=> extended', [
        animate('500ms')
      ]),
    ]),
  ]
})
export class DisplaypizzaComponent implements OnInit, AfterViewInit {
  @Input() pizza: Pizza;
  extendanimstate = "collapsed";
  pizzaorder:Pizzaorder;

  constructor(public menuserv: MenuservService, private orderpizzaserv: OrderpizzaService, private extenddetserv: ExtendpizzadetService, private sizephiglight: SizephihlightService) {
   
  }

  ngOnInit() {
    this.pizzaorder = this.orderpizzaserv.getpizzabyid(this.pizza.pizzaid);
    if (this.pizzaorder) {
      this.sizephiglight.higlighter.emit(this.pizzaorder.sizep);
    }
    if (!this.pizzaorder) {
      this.pizzaorder = {} as Pizzaorder;
      this.pizzaorder.pizzaid = this.pizza.pizzaid;
      this.pizzaorder.topings = [] as Topingorder[];
      this.pizzaorder.cost = 0;
      this.pizza.availablesizes.forEach(sp => sp.pizzaid = this.pizza.pizzaid);
    }
    this.extenddetserv.extender.subscribe(x => {
     
      if (x != this.pizza.pizzaid) {
      //  console.log("extend anim " + x + "  " + this.pizza.pizzaid);
        if (this.extendanimstate == "extended") this.extendanimstate = "collapsed";
      }
    });
  }

  ngAfterViewInit(): void {
    if (this.pizzaorder.sizep) {
      console.log("sending choose sp " + this.pizzaorder.sizep.sizepriceid);
        this.sizephiglight.higlighter.emit(this.pizzaorder.sizep);
    }
  }

  clickonwrapper() {
    if (this.extendanimstate == "collapsed") {
      this.extendanimstate = "extended";
      this.extenddetserv.extender.emit(this.pizza.pizzaid);
    } else this.extendanimstate = "collapsed";
  
  }

  choosesp(event: Sizeprice) {
    this.pizzaorder.sizep = event;
    if (!this.pizzaorder.count || this.pizzaorder.count == 0) this.pizzaorder.count = 1;
    this.addtoorder();
  }

  topingchanged(event: Topingorder) {
   
    console.log("topings " + JSON.stringify(this.pizzaorder.topings));
    let tpo = this.pizzaorder.topings.find(x => x.pizzatoppingid == event.pizzatoppingid);
    if (tpo) {
      tpo = event;
      this.addtoorder();
      return;
    }
    this.pizzaorder.topings.push(event);
    this.addtoorder();
  }

  addtoorder() {
    this.calccost();
    this.orderpizzaserv.addpizza(this.pizzaorder);
  }

  calccost() {
    if (!this.pizzaorder.sizep) return;
    this.pizzaorder.cost = this.pizzaorder.count * this.pizzaorder.sizep.price;
    this.pizzaorder.topings.forEach(tp => this.pizzaorder.cost += tp.count * tp.price);


  }



}
