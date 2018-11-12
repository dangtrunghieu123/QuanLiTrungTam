import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomelayoutComponent } from './homelayout/homelayout.component';
import { Header1Component } from './header1/header1.component';
import { SliderComponent } from './slider/slider.component';
import { ListcourseComponent } from './listcourse/listcourse.component';
import { ListpromotionComponent } from './listpromotion/listpromotion.component';
import { CourseitemComponent } from './courseitem/courseitem.component';
import { PromotionitemComponent } from './promotionitem/promotionitem.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';

import { RouterModule } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ReactiveFormsModule ,FormsModule} from '@angular/forms';

import { DetailcourseComponent } from './detailcourse/detailcourse.component';
import { ShareModule } from '../share/share.module';
import { DetailuserComponent } from './detailuser/detailuser.component';
@NgModule({
  imports: [
    CommonModule,ShareModule,RouterModule,BrowserAnimationsModule,ReactiveFormsModule,FormsModule
  ],
  exports:[HomelayoutComponent, Header1Component, SliderComponent, ListcourseComponent, ListpromotionComponent, CourseitemComponent, PromotionitemComponent, FooterComponent, LoginComponent,  DetailcourseComponent, DetailuserComponent],
  declarations: [HomelayoutComponent, Header1Component, SliderComponent, ListcourseComponent, ListpromotionComponent, CourseitemComponent, PromotionitemComponent, FooterComponent, LoginComponent, DetailcourseComponent, DetailuserComponent]
})
export class HomeModule { }
