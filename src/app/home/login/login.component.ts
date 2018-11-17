import { Component, OnInit, AfterViewInit } from '@angular/core';
import { slideToLeftAnimation } from '../../animation/slide-to-left.animation';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../../Model/user';
import { UserService } from '../../service/user.service';
import { Router } from '@angular/router';
import $ from 'jquery';
declare var $:any;
declare var swal:any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [slideToLeftAnimation],
  host: { '[@slideToLeftAnimation]': '' }
})
export class LoginComponent implements OnInit,AfterViewInit {
  public formLogin: FormGroup;
  public formReg: FormGroup;
  public TaiKhoan: FormControl;
  public MatKhau: FormControl;
  public HoTen: FormControl;
  public Email: FormControl;
  public SoDT: FormControl;
  public status: boolean = true;
  public listUser: User[] = [];
  public user: User = new User();
  public a: string = "";
  constructor(private userLogin:UserService,private router:Router) { }

  public CreateFormLogin() {
    this.formLogin = new FormGroup({
      TaiKhoan: new FormControl(),
      MatKhau: new FormControl()
    })
  }

  public CreateValiateFormLogin() {
    this.TaiKhoan = new FormControl(" ", [Validators.required]),
      this.MatKhau = new FormControl(" ", [Validators.required, Validators.minLength(5), Validators.maxLength(20)])
  }

  public CreateFormReg() {
    this.formReg = new FormGroup({
      TaiKhoan: new FormControl(),
      MatKhau: new FormControl(),
      HoTen: new FormControl(),
      Email: new FormControl(),
      SoDT: new FormControl()
    })
  }
  
  public CreateValiateFormRegistration() {
    {
      this.TaiKhoan = new FormControl(" ", [Validators.required]),
        this.MatKhau = new FormControl(" ", [Validators.required, Validators.minLength(5), Validators.maxLength(20)]),
        this.HoTen = new FormControl(" ", [Validators.required]),
        this.Email = new FormControl(" ", [Validators.required, Validators.pattern('^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$')]),
        this.SoDT = new FormControl(" ", [Validators.required])
    }
  }

  show() {
    this.status = true;
  }
  hide() {
    this.status = false;
  }

  LoginSubmit() {
    console.log(this.formLogin.value);
    this.userLogin.getListUser().subscribe(
      (result) => {
        for (let i in result) {
          if ((result[i].TaiKhoan === this.formLogin.value.TaiKhoan) && (result[i].MatKhau === this.formLogin.value.MatKhau) && result[i].MaLoaiNguoDung != "GV") {
            console.log("Thu gioi qua");
            console.log(result[i]);
            this.userLogin.Login(this.formLogin.value).subscribe(
              (ResultLogin) => {
                console.log("login successfully");
                swal({
                  type: 'success',
                  title: 'Login successfully',
                  showConfirmButton: false,
                  timer: 1500
                })
                localStorage.setItem("user", JSON.stringify(this.formLogin.value));
                this.router.navigate(['/']);
              },
              (error) => {
                console.log(error);
              }
            )
          }
          else {
            console.log("thu oc cho");
          }
        }
      },
      (error) => {
        console.log(error);
      }
    )

  }

  RegistrationSubmit() {
    console.log(this.formReg.value);
    this.user.TaiKhoan = this.formReg.value.TaiKhoan;
    this.user.MatKhau = this.formReg.value.MatKhau;
    this.user.Email = this.formReg.value.Email;
    this.user.HoTen = this.formReg.value.HoTen;
    this.user.SoDT = this.formReg.value.SoDT;
    this.user.MaLoaiNguoDung = "HV";
    // this.user.TenLoaiNguoiDung = "Học Viên";
    console.log(this.user);
    // for (let i in this.listUser) {
    //   console.log(this.listUser[i].TaiKhoan);
    //   console.log(typeof this.listUser[i].TaiKhoan);
    //   console.log(typeof this.formReg.value.TaiKhoan);
    //   if (this.formReg.value.TaiKhoan === this.listUser[i].TaiKhoan) {
    //     console.log(this.listUser[i].TaiKhoan);
    //     console.log(this.user.TaiKhoan);
    //     let a = this.listUser[i].TaiKhoan
    //     return a;
    //     // alert('this account really is exist!');
    //     console.log("ahuhu trung roi" + a);
    //   }
    //   else {
    //     console.log("sai roi ")
    //   }
    // }

    this.userLogin.getListUser().subscribe(
      (resultReg) => {
        for (let i in resultReg) {
          if (resultReg[i].TaiKhoan === this.user.TaiKhoan) {
            console.log(resultReg[i].TaiKhoan);
            alert("this account really is exist!");
          }
          else {
            console.log("ljdsljlj");
            this.formReg.reset();
            // this.router.navigate(['/']);
           
            // this.userLogin.Register(this.user).subscribe(
            //   (result) => {
            //     console.log(result);
            //     swal({
            //       type: 'success',
            //       title: 'Registration successfully',
            //       showConfirmButton: false,
            //       timer: 1500
            //     })
            //     this.router.navigate(['/']);
            //   },
            //   (error) => {
            //     console.log(error);
            //   }
            // )
            // setTimeout(this.register(), 5000);
          }
          // setTimeout(this.register(),100);
          // this.register();
        }
        // this.register();
      }
    )
    this.formReg.reset();
  }

  register() {
    this.userLogin.Register(this.user).subscribe(
      (result) => {
        console.log(result);
        swal({
          type: 'success',
          title: 'Registration successfully',
          showConfirmButton: false,
          timer: 1500
        })
        this.router.navigate(['/']);
      },
      (error) => {
        console.log(error);
      }
    )
  }


  ngOnInit() {
    this.CreateFormLogin();
    //this.LoginSubmit();
    this.CreateFormReg();
    this.CreateValiateFormRegistration();
    // this.RegistrationSubmit();
    // this.login(this.user);
    // this.GetListUser();
  }

  ngAfterViewInit(){
    this.RegistrationSubmit();
  }
}
