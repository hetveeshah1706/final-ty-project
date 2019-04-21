import { Component, OnInit, ViewChild } from '@angular/core';
import { StudentfrontdisplayserService } from '../studentfrontdisplayser.service';
import { Storage } from "@ionic/storage";
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { IonSlides } from '@ionic/angular';
@Component
({
  selector: 'app-studentfrontdisplay',
  templateUrl: './studentfrontdisplay.page.html',
  styleUrls: ['./studentfrontdisplay.page.scss'],
})
export class StudentfrontdisplayPage implements OnInit {

  @ViewChild('mySlider', { read: IonSlides }) slides: IonSlides;

  imagearray:string[]=[
                        '../../assets/images/about.jpg',
                        '../../assets/images/bg1.png',
                        '../../assets/images/a1.jpg'
                      ];
  slider:IonSlides;

  slidesDidLoad(mySlider:IonSlides)
  {
    this.slider=mySlider;
    mySlider.startAutoplay();
  }
constructor(public _ser:StudentfrontdisplayserService,private storage:Storage,public _route:Router,private menucntrl:MenuController) {
  this.menucntrl.enable(true);
  

 }
  student_name:string;
  student_password:string;
  student_image:string;
  student_id:number;

  
  onNotice()
  {
    this._route.navigate(['/notice']);
  }
  onAboutus(){
    this._route.navigate(['/aboutus']);
  }
  onSchedule(item)
  {
    this._route.navigate(['/schedule']);
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
  onAssignment()
  {
    this._route.navigate(['/assignment']);
  }
  onExam()
  {
    this._route.navigate(['/examschedule']);
  }

  ngOnInit() 
  {
    this.student_id=parseInt(localStorage.getItem('student_id'));
   
    this._ser.getstudentFront(this.student_id).subscribe(
    (data:any[])=>
    { 
      console.log(data);
      this.student_image=data[0].student_image;
      this.student_name=data[0].student_name;
      
    }
  );
  }

}
