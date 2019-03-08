import { Component, OnInit } from '@angular/core';
import { AssignmentService } from '../assignment.service';
import { Router } from '@angular/router';
import { assignment_class } from './assignment_class';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.page.html',
  styleUrls: ['./assignment.page.scss'],
})
export class AssignmentPage implements OnInit {
  student_id:string;
  subject_arr:assignment_class[]=[];
  constructor(public _ser:AssignmentService,public _route:Router) { }
  onAssignment(subject_id){
    this._route.navigate(['/assignmentdisplay',subject_id]);
  }
  ngOnInit() {
    this.student_id=localStorage.getItem('student_id');
    console.log(this.student_id);
    this._ser.getAssignmentSubject(this.student_id).subscribe(
      (data:assignment_class[])=>{
        this.subject_arr=data;
      }
    );    
  }

}
