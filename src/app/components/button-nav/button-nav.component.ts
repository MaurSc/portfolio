import { Component, OnInit, EventEmitter, Output, SimpleChange, OnChanges, Input } from '@angular/core';

import { faBars,faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-button-nav',
  templateUrl: './button-nav.component.html',
  styleUrls: ['./button-nav.component.scss']
})
export class ButtonNavComponent implements OnInit, OnChanges{
@Output() showNavBar = new EventEmitter();
@Input() hideNavFL!:boolean;

bars = faBars;
xMark = faXmark;

nav:boolean = true;

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    for (const propName in changes) {
      const changedProp = changes[propName];
      if (changedProp.isFirstChange()) {
        this.toogleNav();
      } else {
        this.toogleNav();
      }
    }
  }

  ngOnInit(): void {
  }
  toogleNav(){
    this.showNavBar.emit();
    this.nav=!this.nav;
  }

}
