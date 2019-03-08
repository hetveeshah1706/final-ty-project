import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DailyworkService } from '../dailywork.service';
import { displaydaily_class } from '../dailywork/displaydaily_class';
import { dailywork_class } from '../dailywork/dailywork_class';

@Component({
  selector: 'app-dailysubjectdisplay',
  templateUrl: './dailysubjectdisplay.page.html',
  styleUrls: ['./dailysubjectdisplay.page.scss'],
})
export class DailysubjectdisplayPage implements OnInit {
 subject_id:number;
 student_id:string;
  public fk_standard_id:number;
        public fk_subject_id: number;
        public fk_batch_id: number;
        public fk_student_id: string;
        display_arr:dailywork_class[]=[];
        daily_date:Date;
        pdf:string;
        title:string;
  constructor(public _actroute:ActivatedRoute,public _ser:DailyworkService,public _router:Router) { }

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
        this._ser.getDailyworkIonicById(new displaydaily_class(this.fk_standard_id,this.fk_subject_id,this.fk_batch_id,this.fk_student_id)).subscribe(
          (data:dailywork_class[])=>{
            console.log(data);
            this.display_arr=data;
            this.pdf=data[0].pdf;
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
