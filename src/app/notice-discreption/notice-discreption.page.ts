import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NoticeserService } from '../noticeser.service';

@Component({
  selector: 'app-notice-discreption',
  templateUrl: './notice-discreption.page.html',
  styleUrls: ['./notice-discreption.page.scss'],
})
export class NoticeDiscreptionPage implements OnInit {
notice_id:number;
notice_desc:string;
notice_name:string;
batch_name:string;
notice_arr:[]=[];
  constructor(private _actroute:ActivatedRoute,private _ser:NoticeserService) { }

  ngOnInit() {
    this.notice_id=this._actroute.snapshot.params['notice_id'];
    this._ser.getNoticeById(this.notice_id).subscribe(
      (data:any[])=>{
        console.log(data);
        this.notice_desc=data[0].notice_desc;
        this.batch_name=data[0].batch_name;
        this.notice_name=data[0].notice_name;
      }
    )
  }

}
