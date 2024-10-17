import { ApplicationConfig, inject, provideZoneChangeDetection } from '@angular/core';
import { PreloadAllModules, provideRouter, withPreloading } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { HttpRequest, HttpHandlerFn } from '@angular/common/http';

export function authInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn) {
  if (localStorage.getItem('token')) {
    const token = localStorage.getItem('token')
    const newReq = req.clone({
      headers: req.headers.append("Authorization", `Bearer ${token?.slice(1, -1)}`),
    });
    return next(newReq)
  }
  return next(req);
}

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes, withPreloading(PreloadAllModules)), provideHttpClient(withInterceptors([authInterceptor])), provideAnimations()]
};
