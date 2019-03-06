import { Component, OnInit } from '@angular/core';
import { ForgetpassService } from './forgetpass.service';
import { LoginService } from '../login.service';
import { forgetemail } from './forgetemail';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgetpass',
  templateUrl: './forgetpass.page.html',
  styleUrls: ['./forgetpass.page.scss'],
})
export class ForgetpassPage implements OnInit {
  email_id1:string;
  password:string;
  constructor(private _ser:ForgetpassService,private _ser1:LoginService,private _router:Router) { }

  onclicksendpassword()

  {
 
   this._ser.getfacultyByemail(this.email_id1).subscribe(
 
     (data:any[])=>
 
     {
 
       if(data.length==0)
 
       {
 
         alert("invalid email_id");
 
       }
 
       else
 
       {
 
         this.password=data[0].Password;
 
         localStorage.setItem('Email_id',this.email_id1);
 
         console.log(this.email_id1);
         this._ser.sentMail(new forgetemail(this.email_id1,"your password is","Your  Password is : "+this.password)).subscribe(
 
         (data:any[])=>
 
         {
 
           console.log(data);
 
         
 
         }
 
         );

          
 
         //this.dialogRef.close();
 
 
 
       }
 
     }
 
   );
 
  }
 
 

  ngOnInit() {
  }

}
