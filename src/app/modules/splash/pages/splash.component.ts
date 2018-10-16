import { Component, OnInit } from '@angular/core';
import {AppControlService} from '../../../core/services/app-control.service';
import {Router} from '@angular/router';

@Component({
  selector: 'sf-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.scss']
})
export class SplashComponent implements OnInit {

  constructor(private control: AppControlService, private router: Router) { }

  ngOnInit() {
    // On splash load screen, set the initial load to false to disable InitialLoadGuard
    this.control.isInitialLoad = false;

    // Check we're not going to redirect to this page again, causing an endless loop.
    const redirectUrl = this.control.initialRedirectUrl === '/load' ? '/' : this.control.initialRedirectUrl;

    // For now, redirect after 0.5s TODO: Do any session checking etc here
    setTimeout(() => {
      this.control.navigateToUrl(this.control.initialRedirectUrl);
    }, 500);

  }

}
