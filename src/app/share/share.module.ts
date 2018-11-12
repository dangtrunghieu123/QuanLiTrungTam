import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
@NgModule({
  imports: [
    CommonModule,RouterModule,BrowserAnimationsModule
  ],
  exports:[HeaderComponent],
  declarations: [HeaderComponent]
})
export class ShareModule { }
