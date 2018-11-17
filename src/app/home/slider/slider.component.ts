import { Component, OnInit, AfterViewInit } from '@angular/core';
import $ from 'jquery';
declare var $: any;
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit, AfterViewInit {
  listSlider = [
    { src: '../../../assets/image/slider1.jpg' },
    { src: '../../../assets/image/slider4.jpg' },
    { src: '../../../assets/image/slider3.jpg' }
  ]
  constructor() { }
  showOwlCarousel() {
    $('#sliderImg').owlCarousel({
      loop: true,
      // margin:10,
      nav: false,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 1
        },
        1000: {
          items: 1
        }
      }
    })
  }
  ngOnInit() {

  }
  ngAfterViewInit() {
    this.showOwlCarousel();
  }

}
