import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fees',
  templateUrl: './fees.page.html',
  styleUrls: ['./fees.page.scss'],
})
export class FeesPage implements OnInit {
student_id:string;
  constructor(private _router:Router) { }
  ontotalfees(){
    this._router.navigate(['/totalfees']);
  }
  onremainingfees(){
    this._router.navigate(['/remainingfees']);
  }

  ngOnInit() {
    this.student_id=localStorage.getItem('student_id');
    console.log(this.student_id);
  }

}
