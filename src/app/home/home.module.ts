import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomelayoutComponent } from './homelayout/homelayout.component';
import { HeaderComponent } from './header/header.component';
import { SliderComponent } from './slider/slider.component';
import { FooterComponent } from './footer/footer.component';
import { CourseComponent } from './course/course.component';
import { ListcourseComponent } from './listcourse/listcourse.component';
import { PromotionComponent } from './promotion/promotion.component';
import { ListpromotionComponent } from './listpromotion/listpromotion.component';
import { BlogComponent } from './blog/blog.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatRadioModule,
  MatSelectModule,
  MatOptionModule,
  MatSlideToggleModule
} from '@angular/material';
import { LoginComponent } from './login/login.component';
import { DetailcourseComponent } from './detailcourse/detailcourse.component';
import { DetailuserComponent } from './detailuser/detailuser.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSelectModule,
    MatOptionModule,
    MatSlideToggleModule
  ],
  exports: [HomelayoutComponent, HeaderComponent, SliderComponent, FooterComponent, CourseComponent, ListcourseComponent, PromotionComponent, ListpromotionComponent, BlogComponent, LoginComponent, DetailcourseComponent, DetailuserComponent],
  declarations: [HomelayoutComponent, HeaderComponent, SliderComponent, FooterComponent, CourseComponent, ListcourseComponent, PromotionComponent, ListpromotionComponent, BlogComponent, LoginComponent, DetailcourseComponent, DetailuserComponent]
})
export class HomeModule { }
