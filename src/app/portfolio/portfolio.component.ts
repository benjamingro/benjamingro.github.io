import { Component, OnInit } from '@angular/core';
// import {} from '@fortawesome/free-regular-svg-icons';
import {faExternalLinkAlt} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  faExternalLinkAlt = faExternalLinkAlt;
  constructor() { }

  ngOnInit(): void {
  }

}
