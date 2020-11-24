import { Component, OnInit } from '@angular/core';

import { NgxSpinnerService } from "ngx-spinner";

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
  }

}
