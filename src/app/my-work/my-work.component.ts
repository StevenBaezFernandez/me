import { Component, OnInit } from '@angular/core';

import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-my-work',
  templateUrl: './my-work.component.html',
  styleUrls: ['./my-work.component.css']
})
export class MyWorkComponent implements OnInit {

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
