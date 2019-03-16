import { Component, OnInit } from '@angular/core';
import { ScheduleService } from '../schedule.service';
import { Batch } from '../list/batchclass';
import { Router } from '@angular/router';
import { schedule } from './schedule';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.page.html',
  styleUrls: ['./schedule.page.scss'],
})
export class SchedulePage implements OnInit {
arr_batch:Batch[]=[];
student_id:number;
batch_id:number;
schedule_arr:schedule[]=[];
onBatch(batch_id){
  this._route.navigate(['/scheduledisplay',batch_id]);
}
  constructor(private _ser:ScheduleService,private _route:Router) { }

  ngOnInit() {
    this.student_id=parseInt(localStorage.getItem('student_id'));
    this._ser.getBatchByStudent(this.student_id).subscribe(
      (data:any[])=>{
        this.batch_id=data[0].batch_id;
        this._ser.getAllScheduleId(this.batch_id).subscribe(
          (data:any[])=>{
            console.log(data);
            this.schedule_arr=data;
          }
        )
      }
    )
    
  }

}
