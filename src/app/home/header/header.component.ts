import { Component, OnInit } from '@angular/core';
import $ from 'jquery';
declare var $:any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  fixedTop() {
    $(window).on('scroll',function(){
      if($(window).scrollTop()){
        $('.navHeader').addClass('fixedTop');
      }
      else{
        $('.navHeader').removeClass('fixedTop');
      }
    })
  }
  ngOnInit() {
    this.fixedTop();
  }

}
