import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExamresultService {
  student_exam:string="http://localhost:3000/studentresult/";
  student_batch:string="http://localhost:3000/exambatch/";
  exam_schedule:string="http://localhost:3000/examstudent/";

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
