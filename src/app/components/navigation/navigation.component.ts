import { Component, OnInit } from '@angular/core';

import { faLinkedin,faGithub } from '@fortawesome/free-brands-svg-icons';
import { faHouseChimney, faUser, faFile, faCode, faEnvelope } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  linkedIn = faLinkedin;
  github = faGithub;
  
  home = faHouseChimney;
  about = faUser;
  resume = faFile;
  projects = faCode;
  contact = faEnvelope;
  constructor() { }

  ngOnInit(): void {
  }

}
