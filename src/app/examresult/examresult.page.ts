import { Component, OnInit } from '@angular/core';
import { ExamresultService } from '../examresult.service';
import { examresult } from './examresult';

@Component({
  selector: 'app-examresult',
  templateUrl: './examresult.page.html',
  styleUrls: ['./examresult.page.scss'],
})
export class ExamresultPage implements OnInit {
student_id:number;
exam_arr:examresult[]=[];
  constructor(private _ser:ExamresultService) { }

  ngOnInit() {
    this.student_id=parseInt(localStorage.getItem('student_id'));
    console.log(this.student_id);
    this._ser.getResultByStudentId(this.student_id).subscribe(
      (data:any[])=>{
        console.log(data);
        this.exam_arr=data;
      }
    )
  }

}
