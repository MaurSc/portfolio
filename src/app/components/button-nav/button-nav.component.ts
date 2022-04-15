import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { faBars,faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-button-nav',
  templateUrl: './button-nav.component.html',
  styleUrls: ['./button-nav.component.scss']
})
export class ButtonNavComponent implements OnInit {
@Output() showNavBar = new EventEmitter();
bars = faBars;
xMark = faXmark;

nav:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  toogleNav(){
    this.showNavBar.emit();
    this.nav=!this.nav;
  }

}
