import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeRoutingModule} from './home.routes.module';
import {BrowserModule} from '@angular/platform-browser';
import {AboutUsComponent} from './aboutus/aboutus.component';
import {HomepageComponent} from './homepage/homepage.component';
import {SignupComponent} from './signup/signup.component';
import {MatProgressSpinnerModule} from '@angular/material';
import {ProfileComponent} from './profile/profile.component';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    HomeRoutingModule,
    MatProgressSpinnerModule
  ],
  declarations: [
    HomepageComponent,
    AboutUsComponent,
    SignupComponent,
    ProfileComponent
  ]
})
export class HomeModule { }
