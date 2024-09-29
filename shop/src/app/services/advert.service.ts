import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { urls } from '../http';

@Injectable({
  providedIn: 'root'
})
export class AdvertService {

  constructor(private _http: HttpClient) {
    
  }

  getAllAdvert() {
    return this._http.get(urls.apiUrl + "/advert/", {
      headers: new HttpHeaders({
        //'Authorization': "Bearer " + localStorage.getItem("token")
      }),
    })
  }
}
