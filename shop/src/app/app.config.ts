import { ApplicationConfig, inject, provideZoneChangeDetection } from '@angular/core';
import { PreloadAllModules, provideRouter, withPreloading } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpHandlerFn } from '@angular/common/http';

export function authInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn) {
  const newReq = req.clone({
    headers: req.headers.append("Authorization", `Bearer ${localStorage.getItem("token")}`),
  });
  return next(newReq);
}

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes, withPreloading(PreloadAllModules)), provideHttpClient(withInterceptors([authInterceptor])), provideAnimations()]
};
