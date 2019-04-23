import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { assignment_class } from './assignment/assignment_class';
import { url } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AssignmentService {
    public url:string=url.endpoint+"assignmentIonic/";
    public url1:string=url.endpoint+"student/";
    constructor(public _http:HttpClient) { }
  getAssignmentSubject(student_id) {
    return this._http.get(this.url+student_id);
  }
  getStudentByID(student_id){
    return this._http.get(this.url1+student_id);
  }
  getAssignmentIonicById(item:assignment_class){
    console.log(item);
    let body=JSON.stringify(item)   ;
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.url,body,{headers:head1});
  }
}
