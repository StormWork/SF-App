import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ShellComponent} from './shell.component';

const routes: Routes = [
  {path: 'shell', component: ShellComponent, data: {reuse: true}},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ShellRoutingModule {}
