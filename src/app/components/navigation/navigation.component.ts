import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, Input, OnChanges, SimpleChange, Output, EventEmitter, ViewChild, ElementRef} from '@angular/core';

import { faLinkedin,faGithub } from '@fortawesome/free-brands-svg-icons';
import { faHouseChimney, faUser, faFile, faCode, faEnvelope } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  animations: [
    trigger('navAnimation', [
      state('hidde', style({
        transform: 'translateX(0)'
      })),
      state('show', style({
        transform: 'translateX(-100%)'
      })),
      transition('show <=> hidde',[
        animate ('0.5s')
      ]),
    ])
  ]
})
export class NavigationComponent implements OnInit, OnChanges {
  @Input() showing!: boolean;
  @Output() hideNavFL=new EventEmitter();

  linkedIn = faLinkedin;
  github = faGithub;
  active:boolean=true;  
  navBar:string ='hidde';

  home = faHouseChimney;
  about = faUser;
  resume = faFile;
  projects = faCode;
  contact = faEnvelope;

  constructor() { }

  ngOnInit(): void {
  
  }

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    for (const propName in changes) {
      const changedProp = changes[propName];
      if (changedProp.isFirstChange()) {
        this.onHiddenNav();
      } else {
        this.onHiddenNav();
      }
    }
  }
  onHiddenNav(){
    this.navBar = this.showing? 'show' : 'hide';
  }
  hideNavForL(e:any){
    this.hideNavFL.emit();
  }
}
