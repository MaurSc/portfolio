import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

import {MatDialog} from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [
    trigger('enter', [
      state('in', style({
        transform: 'translateX(0)',
        opacity:1
      })),
      state('out', style({
        transform: 'translateX(-100%)',
        opacity:0
      })),
      transition('* => *',[
        animate ('1.5s')
      ]),
    ])
  ]
})
export class AboutComponent implements OnInit {
enter:string = 'out';

constructor(public dialog : MatDialog){}

ngOnInit(): void {
  }
  
openDialog( tec: String ){
  this.dialog.open(ModalComponent,{
    data: tec,
  });
 
}
  onIntersection({ visible }: { visible: boolean }): void {
    this.enter = visible ? 'in' : 'out';
  }
}
