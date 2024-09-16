import { inject } from '@angular/core';
import { CanActivateFn, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';
import { UserService } from '../user.service';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  return inject(UserService).isLoggedIn() ? true : router.navigate(['/']);
};
