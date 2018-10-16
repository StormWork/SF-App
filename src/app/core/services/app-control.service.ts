import { Injectable } from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AppControlService {

  private initialLoad: boolean;
  private initialRedirect: string;

  constructor(private router: Router) {
    this.initialLoad = true;
  }

  public get isInitialLoad(): boolean{
    return this.initialLoad;
  }

  public set isInitialLoad(bool: boolean){
    this.initialLoad = bool;
  }

  public get initialRedirectUrl(): string{
    return this.initialRedirect;
  }

  public set initialRedirectUrl(url: string){
    this.initialRedirect = url;
  }

  public navigateToUrl(url: string): void{
    // Below is an instagram redirect example, main reason for this code
    // signup?code=8a2771556c3e44ef98818bfcac8c8941

    // Regular expression to extract get parameters
    const pattern = /([^=?&;]+)\=([a-zA-Z0-9]+)/g;
    const result = url.match(pattern);

    // If no query parameters attached to redirect URL, we can do a simple redirect
    if(result == null || result.length === 0) {
      this.router.navigate([url]);
    }else{
      // As the URL has query parameters, we need to extract them and pass them to the navigate function in it's own object
      let parameters = {};

      // Get each query parameter and place it into the object
      result.forEach((entry) => {
        let parts = entry.split('=');
        parameters[parts[0]] = parts[1];
      });

      // Remove unnecessary parameters from the URL as these are now in the parameters.
      const urlParts = url.split('?');
      this.router.navigate([urlParts[0]], {queryParams: parameters});
    }
  }
}
