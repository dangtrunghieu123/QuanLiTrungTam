import { Component, OnInit } from '@angular/core';
import { Course } from '../../model/course';
import { CourseService } from '../../service/course.service';
import $ from 'jquery';
declare var $:any;
@Component({
  selector: 'app-listcourse',
  templateUrl: './listcourse.component.html',
  styleUrls: ['./listcourse.component.css']
})
export class ListcourseComponent implements OnInit {
  public list:Course[] = [];
  constructor(private courseSV:CourseService) { }
  GetListCourse(){
    this.courseSV.getListCourse().subscribe(
      (result) => {
        console.log(result);
        for(let i in result){
          if(result[i].HinhAnh != null && result[i].HinhAnh != ""){
            this.list.push(result[i]);
          }
        }
        setTimeout(()=>{
          this.showOwlCarousel();
        },100);
        console.log(this.list);
      }
    )
  }

  showOwlCarousel(){
    $('#course_P').owlCarousel({
      loop:true,
      margin:10,
      nav:true,
      // dots: true,
      // autoplay:true,
      // autoplayTimeout:3000,
      // autoplayHoverPause:true,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:1
          },
          1000:{
              items:2
          }
      }
    })
  }
  ngOnInit() {
    this.GetListCourse();
  }

}
