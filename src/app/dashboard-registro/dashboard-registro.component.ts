import { Component, OnInit } from '@angular/core';
//modal
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dashboard-registro',
  templateUrl: './dashboard-registro.component.html',
  styleUrls: ['./dashboard-registro.component.css']
})
export class DashboardRegistroComponent implements OnInit {
//modal
//modal:any;
  constructor(
     //modal
    // private modalService: NgbModal
  ) { 

   /* const pagina = window.location.href;
    if ( pagina === 'http://localhost:4200/dashboard-registro') {
    //modal
    this.modal = document.getElementById('content');
    this.modal.style.display ='show';
  }*/

  }

  


  //modal
  /*openLg(content) {
    this.modalService.open(content, { size: 'lg' });
  }*/
  ngOnInit() {
  }

}
