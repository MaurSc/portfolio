import { Component, OnInit, Renderer2 } from '@angular/core';

import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
showNavBar:boolean = false;
hideNavFL:boolean = false;
scrollBar?:string;

arrowUp = faArrowUp;

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
  }
   onIntersection({ target, visible }: { target: Element; visible: boolean }): void {
    this.renderer.addClass(target, visible ? 'btn__up-inActive' : 'btn__up-active');
    this.renderer.removeClass(target, visible ? 'btn__up-active' : 'btn__up-inActive');
  }
  
  toogleHideNav(){
    this.showNavBar = !this.showNavBar;
    if (!this.showNavBar){
      window.document.body.style.overflowY='hidden';
    }else{
      window.document.body.style.overflowY='';
    }
  }
  onHideNavFL(){
    this.hideNavFL = !this.hideNavFL;
  }
}
