import { Component, OnInit } from '@angular/core';
import {faLinkedinIn,faGithub, faYoutube} from '@fortawesome/free-brands-svg-icons'; 
import {faVideo, faTimesCircle, faTimes, faFileDownload} from '@fortawesome/free-solid-svg-icons'; 
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

declare var require: any
const FileSaver = require('file-saver');

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  faLinkedinIn = faLinkedinIn; 
  faGithub = faGithub; 
  faVideo = faVideo; 
  faTimesCircle = faTimesCircle; 
  faTimes = faTimes; 
  faYoutube = faYoutube; 
  faFileDownload = faFileDownload; 

  public videoSrc = ""; 

  constructor( private modalService: NgbModal ) { 

  }

  ngOnInit(): void {
  }
  
  public open(content : any)  {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      // this.closeResult = `Closed with: ${result}`;
      this.videoSrc = 'https://www.youtube.com/embed/FDLOWbJ5N0g?autoplay=1&amp;modestbranding=1&amp;showinfo=0&amp;cc_lang_pref=en&amp;';
    }, (reason) => {
      // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  public downloadPdf() {
    const pdfUrl = '../../assets/files/Ben Gross Résumé.pdf';
    const pdfName = 'Ben Gross Résumé';
    FileSaver.saveAs(pdfUrl, pdfName);
  }

}
