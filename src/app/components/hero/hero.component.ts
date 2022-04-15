import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
showNavBar:boolean = true;
scrollBar?:string;
  constructor() { }

  ngOnInit(): void {
  }
  toogleHideNav(){
    this.showNavBar = !this.showNavBar;
    if (!this.showNavBar){
      window.document.body.style.overflowY='hidden';
    }else{
      window.document.body.style.overflowY='';
    }
  }
}
