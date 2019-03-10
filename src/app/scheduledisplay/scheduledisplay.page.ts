import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ScheduleService } from '../schedule.service';
import { displaydaily_class } from '../dailywork/displaydaily_class';
import { scheduledisplay } from './scheduledisplay';

@Component({
  selector: 'app-scheduledisplay',
  templateUrl: './scheduledisplay.page.html',
  styleUrls: ['./scheduledisplay.page.scss'],
})
export class ScheduledisplayPage implements OnInit {
batch_id:number;
schedule_arr:scheduledisplay[]=[];
  constructor(private _actroute:ActivatedRoute,private _ser:ScheduleService) { }

  ngOnInit() {
    this.batch_id=this._actroute.snapshot.params['batch_id'];
    this._ser.getAllScheduleId(this.batch_id).subscribe(
      (data:any[])=>{
        this.schedule_arr=data;
        console.log(data);
      }
    )

  }

}
