import { Component, OnInit, AfterViewInit } from '@angular/core';
import $ from 'jquery';
import { Router } from '@angular/router';
declare var $: any;
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, AfterViewInit {
  public nameTeacher: any;
  constructor(private router: Router) { }
  Active() {
    $('.act').click(function () {
      $('.act').removeClass("active");
      $(this).addClass("active");
    })
    // $('li').each(function () {
    //   $(this).active(function () {
    //     $(this).addClass("active");
    //   },
    //     function () {
    //       $(this).removeClass("active")
    //     })
    // })


  }
  getName() {
    this.nameTeacher = JSON.parse(localStorage.getItem("userAdmin"));
    console.log(this.nameTeacher);
  }
  singout() {
    alert("thu ngu qua");
    localStorage.removeItem("userAdmin");
    this.router.navigate(['/admin']);
  }
  ngOnInit() {
    this.Active();
    this.getName();
  }
  ngAfterViewInit() {

  }
}
