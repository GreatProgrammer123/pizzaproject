import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiurlService {
  rooturl = "http://hwsrv-352882.hostwindsdns.com:8080/pizzaprojectapi/";//"http://localhost:8080/pizzaprojectapi/";
  constructor() { }
}
