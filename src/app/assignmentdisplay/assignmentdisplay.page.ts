import { Component, OnInit } from '@angular/core';
import { assignment_class } from '../assignment/assignment_class';
import { ActivatedRoute, Router } from '@angular/router';
import { AssignmentService } from '../assignment.service';
import { assignment_display_class } from './assignment_display_class';

@Component({
  selector: 'app-assignmentdisplay',
  templateUrl: './assignmentdisplay.page.html',
  styleUrls: ['./assignmentdisplay.page.scss'],
})
export class AssignmentdisplayPage implements OnInit {
  subject_id:number;
  student_id:string;
  public fk_standard_id:number;
  public fk_subject_id: number;
  public fk_batch_id: number;
  public fk_student_id: string;
  display_arr:assignment_class[]=[];
   assignment_pdf:string;
  title:string;
  constructor(public _actroute:ActivatedRoute,public _ser:AssignmentService,public _router:Router) { }

  ngOnInit() {
    this.student_id=localStorage.getItem('student_id');
    this.subject_id=this._actroute.snapshot.params['subject_id'];
    console.log(this.subject_id);
    this._ser.getStudentByID(this.student_id).subscribe(
      (data:any)=>{
        console.log(data);
        this.fk_standard_id=data[0].fk_standard_id;
        this.fk_subject_id=this.subject_id;
        this.fk_batch_id=data[0].fk_batch_id;
        this.fk_student_id=this.student_id;
        this._ser.getAssignmentIonicById(new assignment_display_class(this.fk_standard_id,this.fk_subject_id,this.fk_batch_id,this.fk_student_id)).subscribe(
          (data:assignment_class[])=>{
            console.log(data);
            this.display_arr=data;
            this.assignment_pdf=data[0].assignment_pdf;
            this.title=data[0].title;
            //this.daily_date=data[0].daily_date;
            //this.display_arr=data;
            //console.log(this.display_arr);
          }
        );
      }

    );
  
  }

}
