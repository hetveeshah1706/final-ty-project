import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FeesService } from '../fees.service';
import { fees_detail } from './feesdetail';

@Component({
  selector: 'app-fees',
  templateUrl: './fees.page.html',
  styleUrls: ['./fees.page.scss'],
})
export class FeesPage implements OnInit {
student_id:number;
total_fees:number;
paid_amount:number;
student_name:string;
flag:boolean=false;
flag1:boolean=false;
arr:fees_detail;
  constructor(private _router:Router,public _ser:FeesService) { }
  onBack(){
    this._router.navigate(['/studentfrontdisplay']);
  }
  ontotalfees(){
    this.flag1=false;
      if(this.flag){

          this.flag=false;
      }
      else{
        this.flag=true;
      }
    
    
  }
  onremainingfees(){
    this.flag=false;
    if(this.flag1){
      this.flag1=false;
    }
    else{
      this.flag1=true;
    }
  }

  ngOnInit() {
    this.student_id=parseInt(localStorage.getItem('student_id'));
    console.log(this.student_id);
    this._ser.ontotalfees(this.student_id).subscribe(
      (data:any)=>{
        this.total_fees=data[0].total_fees;
        this.student_name=data[0].student_name;
        this.paid_amount=data[0].paid_amount;
        console.log(data);
      }
    )
    this._ser.onremainingfees(this.student_id).subscribe(
      (data:any)=>{
        this.arr=data;
      }
    )


  }

}
