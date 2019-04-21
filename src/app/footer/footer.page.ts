import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.page.html',
  styleUrls: ['./footer.page.scss'],
})
export class FooterPage implements OnInit {
  imagearray:any=[];
  constructor() { 
    this.imagearray=[{'image':'../../assets/images/a1.jpg'}];
  }

  

  ngOnInit() {
  }

}
