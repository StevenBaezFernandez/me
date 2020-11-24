import { Component, OnInit } from '@angular/core';

import * as Typed from 'typed.js';

import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor(private spinnerSevice: NgxSpinnerService) {
  }
  ngOnInit() {

    /** spinner starts on init */
    this.spinnerSevice.show();
 
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinnerSevice.hide();
    }, 1000);

    const options = {
      strings: ["Hi,<br> I’m Steven <br> Web Developer."],
      typeSpeed: 70,
      backSpeed: 100,
      showCursor: true,
      cursorChar: '|',
      loop: false
    };
  
    setTimeout(() => {
      const typed = new Typed.default('.typed', options);
    
    }, 1300);

  }

}
