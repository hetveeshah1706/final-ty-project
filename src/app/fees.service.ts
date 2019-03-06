import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FeesService {
public url:string="http://localhost:3000/studentfees/";
public url1:string="http://localhost:3000/studentfeesdetail/";
public url2:string="http://localhost:3000/fees/";
  constructor(public _http:HttpClient) { }
  ontotalfees(student_id){
    return this._http.get(this.url+student_id);
  }
  onremainingfees(student_id){
    return this._http.get(this.url1+student_id);
  }
  
}
