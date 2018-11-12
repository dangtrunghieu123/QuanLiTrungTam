import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomelayoutComponent } from '../home/homelayout/homelayout.component';
import { LoginComponent } from '../home/login/login.component';
import { AdminlayoutComponent } from '../admin/adminlayout/adminlayout.component';
import { DetailcourseComponent } from '../home/detailcourse/detailcourse.component';
import { LoginadminComponent } from '../admin/loginadmin/loginadmin.component';
import { ManagecourseComponent } from '../admin/managecourse/managecourse.component';
import { ManageuserComponent } from '../admin/manageuser/manageuser.component';
import { EnrollComponent } from '../admin/enroll/enroll.component';
import { DashboardComponent } from '../admin/dashboard/dashboard.component';
import { DashadminComponent } from '../admin/dashadmin/dashadmin.component';
import { DetailuserComponent } from '../home/detailuser/detailuser.component';
import { GuardService } from '../service/guard.service';
const routes: Routes = [
  {
    path: '', component: HomelayoutComponent, children: [
      { path: 'login', component: LoginComponent }
    ]
  },
  { path: 'detailUser/:idUser', component: DetailuserComponent },
  { path: 'detail/:idCourse', component: DetailcourseComponent },
  {
    path: 'admin', component: AdminlayoutComponent, children: [
      {
        // path: 'dashboard', canActivate:[GuardService],component: DashboardComponent, children: [
        path: 'dashboard',component: DashboardComponent, children: [
          { path: '', component: DashadminComponent },
          { path: 'course', component: ManagecourseComponent },
          { path: 'user', component: ManageuserComponent },
          { path: 'enroll', component: EnrollComponent }
        ]
      },
      { path: '', component: LoginadminComponent }
    ]
  }
]
@NgModule({
  imports: [
    CommonModule, RouterModule,
    RouterModule.forRoot(routes)
  ],

  declarations: []
})
export class AppRoutingModule { }
