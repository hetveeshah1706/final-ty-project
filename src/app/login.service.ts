import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { student_login } from './login/student_login';
import { url } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public student_login:string=url.endpoint+"studentlogin/";
  getLoginById(item:student_login){
    console.log(item);
    let body=JSON.stringify(item)   ;
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.student_login,body,{headers:head1});
  }

  constructor(private _http:HttpClient ) { }
}
