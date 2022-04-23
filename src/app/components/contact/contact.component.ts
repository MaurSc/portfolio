import { Component, OnInit } from '@angular/core';

import { faPhone, faEnvelope, faLocationDot, faArrowUp } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  phone = faPhone;  
  mail = faEnvelope;  
  location = faLocationDot;  

  arrowUp = faArrowUp;
  constructor() { }

  ngOnInit(): void {
  }

}
