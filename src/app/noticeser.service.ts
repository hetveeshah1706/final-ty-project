import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { url } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NoticeserService {
  url:string=url.endpoint+"multidelnotice/";
  url1:string=url.endpoint+"notice/"
  constructor(public _http:HttpClient) { }
  getAllNotice(){
    return this._http.get(this.url);
   }
   getNoticeById(notice_id){
     return this._http.get(this.url1+notice_id);
   }

}
