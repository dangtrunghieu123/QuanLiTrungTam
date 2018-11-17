import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../Model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public user: User;
  constructor(private http:HttpClient) { }
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
}
