import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../service/course.service';
import { Course } from '../../Model/course';
import $ from'jquery'
declare var $:any;
@Component({
  selector: 'app-listpromotion',
  templateUrl: './listpromotion.component.html',
  styleUrls: ['./listpromotion.component.css']
})
export class ListpromotionComponent implements OnInit {
  public list:Course[]=[];
  constructor(private CourseList:CourseService) { }
  getList(){
    this.CourseList.getListCourse().subscribe(
      (result) => {
        console.log(result);
        for(let i in result){
          if(result[i].HinhAnh != null && result[i].MaKhoaHoc !=""){
            this.list.push(result[i]);
            console.log(this.list);
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
    this.getList();
  }

}
