import { Component, OnInit } from '@angular/core';
import * as Typed from 'typed.js';
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

    const options = {
     strings: ["<span>My work.</span>"],
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
