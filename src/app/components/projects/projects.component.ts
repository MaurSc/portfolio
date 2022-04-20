import { Component, OnInit } from '@angular/core';

import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLink, faGreaterThan, faLessThan, faSlash } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  github = faGithub;
  link = faLink;

  greater = faGreaterThan;
  less = faLessThan;

  constructor() { }

  ngOnInit(): void {
  }

}
