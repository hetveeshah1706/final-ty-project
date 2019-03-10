import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {
  url1:string="http://localhost:3000/scheduleionic/"
  getAllBatch(){
    return this._http.get(this.url1);

  }
  getAllScheduleId(batch_id){
    return this._http.get(this.url1+batch_id);
  }

  constructor(private _http:HttpClient) { }
}
