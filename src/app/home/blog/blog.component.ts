import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
listBlog=[
  { src: '../../../assets/image/blog1.jpg' },
  { src: '../../../assets/image/blog2.jpg' },
  { src: '../../../assets/image/blog3.jpg' },
  { src: '../../../assets/image/blog4.jpg' }
]
  constructor() { }

  ngOnInit() {
  }

}
