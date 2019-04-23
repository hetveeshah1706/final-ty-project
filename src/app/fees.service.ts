import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { url } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FeesService {
public url:string=url.endpoint+"studentfees/";
public url1:string=url.endpoint+"studentfeesdetail/";
public url2:string=url.endpoint+"fees/";
public url3:string=url.endpoint+"feesionic/";
  constructor(public _http:HttpClient) { }
  ontotalfees(student_id){
    return this._http.get(this.url+student_id);
  }
  onremainingfees(student_id){
    return this._http.get(this.url3+student_id);
  }
  
  
}
