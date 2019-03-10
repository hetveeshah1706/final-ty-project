import { Component, OnInit } from '@angular/core';
import { FeesService } from '../fees.service';

@Component({
  selector: 'app-totalfees',
  templateUrl: './totalfees.page.html',
  styleUrls: ['./totalfees.page.scss'],
})
export class TotalfeesPage implements OnInit {
student_id:number;
total_fees:number;
paid_amount:number;
student_name:string;
  constructor(private _ser:FeesService) { }

  ngOnInit() {
    this.student_id=parseInt(localStorage.getItem('student_id'));
    console.log(this.student_id);
    this._ser.ontotalfees(this.student_id).subscribe(
      (data:any)=>{
        this.total_fees=data[0].total_fees;
        this.student_name=data[0].student_name;
        this.paid_amount=data[0].paid_amount;
        console.log(data);
      }
    )

  }

}
