import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { urls } from '../http';
import { Advert } from '../entities/card';

@Injectable({
  providedIn: 'root',
})
export class AdvertService {

  constructor(private _http: HttpClient) {

  }

  getAllAdvert() {
    return this._http.get(urls.courseUrl + "/advert/", {
      headers: new HttpHeaders({
        //'Authorization': "Bearer " + localStorage.getItem("token")
      }),
    })
  }

  createNewAdvert(advert: any): Observable<Advert> {
    return this._http.post<Advert>(urls.courseUrl + '/Advert/', advert, {
      headers: new HttpHeaders({

      }),
    })
  }

  getUserAdvert(userid: string): Observable<Advert> {
    return this._http.get<Advert>(urls.courseUrl + `/advert/user?id=${userid}`, {
      headers: new HttpHeaders({
        //'Authorization': "Bearer " + localStorage.getItem("token")
      }),
    })
  }
}
