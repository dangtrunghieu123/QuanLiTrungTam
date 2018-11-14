import { Component, OnInit, AfterViewInit } from '@angular/core';
import $ from 'jquery';
declare var $:any;

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit,AfterViewInit {
  listSlider = [
    {img:"http://cybersoft.edu.vn/wp-content/uploads/2018/06/fullstack.jpg"},
    {img:"https://cybersoft.edu.vn/wp-content/uploads/2017/09/TU-DUY-LAP-TRINH-NEW.jpg"},
    {img:"http://blog.myclass.vn/wp-content/uploads/2017/12/chuyen-gia-lap-trinh-front-end-1-1.jpg"},
    {img:"http://csc.edu.vn/data/images/tin-tuc/lap-trinh-csdl/lap-trinh-java-tu-nen-tang.jpg"},
    {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3fdP86XgrZCotGwtiv6qwA85bDPER2dcvDvhGh9XIDKUdnGFGHA"},
    {img:"https://aptech.vn/wp-content/uploads/2017/02/23.jpg"}
  ]
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    $('.owl-left').owlCarousel({
      loop:true,
      // margin:10,
      nav:false,
      autoplay:true,
      autoplayTimeout:3000,
      autoplayHoverPause:true,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:1
          },
          1000:{
              items:1
          }
      }
  })
  }

}
