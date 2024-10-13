import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { urls } from '../http';
import { Advert } from '../entities/card';

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

  createNewAdvert(advert: Advert): Observable<Advert> {
    return this._http.post(urls.apiUrl + '/advert/create', advert, {
      headers: new HttpHeaders({
        //'Authorization': "Bearer " + localStorage.getItem("token")
      }),
    })
  }

  getUserAdvert(userid: string): Observable<Advert> {
    return this._http.get(urls.apiUrl + `/advert/user?id=${userid}`, {
      headers: new HttpHeaders({
        //'Authorization': "Bearer " + localStorage.getItem("token")
      }),
    })
  }
}
