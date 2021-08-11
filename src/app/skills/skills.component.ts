import { Component, OnInit } from '@angular/core';
import {faAngular, faBootstrap, faReact,faNodeJs, faPython, faGoogle, faJsSquare} from '@fortawesome/free-brands-svg-icons'; 
import {} from '@fortawesome/free-regular-svg-icons';
import {faCogs,faServer,faDatabase} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  faAngular = faAngular; 
  faBootstrap = faBootstrap; 
  faCogs = faCogs; 
  faReact = faReact; 
  faNodeJs = faNodeJs; 
  faServer = faServer; 
  faPython = faPython; 
  faGoogle = faGoogle; 
  faDatabase = faDatabase;
  faJsSquare = faJsSquare; 

  constructor() { }

  ngOnInit(): void {
  }

}
