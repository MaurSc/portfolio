import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

import { faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [
    trigger('text', [
      state('in',style({
        transform:'translateX(0)',
        opacity:1
      })),
      state('out',style({
        transform:'translateX(-100%)',
        opacity:0
      })),
      transition('* => *',[
        animate('1s')])
    ]),
    trigger('map',[
      state('in',style({
        transform: 'translate3d(0,0,0) scale(1)'
      })),
      state('out',style({
        transform: 'translate3d(0,0,0) scale(0)'
      })),
      transition('* => *',[
        animate('1s')
      ])
    ])
  ]
})
export class ContactComponent implements OnInit {
  phone = faPhone;  
  mail = faEnvelope;  
  location = faLocationDot;

  text:string = 'out';
  map:string = 'out';

  constructor() { }

  ngOnInit(): void {
  }

  onIntersection(name:string, {visible}: { visible: boolean }): void {
    name == 'text' ? (this.text = visible ? 'in' : 'out') 
                   : (this.map = visible ? 'in' : 'out')
  }


}
