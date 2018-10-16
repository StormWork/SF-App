import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ShellRoutingModule} from './shell.routes.module';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {ShellComponent} from './shell.component';

@NgModule({
  imports: [
    CommonModule,
    ShellRoutingModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    ShellComponent
  ]
})
export class ShellModule { }
