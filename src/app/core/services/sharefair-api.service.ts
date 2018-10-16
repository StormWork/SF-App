import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Subscription } from 'rxjs/index';

@Injectable({
  providedIn: 'root'
})
export class SharefairApiService {

  constructor(private http: HttpClient) {

  }

  public getAPIRequest(call: string, parameters: object): Subscription{

    if(typeof parameters !== 'undefined'){
      let apiParameters = new HttpParams();

      for(const key in parameters){
        if(parameters.hasOwnProperty(key)) {
          apiParameters = apiParameters.set(key.toString(), parameters[key].toString());
        }
      }

      return this.http.get('http://localhost:8000/' + call, {params: apiParameters});
    }

    return this.http.get('http://localhost:8000/' + call);
  }
}
