import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.page.html',
  styleUrls: ['./contact-us.page.scss'],
})
export class ContactUsPage implements OnInit {
  onBack(){
    this._route.navigate(['/studentfrontdisplay']);
  }
  constructor(public _route:Router) { }

  ngOnInit() {
  }

}
