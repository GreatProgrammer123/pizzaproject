import { Injectable, EventEmitter } from '@angular/core';
import { Sizeprice } from '../../../datamodels/sizeprice';

@Injectable({
  providedIn: 'root'
})
export class SizephihlightService {
  higlighter: EventEmitter<Sizeprice> = new EventEmitter<Sizeprice>();
  constructor() { }
}
