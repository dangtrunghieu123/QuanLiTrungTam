import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../service/course.service';
import { Course } from '../../Model/course';
import { User } from '../../Model/user';
import $ from 'jquery';
import { RightToLeftAnimation } from '../../animation/righttoleft.animation';
declare var $:any;
@Component({
  selector: 'app-dashadmin',
  templateUrl: './dashadmin.component.html',
  styleUrls: ['./dashadmin.component.css'],
  // animations: [RightToLeftAnimation],
  // host: { '[@RightToLeftAnimation]': '' }
})
export class DashadminComponent implements OnInit {
public listCourse:Course[] = [];
public listUser:User[] = [];
p: number = 1;
q: number = 1;
  constructor(private courseSV: CourseService) { }
GetListCourse(){
  this.courseSV.getListCourse().subscribe(
    (result) => {
      console.log(result);
      for(let i in result){
        if(result[i].HinhAnh != null){
          this.listCourse.push(result[i]);
        }
      }
      setTimeout(()=>{
        this.showOwlCarousel();
      },100)
    },
    (error) => {
      console.log(error);

    }
  )
}

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

showOwlCarousel(){
  $('#course_admin').owlCarousel({
    loop:true,
    margin:10,
    // nav:true,
   
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
  })
}
  ngOnInit() {
    this.GetListCourse();
    this.GetListUser();
  }

}
