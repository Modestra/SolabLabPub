import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { urls } from '../http';
import { UserForm } from '../entities/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {

  }

  public isLoggedIn(): boolean {
    return false;
  }

  getUser(user: UserForm) {
    return this.http.post(urls.courseUrl + '/Users', user, {
      headers: new HttpHeaders({
        "Accept": "text/plain",
        'Access-Control-Allow-Origin': '*',
        'Authorization': "Bearer " + sessionStorage.getItem("token")
      }),
      responseType: "json",
      reportProgress: true,
      observe: "events"
    })
  }

  registerUser(user: UserForm): Observable<string> {
    return this.http.post<string>(urls.courseUrl + '/Auth/Register', user, {
      headers: new HttpHeaders({
        "Accept": "text/plain",
        'Access-Control-Allow-Origin': '*',
        'Authorization': "Bearer " + sessionStorage.getItem("token")
      }),
      responseType: "json",
      reportProgress: true,
    })
  }

  loginUser(user: UserForm): Observable<string> {
    return this.http.post<string>(urls.courseUrl + '/Auth/Login', user, {
      headers: new HttpHeaders({
        "Accept": "text/plain",
        'Access-Control-Allow-Origin': '*',
        'Authorization': "Bearer " + sessionStorage.getItem("token")
      }),
      responseType: "json",
      reportProgress: true
    })
  }

}
