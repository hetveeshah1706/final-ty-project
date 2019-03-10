import { Component, OnInit } from '@angular/core';
import { ScheduleService } from '../schedule.service';
import { Batch } from '../list/batchclass';
import { Router } from '@angular/router';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.page.html',
  styleUrls: ['./schedule.page.scss'],
})
export class SchedulePage implements OnInit {
arr_batch:Batch[]=[];
onBatch(batch_id){
  this._route.navigate(['/scheduledisplay',batch_id]);
}
  constructor(private _ser:ScheduleService,private _route:Router) { }

  ngOnInit() {
    this._ser.getAllBatch().subscribe(
      (data:any[])=>{
          this.arr_batch=data;
      }
    )
  }

}
