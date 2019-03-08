import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { editprofile } from './editprofile/editprofile';

@Injectable({
  providedIn: 'root'
})
export class StudentfrontdisplayserService {
  public url:string='http://localhost:3000/studentfrontdisplay/';
  public url1:string='http://localhost:3000/student_subject_display/';
  public url2:string='http://localhost:3000/studentfees/';
  public url3:string='http://localhost:3000/student/';
  public url4:string='http://localhost:3000/studentionic/';
  public url5:string='http://localhost:3000/studentimage/';
  getstudentFront(student_id){
    return this._http.get(this.url+student_id);
  }
  getstudentsubject(student_id){
    return this._http.get(this.url1+student_id);
  }
  getStudentById(student_id){
    return this._http.get(this.url3+student_id);
  }
  updateStudent(item:editprofile){
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.put(this.url4+item.student_id,body,{headers:head1});
  }
  updateStudentImage(item:FormData){
    return this._http.put(this.url5,item)
  }
  constructor(public _http:HttpClient) { }
}

