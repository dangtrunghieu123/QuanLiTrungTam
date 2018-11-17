import { Component, OnInit } from '@angular/core';
import $ from 'jquery';
import { CourseService } from '../../service/course.service';
import { Course } from '../../model/course';
declare var $:any;
@Component({
  selector: 'app-listpromotion',
  templateUrl: './listpromotion.component.html',
  styleUrls: ['./listpromotion.component.css']
})
export class ListpromotionComponent implements OnInit {
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
    $('#course_Pa').owlCarousel({
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
  }

}
