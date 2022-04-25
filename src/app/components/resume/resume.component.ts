import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
  animations: [
    trigger('workH', [
      state('in', style({
        transform:'translateX(0)',
        opacity:1
      })),
      state('out', style({
        transform: 'translateX(-100%)',
        opacity:0
      })),
      transition('* => *', [
        animate('1.5s')
      ])
    ]),
    trigger('education', [
      state('in', style({
        transform:'translateX(0)',
        opacity:1
      })),
      state('out', style({
        transform:'translateX(+100%)',
        opacity:0
      })),
      transition('* => *',[ 
        animate('1.5s')])
    ])
  ]
})
export class ResumeComponent implements OnInit {
  workH:string = 'out';
  education:string = 'out';
  constructor() { }

  ngOnInit(): void {
  }

  onIntersection(name:string,{ visible }: { visible: boolean }): void {
    name == 'workH' ? (this.workH = visible ? 'in' : 'out')
                    : (this.education = visible ? 'in' : 'out')
  }
}
