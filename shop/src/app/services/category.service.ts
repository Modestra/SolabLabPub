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
    return this._http.get<Category[]>(urls.courseUrl + "/categories/", {
      headers: new HttpHeaders({
        //'Authorization': "Bearer " + localStorage.getItem("token")
      }),
    })
  }

  getChildCategories(id: string): Observable<Category> {
    return this._http.get<Category>(urls.courseUrl + `/categories/${id}`, {
      headers: new HttpHeaders({
        //'Authorization': "Bearer " + localStorage.getItem("token")
      }),
    })
  }
}
