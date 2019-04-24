import { Component, OnInit } from '@angular/core';
import { AssignmentService } from '../assignment.service';
import { Router } from '@angular/router';
import { assignment_class } from './assignment_class';
import { assignment_display_class } from '../assignmentdisplay/assignment_display_class';
import { url } from 'src/environments/environment';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.page.html',
  styleUrls: ['./assignment.page.scss'],
})
export class AssignmentPage implements OnInit {
  student_id:number;
  subject_arr:assignment_class[]=[];
  subject_id:number;
   fk_standard_id:number;
   fk_subject_id: number;
   fk_batch_id: number;
   fk_student_id: number;
  display_arr:assignment_class[]=[];
   assignment_pdf:string;
   assignment_arr:assignment_class[]=[];
  title:string;
  flag:boolean=false;
  assignmenturl:string=url.endpoint;
  constructor(public _ser:AssignmentService,public _route:Router) { }
  // onAssignment(subject_id){
  //   this._route.navigate(['/assignmentdisplay',subject_id]);
  // }
  onClick(item){
    if(this.flag){
        this.flag=false;
    }
    else{
      this.flag=true;
    }
    console.log(item);
    this.assignment_arr=[];
this._ser.getAssignmentIonicById(new assignment_display_class(this.fk_standard_id,item.subject_id,this.fk_batch_id,this.fk_student_id)).subscribe(
  (data:assignment_display_class[])=>{
    console.log(data);
    this.assignment_arr=data;
    console.log(this.assignment_arr);
 //   this.display_arr=data;
    
   
    
    //this.pdf=data[0].pdf;
    //this.title=data[0].title;
    //this.daily_date=data[0].daily_date;
    //this.display_arr=data;
    //console.log(this.display_arr);
  }
);

}
// onDailyWork(subject_id){
//   this._route.navigate(['/dailysubjectdisplay',subject_id]);
// }
  
  
onlciklink(item){
  window.open(this.assignmenturl+"/images/assignment/"+item.pdf,"_system","location=yes");
  // 
  
}
  onBack(){
    this._route.navigate(['/studentfrontdisplay']);
  }
  ngOnInit() {
    this.student_id=parseInt(localStorage.getItem('student_id'));
    console.log(this.student_id);
    this._ser.getAssignmentSubject(this.student_id).subscribe(
      (data:any[])=>{
        this.subject_arr=data;
        this.subject_id=data[0].subject_id;
        
        console.log(this.subject_id);
      }
    );  
 
    this._ser.getStudentByID(this.student_id).subscribe(
      (data:any)=>{
        console.log("hello");
        console.log(data);
        this.fk_standard_id=data[0].fk_standard_id;
        this.fk_subject_id=this.subject_id;
        this.fk_batch_id=data[0].fk_batch_id;
        this.fk_student_id=this.student_id;
        console.log(this.fk_standard_id);
        console.log(this.fk_subject_id);
        console.log(this.fk_batch_id);
      
        console.log(this.fk_student_id);
      });
    }
  }
    
//         this._ser.getAssignmentIonicById(new assignment_display_class(this.fk_standard_id,item.fk_subject_id,this.fk_batch_id,this.fk_student_id)).subscribe(
//           (data:assignment_class[])=>{
//             console.log(data);
//             this.display_arr=data;
//             //this.assignment_pdf=data[0].assignment_pdf;
//             //this.title=data[0].title;
//             //this.daily_date=data[0].daily_date;
//             //this.display_arr=data;
//             //console.log(this.display_arr);
//           }
//         );
//       }

 
