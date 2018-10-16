import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SplashRoutingModule} from './splash.routes.module';
import {SplashComponent} from "./pages/splash.component";
import {MatProgressSpinnerModule} from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    SplashRoutingModule,
    MatProgressSpinnerModule
  ],
  declarations: [
    SplashComponent
  ]
})
export class SplashModule { }
