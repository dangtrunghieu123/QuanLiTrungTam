import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../Model/user';
import { Course } from '../Model/course';
// import { Headers } from '@angular/http';
@Injectable({
  providedIn: 'root'
})
export class CourseService {
  public user: User;
  public course: Course;
  constructor(private http: HttpClient) { }
  //user

  Login(user) {
    let urlLogin = `http://sv.myclass.vn/api/QuanLyTrungTam/DangNhap?taikhoan=${user.TaiKhoan}&matkhau=${user.MatKhau}`;
    let Observe = this.http.get(urlLogin, user);
    return Observe;
  }
  getListUser() {
    let urlListUser = `http://sv.myclass.vn/api/QuanLyTrungTam/DanhSachNguoiDung`;
    let Observe = this.http.get(urlListUser);
    return Observe;
  }

  Register(user) {
    let urlReg = `http://sv.myclass.vn/api/QuanLyTrungTam/DangKy`;
    // let header = new Headers();
    // header.append('Content-Type','application/json;charset=utf-8');
    let Observe = this.http.post(urlReg, user);
    return Observe;
  }
  getInforUser(ID): Observable<any> {
    let urlIforUser = `http://sv.myclass.vn/api/QuanLyTrungTam/ThongTinNguoiDung?taikhoan=${ID}`;
    let Observe = this.http.get(urlIforUser);
    return Observe;
  }

  addUser(user): Observable<any> {
    let urlAddUser = `http://sv.myclass.vn/api/QuanLyTrungTam/ThemNguoiDung`;
    let Observe = this.http.post(urlAddUser, user);
    return Observe;
  }
  editUser(user: User): Observable<any> {
    let urlEditUser = `http://sv.myclass.vn/api/QuanLyTrungTam/CapNhatThongTinNguoiDung`;
    let Observe = this.http.put(urlEditUser,user);
    return Observe;
  }
  deleteUser(id){
    let urlEditUser = `http://sv.myclass.vn/api/QuanLyTrungTam/XoaNguoiDung/${id}`;
    let Observe = this.http.delete(urlEditUser);
    return Observe;
    
  }
  //course
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
