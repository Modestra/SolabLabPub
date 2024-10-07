import { Injectable } from '@angular/core';
import { UserService } from '../user.service';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthInterseptorService implements HttpInterceptor {

  constructor(private user: UserService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    throw new Error('Method not implemented.');
  }

  loggingInterceptor(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (localStorage.getItem('user_id')) {
      req = req.clone({ setHeaders: { Authorization: `Bearer ${localStorage.getItem("token")}` } })
    }
    return next.handle(req).pipe()
  }
}
