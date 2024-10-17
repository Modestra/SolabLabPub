import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { urls } from '../http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {

  }

  public isLoggedIn(): boolean {
    return localStorage.getItem('token') ? true : false;
  }

  getUserbyId(userid: string): Observable<any> {
    return this.http.get(urls.courseUrl + `/Users/${userid}`, {
      headers: new HttpHeaders({
        "Accept": "text/plain",
        'Access-Control-Allow-Origin': '*',
      }),
      responseType: "json",
    })
  }

  registerUser(user: any): Observable<string> {
    return this.http.post<string>(urls.courseUrl + '/Auth/Register', user, {
      headers: new HttpHeaders({
        "Accept": "text/plain",
        'Access-Control-Allow-Origin': '*',
      }),
      responseType: "json",
      reportProgress: true,
    })
  }

  loginUser(user: any): Observable<string> {
    return this.http.post<string>(urls.courseUrl + '/Auth/Login', user, {
      headers: new HttpHeaders({
        "Accept": "text/plain",
        'Access-Control-Allow-Origin': '*',
      }),
      responseType: "json",
      reportProgress: true
    })
  }

}
