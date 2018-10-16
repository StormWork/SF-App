import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SharefairApiService} from "../../../core/services/sharefair-api.service";

@Component({
  selector: 'sf-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  private parameterSubscription;

  private loggingIn: boolean;
  private instagramCode: string;

  constructor(private route: ActivatedRoute, private api: SharefairApiService) {
    this.loggingIn = false;
  }

  ngOnInit() {
    // Get the query parameters from the URL
    this.parameterSubscription = this.route.queryParams.subscribe((parameters) => {
      // Check for Instagram's code query parameter
      if(parameters.hasOwnProperty('code')){
        // Need to initiate login / account creation via API
        this.loggingIn = true;
        this.instagramCode = parameters.code;

        this.doInstagramLogin();
      }
    });
  }

  public linkInstagram(): void{
    // TODO: Store instagram URL data in configuration file
    const urlTarget = 'https://www.instagram.com/oauth/authorize/?client_id=ef4da188a68b4fa2af9818614d8fc1d9&redirect_uri=http://localhost:4200/signup&response_type=code';

    window.location.href = urlTarget;
  }

  public doInstagramLogin(): void{

    this.api.getAPIRequest('user/new', {code: this.instagramCode});

  }

}
