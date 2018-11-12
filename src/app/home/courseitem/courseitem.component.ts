import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-courseitem',
  templateUrl: './courseitem.component.html',
  styleUrls: ['./courseitem.component.css']
})
export class CourseitemComponent implements OnInit {
  @Input() itemCourse;
  public name:string;
  public status:boolean = false;
  constructor() { }
  showNameCourse(nameCourse:String){
    let Length = nameCourse.length;
    let StringName;
    if(Length > 30){
       StringName = nameCourse.substring(0,30) + "...";
    }
    else  StringName = nameCourse;
    return StringName;
  }
  showImage(img:string){
    if(this.itemCourse.HinhAnh != null){
      // let cropImg = img.substr(img.lastIndexOf("."));
      // if ((cropImg == ".jpg" || cropImg == ".png" || cropImg == ".jpeg")){
      //   this.status = true;
      // }
      this.status = true;
    }
  }
  ngOnInit() {
    this.name = this.showNameCourse(this.itemCourse.TenKhoaHoc);
    this.showImage(this.itemCourse.HinhAnh);
  }

}
