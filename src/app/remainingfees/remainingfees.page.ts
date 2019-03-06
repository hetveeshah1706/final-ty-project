import { Component, OnInit } from '@angular/core';
import { fees_detail } from '../fees/feesdetail';
import { FeesService } from '../fees.service';

@Component({
  selector: 'app-remainingfees',
  templateUrl: './remainingfees.page.html',
  styleUrls: ['./remainingfees.page.scss'],
})
export class RemainingfeesPage implements OnInit {
  arr:fees_detail;
  student_id:string
  constructor(private _ser:FeesService) { }

  ngOnInit() {
    this.student_id=localStorage.getItem('student_id');
    this._ser.onremainingfees(this.student_id).subscribe(
      (data:any)=>{
        this.arr=data;
      }
    )

  }
  }


