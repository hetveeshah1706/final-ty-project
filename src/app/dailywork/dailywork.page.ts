import { Component, OnInit } from '@angular/core';
import { dailywork_class } from './dailywork_class';
import { DailyworkService } from '../dailywork.service';
import { subject_class } from '../studentpersonaldetails/subject_class';
import { Router } from '@angular/router';
import { displaydaily_class } from './displaydaily_class';

@Component({
  selector: 'app-dailywork',
  templateUrl: './dailywork.page.html',
  styleUrls: ['./dailywork.page.scss'],
})
export class DailyworkPage implements OnInit {
student_id:number;
subject_arr:dailywork_class[]=[];
flag:boolean=false;
subject_id:number;
 subject_name:string;
 fk_standard_id:number;
 fk_subject_id: number;
 fk_batch_id: number;
 fk_student_id:number;
display_arr:dailywork_class[]=[];
daily_date:Date;
pdf:string;
title:string;
onClick(){
  if(this.flag){
      this.flag=false;
  }
  else{
    this.flag=true;
  }

}
// onDailyWork(subject_id){
//   this._route.navigate(['/dailysubjectdisplay',subject_id]);
// }
onBack(){
  this._route.navigate(['/studentfrontdisplay']);
}
  constructor(public _ser:DailyworkService,public _route:Router) { }

  ngOnInit() {
    this.student_id=parseInt(localStorage.getItem('student_id'));
    console.log(this.student_id);
    this._ser.getDailyWorkSubject(this.student_id).subscribe(
      (data:dailywork_class[])=>{
        console.log("hello");
        console.log(data);
        this.subject_arr=data;
        this.subject_id=data[0].subject_id;
        console.log(this.subject_id);
      }
    ); 
    
    
    
    this._ser.getStudentByID(this.student_id).subscribe(
      (data:any)=>{
        console.log("hi");
        console.log(data);
        this.fk_standard_id=data[0].fk_standard_id;
        this.fk_subject_id=this.subject_id;
        this.fk_batch_id=data[0].fk_batch_id;
        this.fk_student_id=this.student_id;
        console.log(this.fk_standard_id);
        console.log(this.fk_subject_id);
        console.log(this.fk_batch_id);
        console.log(this.fk_student_id);
        this._ser.getDailyworkIonicById(new displaydaily_class(this.fk_standard_id,this.fk_subject_id,this.fk_batch_id,this.fk_student_id)).subscribe(
          (data:dailywork_class[])=>{
            console.log(data);
            this.display_arr=data;
            //this.pdf=data[0].pdf;
            //this.title=data[0].title;
            //this.daily_date=data[0].daily_date;
            //this.display_arr=data;
            //console.log(this.display_arr);
          }
        );
      }

    );
     
  }

}
