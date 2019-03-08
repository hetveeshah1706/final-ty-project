import { Component, OnInit } from '@angular/core';
import { StudentfrontdisplayserService } from '../studentfrontdisplayser.service';
import { Storage } from "@ionic/storage";
import { Router } from '@angular/router';
@Component
({
  selector: 'app-studentfrontdisplay',
  templateUrl: './studentfrontdisplay.page.html',
  styleUrls: ['./studentfrontdisplay.page.scss'],
})
export class StudentfrontdisplayPage implements OnInit {

constructor(public _ser:StudentfrontdisplayserService,private storage:Storage,public _route:Router) { }
  student_name:string;
  student_password:string;
  student_image:string;
  student_id:string;
  
  onNotice()
  {
    this._route.navigate(['/notice']);
  }
  onAttendance()
  {
    this._route.navigate(['/attendance']);
  }
  onMyProfile()
  {
    this._route.navigate(['/studentpersonaldetails']);
  }
  onFees()
  {
    this._route.navigate(['/fees']);
  }
  onDailyWork()
  {
    this._route.navigate(['/dailywork']);
  }

  ngOnInit() 
  {
  this.student_id=localStorage.getItem('student_id')
  this._ser.getstudentFront(this.student_id).subscribe(
  (data:any[])=>
  {
      this.student_image=data[0].student_image;
      this.student_name=data[0].student_name;
      console.log(data);
  }
  );
  }

}
