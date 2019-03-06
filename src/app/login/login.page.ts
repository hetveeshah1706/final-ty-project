import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { student_login } from './student_login';
import { Storage } from "@ionic/storage";
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  student_id:string;
  student_password:string;
  
  onForget(){
    this._router.navigate(['/forgetpass'])
  }
  
  
  
  
  
  onLogin(){
    console.log("hi")
    console.log(this.student_id);
      console.log(this.student_password);
      this._ser.getLoginById(new student_login(this.student_id,this.student_password)).subscribe(
        (data:any[])=>{
          console.log(data);
          if(data.length>0){
            localStorage.setItem('student_id',this.student_id);
            alert("login successfully");
            this._router.navigate(['/studentfrontdisplay']);
  
            // //  this._route.navigate(['/viewprofile']);
            //  localStorage.setItem('user_id',this.user_id);
            //  this._route.navigate(['/table'])
            }
            else{
              alert("unsuccesful")
            }
        }
      );
  
  
  }

  constructor(private _ser:LoginService,private _router:Router,private storage:Storage) { }

  ngOnInit() {
  }

}
