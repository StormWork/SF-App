import { Component, OnInit } from '@angular/core';
import {SharefairApiService} from '../../../core/services/sharefair-api.service';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs/index';
import {ProfileResponse} from "./models/ProfileResponse";

@Component({
  selector: 'sf-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  private paramsSubscription: Subscription;
  private profileSubscription: Subscription;

  private response: ProfileResponse;

  constructor(private api: SharefairApiService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.paramsSubscription = this.route.params.subscribe((params) => {
      if(params.hasOwnProperty('id')){
        this.loadProfile(params['id']);
      }
    });
  }

  private loadProfile(id: string): void {

    this.profileSubscription = this.api.getAPIRequest('user/profile', {user: id}).subscribe(
      (response: Response) => {

        this.response = (<ProfileResponse> response);

      }
    );

  }

}
