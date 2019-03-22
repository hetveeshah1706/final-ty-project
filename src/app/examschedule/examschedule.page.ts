import { Component, OnInit } from '@angular/core';
import { examresult } from '../examresult/examresult';
import { ExamresultService } from '../examresult.service';
import { examschedule } from './examschedule';
import { Router } from '@angular/router';

@Component({
  selector: 'app-examschedule',
  templateUrl: './examschedule.page.html',
  styleUrls: ['./examschedule.page.scss'],
})
export class ExamschedulePage implements OnInit {
  student_id:number;
  batch_id:number;
  exam_sc_arr:examschedule[]=[];

  constructor(private _ser:ExamresultService,private _route:Router) { }
  onExamResult(){
    this._route.navigate(['/examresult'])
  }
  onBack(){
    this._route.navigate(['/studentfrontdisplay']);
  }

  ngOnInit() {
    this.student_id=parseInt(localStorage.getItem('student_id'));
    this._ser.getBatchByStudent(this.student_id).subscribe(
      (data:any[])=>{
        this.batch_id=data[0].batch_id;
        this._ser.getAllScheduleId(this.batch_id).subscribe(
          (data:any[])=>{
            console.log(data);
            this.exam_sc_arr=data;
          }
        )
      }
    )
    
    

  }

}
