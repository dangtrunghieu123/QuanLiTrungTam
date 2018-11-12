import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { CourseService } from '../../service/course.service';
import { Course } from '../../Model/course';
import { RightToLeftAnimation } from '../../animation/righttoleft.animation';
import { NgForm } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import $ from 'jquery';
import { Window } from 'selenium-webdriver';
declare var $: any;
declare var swal: any;
@Component({
  selector: 'app-managecourse',
  templateUrl: './managecourse.component.html',
  styleUrls: ['./managecourse.component.css'],
  //   animations: [RightToLeftAnimation],
  // host: { '[@RightToLeftAnimation]': '' }
})
export class ManagecourseComponent implements OnInit {
  public listCourse: Course[] = [];
  // @ViewChild('formDangKy') formDK:NgForm;
  public listAuthor: any = [];
  public formAddCourse: FormGroup;
  public formEditCourse:FormGroup;
  public MaKhoaHoc: FormControl;
  public TenKhoaHoc: FormControl;
  public HinhAnh: FormControl;
  public LuotXem: FormControl;
  public MoTa: FormControl;
  public NguoiTao: FormControl;
  public titleAddCourse:string="";
  p:number=1;
  @ViewChild('add') tref;;
  constructor(private courseSV: CourseService, private render2:Renderer2) { }
  GetListCourse() {
    this.courseSV.getListCourse().subscribe(
      (result) => {
        console.log(result);
        for (let i in result) {
          if (result[i].HinhAnh != null && result[i].MaKhoaHoc != "") {
            this.listCourse.push(result[i]);
          }
        }
      },
      (error) => {
        console.log(error);

      }
    )
  }

  // GetListAuthor(){
  //   this.courseSV.getListUser().subscribe(
  //     (result) => {
  //       for(let i in result){
  //         if(result[i].MaLoaiNguoiDung === "GV"){
  //           this.listAuthor.push(result[i]);
  //         }
  //       }
  //       console.log(this.listAuthor);
  //     },
  //     (error) => {
  //       console.log(error);
  //     }
  //   )
  // }
  createeFormAddCourse() {
    this.formAddCourse = new FormGroup({
      MaKhoaHoc: new FormControl(),
      TenKhoaHoc: new FormControl(),
      HinhAnh: new FormControl(),
      LuotXem: new FormControl(),
      MoTa: new FormControl(),
      NguoiTao: new FormControl()
    })
  }
  createeFormEditCourse() {
    this.formEditCourse = new FormGroup({
      MaKhoaHoc: new FormControl(),
      TenKhoaHoc: new FormControl(),
      HinhAnh: new FormControl(),
      LuotXem: new FormControl(),
      MoTa: new FormControl(),
      NguoiTao: new FormControl()
    })
  }
  validateFormAddCourse() {
    this.MaKhoaHoc = new FormControl(" ", [Validators.required]),
      this.TenKhoaHoc = new FormControl(" ", [Validators.required]),
      this.MaKhoaHoc = new FormControl(" ", [Validators.required]),
      this.HinhAnh = new FormControl(" ", [Validators.required]),
      this.LuotXem = new FormControl(" ", [Validators.required]),
      this.MoTa = new FormControl(" ", [Validators.required]),
      this.NguoiTao = new FormControl(" ", [Validators.required])
  }
  addCourse() {
    console.log(this.formAddCourse.value);
    this.courseSV.getListCourse().subscribe(
      (R_Course) => {
        for (let i in R_Course) {
          if (R_Course[i].MaKhoaHoc === this.formAddCourse.value.MaKhoaHoc) {
            alert("CodeCourse really exist!");
          }
          else {
            this.courseSV.addCourse(this.formAddCourse.value).subscribe(
              (result) => {
                console.log(result);
                this.listCourse.push(this.formAddCourse.value);
                swal({
                  type: 'success',
                  title: 'Add course successfully',
                  showConfirmButton: false,
                  timer: 1500
                })
                this.formAddCourse.reset();
                // window.location.reload();
              },
              (error) => {
                console.log(error);
              }
            )
          }
        }
      }
    )
  }
  edit(val){
    let image = val.getAttribute('data-img');
    let Code = val.getAttribute('data-code');
    let Name = val.getAttribute('data-name');
    let View = val.getAttribute('data-view');
    let Describe = val.getAttribute('data-des');
    let Author = val.getAttribute('data-author');
    this.formEditCourse.setValue({
      HinhAnh: image,
      MaKhoaHoc: Code,
      TenKhoaHoc: Name,
      LuotXem: View,
      MoTa: Describe,
      NguoiTao:Author
    })
   
    
  }
  editCourse(){
    console.log(this.formEditCourse.value);
    this.courseSV.editCourse(this.formEditCourse.value).subscribe(
      (result) =>{
        console.log(result);
        swal({
          type: 'success',
          title: 'Edit course successfully',
          showConfirmButton: false,
          timer: 1500
        })
        window.location.reload();
      },
      (error) =>{
        console.log(error);
      }
    )
  }

  DELETE(value){
    this.courseSV.deleteCourse(value).subscribe(
      (result) => {
        console.log(result);

        for(let index in this.listCourse){
          if(this.listCourse[index].MaKhoaHoc === value){
            this.listCourse.splice(parseInt(index),1);
          }
        }
        swal({
          type: 'success',
          title: 'Delete course successfully',
          showConfirmButton: false,
          timer: 1500
        })
        // window.location.reload();
      },
      (error)=> {
        console.log(error);
      }
    )
  }

  ngOnInit() {
    this.GetListCourse();
    this.createeFormAddCourse();
    this.validateFormAddCourse();
    this.addCourse();
    // this.GetListAuthor();
    this.createeFormEditCourse();
    this.edit(this.listCourse);
    this.editCourse();
  }

}
