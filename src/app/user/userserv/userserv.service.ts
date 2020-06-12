import { Injectable } from '@angular/core';
import { Normaluser } from '../datamodels/users/normaluser';
import { Admin } from '../datamodels/users/admin';
import { Worker } from '../datamodels/users/worker';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserservService {
  normaluser: Normaluser;
  worker: Worker;
  admin: Admin;
  constructor(private router:Router) { }

  getusersfromstorage() {
    let normaluser = JSON.parse(sessionStorage.getItem('normaluser'));
    if (normaluser) this.normaluser = normaluser;
    let worker = JSON.parse(sessionStorage.getItem('worker'));
    if (worker) this.worker = worker;
    let admin = JSON.parse(sessionStorage.getItem('admin'));
    if (admin) this.admin = admin;
  }


  getworkeradmintoken(): string {
    if (this.worker) return this.worker.password;
    return this.admin.password;
  }

  logut() {
    this.normaluser = null;
    this.worker = null;
    this.admin = null;
    sessionStorage.setItem('normaluser', JSON.stringify(this.normaluser));
    sessionStorage.setItem('worker', JSON.stringify(this.worker));
    sessionStorage.setItem('admin', JSON.stringify(this.admin));
    this.router.navigate(["/"]);
  }
}
