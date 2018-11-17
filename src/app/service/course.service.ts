import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from '../model/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  public course: Course;
  constructor(private http:HttpClient) { }
 
  getInfoCourse(ID) {
    let urlInfoCourse = `http://sv.myclass.vn/api/QuanLyTrungTam/LayThongtinKhoaHoc?taikhoan=${ID}`;
    let Observe = this.http.get(urlInfoCourse);
    return Observe;
  }

  EnrollCourse(CodeCourse, Account) {
    let urlEnroll = `http://sv.myclass.vn/api/QuanLyTrungTam/GhiDanhKhoaHoc`;
    // let header = new HttpHeaders();
    // header.append('Content-Type','application/json;charset=UTF-8');
    // let data = {
    //   MaKhoaHoc: CodeCourse,
    //   TaiKhoan: Account
    // }
    // let DT = JSON.stringify(data);
    let headers = new HttpHeaders().set(CodeCourse, Account);
    let Observe = this.http.post(urlEnroll, {headers});
    return Observe;
  }

  getListCourse(): Observable<any> {
    let urlListCourse = `http://sv.myclass.vn/api/QuanLyTrungTam/DanhSachKhoaHoc`;
    let Observe = this.http.get(urlListCourse);
    return Observe;
  }
  getDetailCourse(id): Observable<any> {
    let urlDetailCourse = ` http://sv.myclass.vn/api/QuanLyTrungTam/ChiTietKhoaHoc/${id}`;
    let Observe = this.http.get(urlDetailCourse);
    return Observe;
  }

  addCourse(course): Observable<any> {
    let urlAddCourse = `http://sv.myclass.vn/api/QuanLyTrungTam/ThemKhoaHoc`;
    let Observe = this.http.post(urlAddCourse, course);
    return Observe;
  }
  deleteCourse(id) {
    let urlDeleteCourse = ` http://sv.myclass.vn/api/QuanLyTrungTam/XoaKhoaHoc/${id}`;
    let Observe = this.http.delete(urlDeleteCourse);
    return Observe;
  }
  editCourse(course: Course): Observable<any> {
    let urlEditCourse = ` http://sv.myclass.vn/api/QuanLyTrungTam/CapNhatKhoaHoc`;
    let Observe = this.http.put(urlEditCourse, course);
    return Observe;
  }
}
