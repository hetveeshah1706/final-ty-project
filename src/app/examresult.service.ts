import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { url } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ExamresultService {
  student_exam:string=url.endpoint+"studentresult/";
  student_batch:string=url.endpoint+"exambatch/";
  exam_schedule:string=url.endpoint+"examstudent/";

  constructor(private _http:HttpClient) { }
  getResultByStudentId(student_id){
    return this._http.get(this.student_exam+student_id);
  }
  getBatchByStudent(student_id){
    return this._http.get(this.student_batch+student_id);
  }
  getAllScheduleId(batch_id){
    console.log(batch_id);
    return this._http.get(this.exam_schedule+batch_id);
  }
}
