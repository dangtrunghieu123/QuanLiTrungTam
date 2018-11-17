import { Component, OnInit } from '@angular/core';
import * as  particlesJS from 'particles.js';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../../Model/user';
import { CourseService } from '../../service/course.service';
import { Router } from '@angular/router';
import { UserService } from '../../service/user.service';
declare var particlesJS: any;
@Component({
  selector: 'app-loginadmin',
  templateUrl: './loginadmin.component.html',
  styleUrls: ['./loginadmin.component.css']
})
export class LoginadminComponent implements OnInit {
  public formLogin: FormGroup;
  public TaiKhoan: FormControl;
  public MatKhau: FormControl;
  public listTeacher: User[] = [];
  constructor(private userSV:UserService,private router: Router) { }

  createFormLogin() {
    this.formLogin = new FormGroup({
      TaiKhoan: new FormControl(),
      MatKhau: new FormControl()
    })
  }
  validateFormLogin() {
    this.TaiKhoan = new FormControl('', [Validators.required]);
    this.MatKhau = new FormControl('', [Validators.required,Validators.minLength(5), Validators.maxLength(20)]);
  }

  background() {

    particlesJS('particles-js',

      {
        "particles": {
          "number": {
            "value": 10,
            "density": {
              "enable": true,
              "value_area": 800
            }
          },
          "color": {
            "value": "#FFFFFF"
          },
          "shape": {
            "type": "edge",
            "stroke": {
              "width": 0,
              "color": "#66FFCC"
            },
            "polygon": {
              "nb_sides": 5
            },
            "image": {
              "src": "img/github.svg",
              "width": 100,
              "height": 100
            }
          },
          "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
              "enable": false,
              "speed": 1,
              "opacity_min": 0.1,
              "sync": false
            }
          },
          "size": {
            "value": 200,
            "random": true,
            "anim": {
              "enable": false,
              "speed": 40,
              "size_min": 0.1,
              "sync": false
            }
          },
          "line_linked": {
            "enable": false,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
          },
          "move": {
            "enable": true,
            "speed": 6,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "attract": {
              "enable": false,
              "rotateX": 600,
              "rotateY": 1200
            }
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": false,
              "mode": "repulse"
            },
            "onclick": {
              "enable": false,
              "mode": "push"
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 400,
              "line_linked": {
                "opacity": 1
              }
            },
            "bubble": {
              "distance": 400,
              "size": 40,
              "duration": 2,
              "opacity": 8,
              "speed": 3
            },
            "repulse": {
              "distance": 200
            },
            "push": {
              "particles_nb": 4
            },
            "remove": {
              "particles_nb": 2
            }
          }
        },
        "retina_detect": true,
        "config_demo": {
          "hide_card": false,
          "background_color": "#27a060",
          "background_image": "",
          "background_position": "50% 50%",
          "background_repeat": "no-repeat",
          "background_size": "cover"
        }
      }

    );
  }

  GetListTeacher() {
    this.userSV.getListUser().subscribe(
      (result) => {
        // console.log(result);
        for (let i in result) {
          if (result[i].MaLoaiNguoiDung === "GV" && result[i].TaiKhoan != "" && result[i].MatKhau != null && result[i].MatKhau != "") {
            this.listTeacher.push(result[i]);

          }
        }
        console.log(this.listTeacher);
      },
      (error) => {
        console.log(error);
      }
    )
  }
  Login(){
   
    console.log(this.formLogin.value);
    for(let i in this.listTeacher){
      if((this.listTeacher[i].TaiKhoan === this.formLogin.value.TaiKhoan) && (this.listTeacher[i].MatKhau === this.formLogin.value.MatKhau) ){
        console.log("thu lam dung roi");
        localStorage.setItem("userAdmin",JSON.stringify(this.formLogin.value));
        this.router.navigate(['/admin/dashboard']);
      }
      else{
        // alert("please! check again your Account or PassWord");
       console.log("thu oc cho");
      }
    }
  }
  ngOnInit() {
    this.background();
    this.createFormLogin();
    this.validateFormLogin();
    this.GetListTeacher();
  }


}
