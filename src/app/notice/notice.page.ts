import { Component, OnInit } from '@angular/core';
import { NoticeserService } from '../noticeser.service';
import { notice } from './notice';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notice',
  templateUrl: './notice.page.html',
  styleUrls: ['./notice.page.scss'],
})
export class NoticePage implements OnInit {
  notice_name:string;
  notice_arr:notice[]=[];
  flag:boolean=false;
  constructor(public _ser:NoticeserService,public _route:Router) { }
onClick(item)
{
 this._route.navigate(['/notice-discreption',item.notice_id]);
}
onBack(){
  this._route.navigate(['/studentfrontdisplay']);
}
  ngOnInit() {
    
    this._ser.getAllNotice().subscribe(
      (data:any[])=>{
        console.log(data);
        this.notice_arr=data;
       // this.notice_name=data[0].notice_name;
        //console.log(this.notice_name);
      }
    )
    
  }

}
