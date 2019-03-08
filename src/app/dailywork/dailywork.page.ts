import { Component, OnInit } from '@angular/core';
import { dailywork_class } from './dailywork_class';
import { DailyworkService } from '../dailywork.service';
import { subject_class } from '../studentpersonaldetails/subject_class';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dailywork',
  templateUrl: './dailywork.page.html',
  styleUrls: ['./dailywork.page.scss'],
})
export class DailyworkPage implements OnInit {
student_id:string;
subject_arr:dailywork_class[]=[];
onDailyWork(subject_id){
  this._route.navigate(['/dailysubjectdisplay',subject_id]);
}
  constructor(public _ser:DailyworkService,public _route:Router) { }

  ngOnInit() {
    this.student_id=localStorage.getItem('student_id');
    console.log(this.student_id);
    this._ser.getDailyWorkSubject(this.student_id).subscribe(
      (data:dailywork_class[])=>{
        this.subject_arr=data;
      }
    );    
  }

}
