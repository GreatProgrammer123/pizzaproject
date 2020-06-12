import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExtendpizzadetService {
  extender: EventEmitter<number> = new EventEmitter<number>();
  constructor() { }
}
