import { Component, OnInit } from '@angular/core';

import { NgxSpinnerService } from "ngx-spinner";

import * as Typed from 'typed.js';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  constructor(private spinnerSevice: NgxSpinnerService) { }

  ngOnInit() {
    /** spinner starts on init */
    this.spinnerSevice.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinnerSevice.hide();
    }, 1000);

    const options = {
     strings: ["<span>My skills.</span>"],
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
