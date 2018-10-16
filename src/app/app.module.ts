import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {SplashModule} from './modules/splash/splash.module';
import {CoreModule} from './core/core.module';
import {AppRoutingModule} from './app.routing.module';
import {HomeModule} from './modules/home/home.module';
import {ShellModule} from './modules/shell/shell.module';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CoreModule,
    BrowserModule,
    HttpClientModule,
    ShellModule,
    SplashModule,
    HomeModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
