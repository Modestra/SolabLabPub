import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { urls } from '../http';
import { Category } from '../entities/card';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private _http: HttpClient) { }

  getHeadCategories(): Observable<Category[]> {
    return this._http.get<Category[]>(urls.apiUrl + "/categories/", {
      headers: new HttpHeaders({
        //'Authorization': "Bearer " + localStorage.getItem("token")
      }),
    })
  }

  getChildCategories(id: string): Observable<any> {
    return this._http.get(urls.apiUrl + `/categories/?id=${id}`, {
      headers: new HttpHeaders({
        //'Authorization': "Bearer " + localStorage.getItem("token")
      }),
    })
  }
}
