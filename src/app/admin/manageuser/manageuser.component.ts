import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../service/course.service';
import { User } from '../../Model/user';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import $ from 'jquery';
import { UserService } from '../../service/user.service';
declare var $: any;
declare var swal: any;
@Component({
  selector: 'app-manageuser',
  templateUrl: './manageuser.component.html',
  styleUrls: ['./manageuser.component.css']
})
export class ManageuserComponent implements OnInit {
  public listUser: User[] = [];
  p: number = 1;
  public formAddUser: FormGroup;
  public formEditUser: FormGroup;
  public TaiKhoan: FormControl;
  public MatKhau: FormControl;
  public Email: FormControl;
  public HoTen: FormControl;
  public SoDT: FormControl;
  public user: User = new User();
  public MaLoaiNguoiDung: FormControl;
  constructor(private userSV:UserService) { }
  GetListUser() {
    this.userSV.getListUser().subscribe(
      (result) => {

        for (let i in result) {
          if (result[i].TaiKhoan != "" && result[i].MatKhau != "" && result[i].TaiKhoan != null && result[i].MatKhau != null) {
            this.listUser.push(result[i]);
            console.log(this.listUser);
          }
        }
      }
    )
  }

  createFormAddUser() {
    this.formAddUser = new FormGroup({
      TaiKhoan: new FormControl(),
      MatKhau: new FormControl(),
      Email: new FormControl(),
      HoTen: new FormControl(),
      SoDT: new FormControl(),
      MaLoaiNguoiDung: new FormControl()
    })
  }
  validateFormAddUser() {
    this.TaiKhoan = new FormControl('', [Validators.required]);
    this.MatKhau = new FormControl('', [Validators.required]);
    this.Email = new FormControl('', [Validators.required]);
    this.HoTen = new FormControl('', [Validators.required]);
    this.SoDT = new FormControl('', [Validators.required]);
    this.MaLoaiNguoiDung = new FormControl('', [Validators.required]);
  }
  createFormEditUser() {
    this.formEditUser = new FormGroup({
      TaiKhoan: new FormControl(),
      MatKhau: new FormControl(),
      Email: new FormControl(),
      HoTen: new FormControl(),
      SoDT: new FormControl(),
      MaLoaiNguoiDung: new FormControl()
    })
  }
  //add user
  addUser() {
    console.log(this.formAddUser.value);
    // this.user.TaiKhoan = this.formAddUser.value.TaiKhoan;
    // this.user.MatKhau = this.formAddUser.value.MatKhau;
    // this.user.Email = this.formAddUser.value.Email;
    // this.user.HoTen = this.formAddUser.value.HoTen;
    // this.user.SoDT = this.formAddUser.value.SoDT;
    // this.user.MaLoaiNguoDung = this.formAddUser.value.MaLoaiNguoiDung;
    // if (this.formAddUser.value.MaLoaiNguoDung === "HV ") {
    //   this.user.TenLoaiNguoiDung = "Học Viên";
    // }
    // else if (this.formAddUser.value.MaLoaiNguoDung === "GV") {
    //   this.user.TenLoaiNguoiDung = "Giáo Vụ";
    // }
    console.log(this.user);
    for (let i in this.listUser) {
      if (this.listUser[i].TaiKhoan === this.formAddUser.value.TaiKhoan) {
        alert("Account readly exist!");
      }
      else{
        this.userSV.addUser(this.formAddUser.value).subscribe(
          (result) => {
            this.listUser.push(result);
            console.log(result);
            console.log(this.user);
            swal({
              type: 'success',
              title: 'Add User successfully',
              showConfirmButton: false,
              timer: 1500
            })
            
            window.location.reload();
          },
          (error) => {
            console.log(error);
          }
        )
      }
    }
    this.formAddUser.reset();

  }

  edit(val) {
    let account = val.getAttribute('data-account');
    let pass = val.getAttribute('data-pass');
    let email = val.getAttribute('data-email');
    let name = val.getAttribute('data-name');
    let phone = val.getAttribute('data-phone');
    let nameUser = val.getAttribute('data-nameUser');
    this.formEditUser.setValue({
      TaiKhoan: account,
      MatKhau: pass,
      Email: email,
      HoTen: name,
      SoDT: phone,
      MaLoaiNguoiDung: nameUser
    })
  }
  editUser() {
    console.log(this.formEditUser.value);
    this.userSV.editUser(this.formEditUser.value).subscribe(
      (result) => {
        console.log(result);
        swal({
          type: 'success',
          title: 'add user successfully',
          showConfirmButton: false,
          timer: 1500
        })
      
        window.location.reload();
      },
      (error) => {
        console.log(error);
      }

    )

  }
  DELETE(val){
    console.log(val);
    this.userSV.deleteUser(val).subscribe(
      (result) => {
        console.log(result);
        for(let index in this.listUser){
          if(this.listUser[index].TaiKhoan === val){
            this.listUser.splice(parseInt(index),1);
          }
        }
        swal({
          type: 'success',
          title: 'delete user successfully',
          showConfirmButton: false,
          timer: 1500
        })
      },
      (error) => {
        console.log(error);
      }
    )
  }
  ngOnInit() {
    this.GetListUser();
    this.createFormAddUser();
    this.validateFormAddUser();
    this.createFormEditUser();
    this.addUser();
    this.editUser();
  }

}
