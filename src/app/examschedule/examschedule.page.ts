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
  flag:boolean=false;
  exam_arr:examresult[]=[];

  constructor(private _ser:ExamresultService,private _route:Router) { }
  onExamResult(){
    if(this.flag){
      this.flag=false;
    }
    else{
      this.flag=true;
    }
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
    this._ser.getResultByStudentId(this.student_id).subscribe(
      (data:any[])=>{
        console.log(data);
        this.exam_arr=data;
      }
    )
    
    

  }

}
