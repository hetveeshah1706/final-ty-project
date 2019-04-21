import { Component, OnInit } from '@angular/core';
import { NavController, ModalController, AlertController } from '@ionic/angular';
import * as moment from 'moment';
import { AttendanceService } from '../attendance.service';
import { removeDebugNodeFromIndex } from '@angular/core/src/debug/debug_node';
import { Router } from '@angular/router';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.page.html',
  styleUrls: ['./attendance.page.scss'],
})
export class AttendancePage implements OnInit {
eventSource=[];
student_id:number;
viewTitle:string;
selectedDay=new Date();
isToday: boolean;
dt:string;
y:number;
m:number;
d:number;
events:any=[];
calendar={
  mode:'month',
  currentDate:new Date()
};
onBack(){
    this._router.navigate(['/studentfrontdisplay']);
  }
  constructor(public navctrl:NavController,private modalctrl:ModalController,private _ser:AttendanceService,private alertctrl:AlertController,public _router:Router) { }
  loadEvents() {
    this.eventSource = this.createRandomEvents();
}
  ngOnInit() 
  {


    this.student_id=parseInt(localStorage.getItem('student_id'));
    this._ser.onStudentAttendance(this.student_id).subscribe(
        (data:any[])=>{
            console.log(data);
            for(let i=0;i<data.length;i++)
            {
               
                this.dt=data[i].attendance_date.toString();
                console.log('date'+this.dt);
                this.y=parseInt(this.dt.substring(0,4));
                this.m=parseInt(this.dt.substr(5,2));
                console.log('month'+this.m);
                this.d=parseInt(this.dt.substr(8,2));
                console.log('date'+this.d);
               
                console.log(data[i].attendance_date);
                 if(data[i].attendance_status=='present')
                 {
                  this.events.push({
                    title: data[i].attendance_status,
                    startTime: new Date(this.y,(this.m)-1,(this.d)+1,12,30,5,4),
                    endTime:new Date(this.y,(this.m)-1,(this.d)+1,13,30,5,4) ,
                    allDay: true,
                    eventColor:'blue'
                

                    
                })
            }
                else
                {
                    this.events.push({
                        title: data[i].attendance_status,
                        startTime: new Date(this.y,(this.m)-1,(this.d)+1,12,30,5,4),
                        endTime:new Date(this.y,(this.m)-1,(this.d)+1,13,30,5,4) ,
                        allDay: true,
                        eventColor:'red'
                    })
                    
                }
             }
            this.eventSource=this.events;
            //this.eventSource.find((x)=>x.title=='');
           // let events=this.eventSource;
            console.log(this.eventSource);
        }
    )
    

  }
  addevent(){
    
  }
  // onViewTitleChanged(title){
  //   this.viewTitle=title;
  // }
  // onEventSelected(event){
    
  // }
  // onTimeSelected(ev){
  //   this.selectedDay=ev.selectedTime;
  // }












  onViewTitleChanged(title) {
    this.viewTitle = title;
}
onEventSelected(event) {
    console.log('Event selected:' + event.startTime + '-' + event.endTime + ',' + event.title);
    
}
changeMode(mode) {
    this.calendar.mode = mode;
}
today() {
    this.calendar.currentDate = new Date();
}
onTimeSelected(ev) {
  this.selectedDay=ev.selectedTime;
    console.log('Selected time: ' + this.selectedDay + ', hasEvents: ' +
        (ev.events !== undefined && ev.events.length !== 0) + ', disabled: ' + ev.disabled);
}
onCurrentDateChanged(event:Date) {
    var today = new Date();
    today.setHours(0, 0, 0, 0);
    event.setHours(0, 0, 0, 0);
    this.isToday = today.getTime() === event.getTime();
}
createRandomEvents() {
    var events = [];
   
    for (var i = 0; i < 50; i += 1) {
        var date = new Date();
        var eventType = Math.floor(Math.random() * 2);
        var startDay = Math.floor(Math.random() * 90) - 45;
        var endDay = Math.floor(Math.random() * 2) + startDay;
        var startTime;
        var endTime;
        if (eventType === 0) {
            startTime = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate() + startDay));
            console.log('if no '+startTime);
            if (endDay === startDay) {
                endDay += 1;
            }
            endTime = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate() + endDay));
            events.push({
                title: 'present - ' + i,
                startTime: startTime,
                endTime: endTime,
                allDay: true,
               
            });
        } else {
            var startMinute = Math.floor(Math.random() * 24 * 60);
            var endMinute = Math.floor(Math.random() * 180) + startMinute;
            startTime = new Date(date.getFullYear(), date.getMonth(), date.getDate() + startDay, 0, date.getMinutes() + startMinute);
            console.log('else no '+startTime);
            endTime = new Date(date.getFullYear(), date.getMonth(), date.getDate() + endDay, 0, date.getMinutes() + endMinute);
            events.push({
                title: 'absent - ' + i,
                startTime: startTime,
                endTime: endTime,
                allDay: false,
               
            });
        }
    }
    return events;
}
onRangeChanged(ev) {
    console.log('range changed: startTime: ' + ev.startTime + ', endTime: ' + ev.endTime);
}
markDisabled = (date:Date) => {
    var current = new Date();
    current.setHours(0, 0, 0);
    return date < current;
};

}











