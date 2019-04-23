import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { url } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {
  url:string=url.endpoint+"attendancestudent/"

  constructor(private _http:HttpClient) { }
  onStudentAttendance(student_id){
   return this._http.get(this.url+student_id);
  }
}
