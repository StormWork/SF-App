import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ShellComponent} from '../shell/shell.component';
import {HomepageComponent} from './homepage/homepage.component';
import {InitialLoadGuard} from '../../core/guards/initial-load.guard';
import {AboutUsComponent} from './aboutus/aboutus.component';
import {SignupComponent} from './signup/signup.component';
import {ProfileComponent} from './profile/profile.component';

const child_routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'about', component: AboutUsComponent},
  {path: 'u/:id', component: ProfileComponent},
  {path: 'u', redirectTo: 'u/me', pathMatch: 'full'},
  {path: '**', redirectTo: ''}
];

const routes: Routes = [
  {path: '', component: ShellComponent, canActivate: [InitialLoadGuard], children: child_routes, data: {reuse: true}},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class HomeRoutingModule {}
