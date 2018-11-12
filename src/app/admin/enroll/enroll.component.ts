import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../service/course.service';
import { User } from '../../Model/user';
import { Course } from '../../Model/course';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-enroll',
  templateUrl: './enroll.component.html',
  styleUrls: ['./enroll.component.css']
})
export class EnrollComponent implements OnInit {
public listUser:User[] = [];
public listCourse:Course[] =[];
public formListCourse:FormGroup;
public MaKhoaHoc: FormControl;
p:number = 1;
  constructor(private courseSV: CourseService) { }
  GetListUser(){
    this.courseSV.getListUser().subscribe(
      (result) => {
        
        for(let i in result){
          if(result[i].TaiKhoan != "" || result[i].MatKhau != "" ){
            this.listUser.push(result[i]);
            console.log(this.listUser);
          }
        }
      }
    )
  }
GetListCourse(){
  this.courseSV.getListCourse().subscribe(
    (result) => {
      for(let i in result){
        if(result[i].MaKhoaHoc != ""){
          this.listCourse.push(result[i]);
        }
      }
      console.log(this.listCourse);
    }
  )
}
createEnroll(){
  this.formListCourse= new FormGroup({
    MaKhoaHoc: new FormControl()
  })
}
  enroll(val){
    console.log(val);
    localStorage.setItem("IDuser",val);

  }
  enrollCourse(){
    console.log(this.formListCourse.value);
    let ACCOUNT = localStorage.getItem("IDuser");
    console.log(ACCOUNT);
    let codeCourse = this.formListCourse.value.MaKhoaHoc;
    this.courseSV.EnrollCourse(ACCOUNT,codeCourse).subscribe(
      (result) => {
        console.log(result);
      },
      (error) => {
        console.log(error);
      }
    )
  }
  ngOnInit() {
    this.GetListUser();
    this.GetListCourse();
    this.createEnroll();
    // this.enrollCourse();
  }

}
