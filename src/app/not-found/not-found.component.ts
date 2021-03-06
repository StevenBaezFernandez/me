import { Component, OnInit } from '@angular/core';

import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {

  constructor(private spinnerSevice: NgxSpinnerService) { }

  ngOnInit() {
     /** spinner starts on init */
     this.spinnerSevice.show();
 
     setTimeout(() => {
       /** spinner ends after 5 seconds */
       this.spinnerSevice.hide();
     }, 1000);
  }

}
