import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {InitialLoadGuard} from "./core/guards/initial-load.guard";

const routes: Routes = [
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
