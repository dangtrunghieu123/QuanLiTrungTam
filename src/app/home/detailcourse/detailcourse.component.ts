import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../../service/course.service';
import $ from 'jquery';
import { Course } from '../../Model/course';
declare var $: any;
declare var swal: any;
@Component({
  selector: 'app-detailcourse',
  templateUrl: './detailcourse.component.html',
  styleUrls: ['./detailcourse.component.css']
})
export class DetailcourseComponent implements OnInit {
  public IDCourse: string;
  public DetailCourse: any;
  public ListEnroll: Course[] = [];
  constructor(private activate: ActivatedRoute, private course: CourseService) { }
  //ActivatedRoute : use get take parameter from the service down
  GetDetailCourse() {
    this.activate.params.subscribe(//asyn, is a observable
      (result) => {
        this.IDCourse = result.idCourse;
        localStorage.setItem("IdCourse", JSON.stringify(this.IDCourse));
        this.course.getDetailCourse(this.IDCourse).subscribe(
          (DetailResult) => {
            this.DetailCourse = DetailResult;
            console.log(this.DetailCourse);
            console.log(this.DetailCourse.TenKhoaHoc);
            // this.Registration(this.IDCourse);
          }
        )


      },
      (error) => {
        console.log(error);
      }
    )
  }
  ngOnInit() {
    this.GetDetailCourse();
    // this.Registration();
  }
 
  Registration(val) {
    console.log(val);
    let IDCourse = JSON.parse(localStorage.getItem("IdCourse"));
    console.log(IDCourse);
    let Account = JSON.parse(localStorage.getItem("user"));
    console.log(Account.TaiKhoan);
    swal({
      type: 'success',
      title: 'Enroll course successfully',
      showConfirmButton: false,
      timer: 1500
    })
    // this.course.EnrollCourse(Account, val).subscribe(
    //   (resultLocalStorage) => {
    //     console.log(resultLocalStorage);
    //     swal({
    //       type: 'success',
    //       title: 'Enroll course successfully',
    //       showConfirmButton: false,
    //       timer: 1500
    //     })
    //   },
    //   (error) => {
    //     console.log(error);
    //   }
    // )
  }
}
