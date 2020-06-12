import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EntryanimsoperatorService {
  intersect = 0.85;
  constructor() {
    window.addEventListener('scroll', (event) => {
      this.entryanims();
    });
  }

  entryanims() {
    let animelems = document.getElementsByClassName("toleft");
    for (let i = 0; i < animelems.length; i++)this.playanimscroll(animelems[i], "toleft");
    animelems = document.getElementsByClassName("toright");
    for (let i = 0; i < animelems.length; i++)this.playanimscroll(animelems[i], "toright");
    animelems = document.getElementsByClassName("todown");
    for (let i = 0; i < animelems.length; i++)this.playanimscroll(animelems[i], "todown");


  }


  playwithoutscrolling() {
    let animelems = document.getElementsByClassName("toleft");
    for (let i = 0; i < animelems.length; i++)this.playanimnoscroll(animelems[i],"toleft");
    animelems = document.getElementsByClassName("toright");
    for (let i = 0; i < animelems.length; i++)this.playanimnoscroll(animelems[i],"toright");
    animelems = document.getElementsByClassName("todown");
    for (let i = 0; i < animelems.length; i++)this.playanimnoscroll(animelems[i],"todown");
  }




  playanimscroll(x, entryanim: string) {
    console.log("found to left anims " + x.getBoundingClientRect().top + " ");
    if (x.getBoundingClientRect().top < window.innerHeight * this.intersect) {
      x.classList.remove(entryanim);
    }
  }

  playanimnoscroll(x, entryanim: string) {
    setTimeout(() => {
      x.classList.remove(entryanim);
    }, 500);
  }
}
