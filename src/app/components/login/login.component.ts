import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';

import { faLock } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-loggin',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  lock = faLock;
  form = FormGroup;
  constructor( private formBuilderr : FormBuilder) {
  }

  ngOnInit(): void {
  }

}
