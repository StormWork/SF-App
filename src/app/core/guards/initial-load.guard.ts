import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {AppControlService} from '../services/app-control.service';

@Injectable({
  providedIn: 'root'
})
export class InitialLoadGuard implements CanActivate {

  constructor(private router: Router, private control: AppControlService){

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    // Check this is the initial load of the application, if so we need to redirect to the splash loading screen
    if(this.control.isInitialLoad){
      // Save the location the user had planned on going
      this.control.initialRedirectUrl = typeof state.url === 'undefined' || state.url == null ? '/' : state.url;

      // Redirect the app to the load screen
      this.router.navigate(['load']);

      // Deny access to the original path
      return false;
    }

    // Return true if this isn't the initial load
    return true;
  }
}
