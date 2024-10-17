import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { urls } from '../http';
import { Advert, Search } from '../entities/card';

@Injectable({
  providedIn: 'root',
})
export class AdvertService {

  constructor(private _http: HttpClient) {

  }

  getAdverts(search: Search) {
    return new Promise((resolve, reject) => {
      this._http.post(urls.courseUrl + "/Advert/search", {
        headers: new HttpHeaders({
          //'Authorization': "Bearer " + localStorage.getItem("token")
        }),
      }).subscribe({
        next: (resp) => {
          if ((resp as []).length === 0) {
            //Нельзя получить объявления пользователя. Загружаем с локального сервера
            this.getLocalAdverts().subscribe((resp) => {
              reject(resp)
            })
          }
          resolve(resp)
        },
        error: () => {

        }
      })
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

  getAdvertById(id: string): Observable<any> {
    return this._http.get<any>(urls.courseUrl + `/Advert/${id}`)
  }

  //---------------------------
  // Локальные сервера
  //---------------------------

  getLocalAdverts() {
    return this._http.get(urls.apiUrl + '/advert/')
  }

  getImagesById(id: string) {
    return new Promise((resolve, reject) => {
      if (id) {
        this._http.get<any>(urls.courseUrl + `/Images/${id}`).subscribe({
          next: (resp) => {
            resolve(resp)
          }
        })
      }
      reject("У объявления нет изображений")
    })
  }
}
