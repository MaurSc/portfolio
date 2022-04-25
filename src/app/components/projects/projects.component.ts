import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLink, faGreaterThan, faLessThan } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  animations: [
    trigger('enter', [
      state('in', style({
        transform: 'translate3d(0,0,0) scale(1)'

      })),
      state('out', style({
        transform: 'translate3d(0,0,0) scale(0.4)'
      })),
      transition('* => *',[
        animate ('0.4s')
      ]),
    ])
  ]
})
export class ProjectsComponent implements OnInit {
  github = faGithub;
  link = faLink;
  greater = faGreaterThan;
  less = faLessThan;

  enter:string = 'out';
  constructor() { }

  ngOnInit(): void {
  }
  onIntersection({ visible }: { visible: boolean }): void {
    this.enter = visible ? 'in' : 'out';
  }

}
