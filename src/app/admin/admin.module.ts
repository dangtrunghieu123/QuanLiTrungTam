import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdminlayoutComponent } from './adminlayout/adminlayout.component';
import { LoginadminComponent } from './loginadmin/loginadmin.component';
import { ManageuserComponent } from './manageuser/manageuser.component';
import { ManagecourseComponent } from './managecourse/managecourse.component';
import { EnrollComponent } from './enroll/enroll.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashadminComponent } from './dashadmin/dashadmin.component';
import {HomeModule} from '../home/home.module';
import {NgxPaginationModule} from 'ngx-pagination'; 
import { ReactiveFormsModule ,FormsModule} from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
     RouterModule,
     ReactiveFormsModule ,
     FormsModule,
     NgxPaginationModule,
     HomeModule
  ],
  exports: [
    AdminlayoutComponent,
    LoginadminComponent,
    ManageuserComponent,
    ManagecourseComponent,
    EnrollComponent,
    DashboardComponent,
    DashadminComponent
  ],
  declarations:
    [AdminlayoutComponent,
      LoginadminComponent,
      ManageuserComponent,
      ManagecourseComponent,
      EnrollComponent,
      DashboardComponent,
      DashadminComponent]
})
export class AdminModule { }
