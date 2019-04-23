import { Component, OnInit } from '@angular/core';
import { StudentfrontdisplayserService } from '../studentfrontdisplayser.service';
import { Router } from '@angular/router';
import { editprofile } from './editprofile';
import { url } from 'src/environments/environment';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.page.html',
  styleUrls: ['./editprofile.page.scss'],
})
export class EditprofilePage implements OnInit {
student_id:number;
student_name:string;
student_image:string;
date_of_birth:Date;
flag:boolean=false;
selectedFile:File=null;
student_password:string;
url_path=url.endpoint;
onBack(){
  this._route.navigate(['/studentfrontdisplay']);
}
onChange(value)
  {
    this.flag=true;
    this.selectedFile=<File>value.target.files[0];
  }
onUpdate()
{
  if(this.flag)
  {
    //console.log(this.fk_standard_id);
    const fd=new FormData;
    fd.append('student_id',this.student_id.toString());
    fd.append('student_name',this.student_name);
    fd.append('image',this.selectedFile,this.selectedFile.name);
    fd.append('student_password',this.student_password.toString());
    fd.append('date_of_birth',this.date_of_birth.toString());
   // fd.append('fk_subject_id',this.fk_subject_id.toString());

    console.log(fd);
    this._ser.updateStudentImage(fd).subscribe(
      (data:any)=>{
        console.log(data);
        this._route.navigate(['/studentpersonaldetails'])
        //this.arr.push(new dailywork_class(this.work_id,this.image,this.selected.standard_id,this.selected2.subject_id,this.selected1.batch_id,this.title));
      }
    );
  }
  else
  {
  //console.log(this.work_id,this.fk_standard_id);
  this._ser.updateStudent(new editprofile(this.student_id,this.student_password,this.student_name,this.date_of_birth)).subscribe(

    (data:any)=>
    {
      //console.log(this.work_id,this.fk_standard_id);
      console.log(data);
    this._route.navigate(['/studentpersonaldetails']);
    }
  )

}
}

  constructor(private _ser:StudentfrontdisplayserService,public _route:Router) { }

  ngOnInit() {
    this.student_id=parseInt(localStorage.getItem('student_id'));
    this._ser.getStudentById(this.student_id).subscribe(
    (data:any)=>{
      this.student_name=data[0].student_name;
      this.student_password=data[0].student_password;
      this.date_of_birth=data[0].date_of_birth;
      this.student_image=data[0].student_image;
    }
    )
    
  }

}
