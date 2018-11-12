import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-promotionitem',
  templateUrl: './promotionitem.component.html',
  styleUrls: ['./promotionitem.component.css']
})
export class PromotionitemComponent implements OnInit {
@Input() ItemCourse;
  constructor() { }

  ngOnInit() {
  }

}
