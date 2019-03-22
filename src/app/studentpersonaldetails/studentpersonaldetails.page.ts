import { Component, OnInit } from '@angular/core';
import { StudentfrontdisplayserService } from '../studentfrontdisplayser.service';
import { subject_class } from './subject_class';
import { Router } from '@angular/router';

@Component({
  selector: 'app-studentpersonaldetails',
  templateUrl: './studentpersonaldetails.page.html',
  styleUrls: ['./studentpersonaldetails.page.scss'],
})
export class StudentpersonaldetailsPage implements OnInit {
  student_name:string;
  student_password:string;
  student_image:string;
  student_id:number;
  standard_no:number;
  date_of_birth:string;
  batch_name:string;
  subject_arr:subject_class[]=[];
  subject_name:string;
  joining_date:string;
  onBack(){
    this._router.navigate(['/studentfrontdisplay']);
  }
  onEditProfile(){
    this._router.navigate(['/editprofile'])
  }
  constructor(public _ser:StudentfrontdisplayserService,private _router:Router) { }

  ngOnInit() {
    this.student_id=parseInt(localStorage.getItem('student_id'))
    this._ser.getstudentFront(this.student_id).subscribe(
      (data:any[])=>{
        console.log(data);
        this.student_image=data[0].student_image;
        this.student_password=data[0].student_password;
        this.student_name=data[0].student_name;
        this.standard_no=data[0].standard_no;
        this.date_of_birth=data[0].date_of_birth;
        this.batch_name=data[0].batch_name;
        this.joining_date=data[0].joining_date;
        //this.subject_name=data[0].subject_name;
        //console.log(this.subject_name);
        console.log(data);
        console.log(this.joining_date);

        this._ser.getstudentsubject(this.student_id).subscribe(
            (data:any)=>{
            console.log(data);
            this.subject_arr=data;
            console.log(this.subject_arr);
          }
    
        );
      }
    );
    
  }

}
