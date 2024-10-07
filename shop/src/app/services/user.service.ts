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
    return localStorage.getItem('token') ? true : false;
  }

  getUserbyId(userid: string): Observable<any> {
    return this.http.get(urls.courseUrl + '/Users/' + userid, {
      headers: new HttpHeaders({
        "Accept": "text/plain",
        'Access-Control-Allow-Origin': '*',
        'Authorization': "Bearer " + localStorage.getItem("token")
      }),
      responseType: "json",
      reportProgress: true,
      observe: "events"
    })
  }

  getUserCurrent(): Observable<any> {
    return this.http.get("http://45.147.178.196:8000/competitions/", {
      headers: new HttpHeaders({
        //'Authorization': "Bearer " + localStorage.getItem("token")
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
        'Authorization': "Bearer " + localStorage.getItem("token")
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
        'Authorization': "Bearer " + localStorage.getItem("token")
      }),
      responseType: "json",
      reportProgress: true
    })
  }

}
