import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Course } from '../../model/course';
import { User } from '../../Model/user';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-detailuser',
  templateUrl: './detailuser.component.html',
  styleUrls: ['./detailuser.component.css']
})
export class DetailuserComponent implements OnInit, AfterViewInit {
  public listUser: User[] = [];
  public IDUser: string;
  public DetailUser: any;
  public status: boolean = true;
  public listCourse: Course[] = [];
  constructor(private activate: ActivatedRoute, private userSV: UserService) { }
  GetListUser() {
    this.activate.params.subscribe(
      (R_detail) => {
        this.IDUser = R_detail.idUser;
        console.log(this.IDUser);
        this.userSV.getInforUser(this.IDUser).subscribe(
          (result) => {
            console.log(result);
            for (let i in result) {
              this.DetailUser = result[0];
            }
            console.log(this.DetailUser.HoTen);
          },
          (error) => {
            console.log(error);
          }
        )
        // this.userSV.getInfoCourse(this.IDUser).subscribe(
        //   (C_result) => {
        //     console.log(C_result);
        //     if(this.status = false){
        //       alert(C_result);
        //     }

        //   },
        //   (C_error) => {
        //     console.log(C_error);

        //   }
        // )


      },
      (E_detail) => {
        console.log(E_detail);
      }
    )

  }

  show() {
    this.status = true;
  }
  hide() {
    this.status = false;
  }
  ngOnInit() {
    this.GetListUser();
  }

  ngAfterViewInit() {

  }
}
