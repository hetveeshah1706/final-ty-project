import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { url } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {
  url1:string=url.endpoint+"scheduleionic/"
  url2:string=url.endpoint+"scheduleionic1/"
  getAllBatch(){
    return this._http.get(this.url1);

  }
  getBatchByStudent(student_id){
    return this._http.get(this.url2+student_id);
  }
  getAllScheduleId(batch_id){
    return this._http.get(this.url1+batch_id);
  }

  constructor(private _http:HttpClient) { }
}
