import { isPlatformServer } from '@angular/common';
import {
  inject,
  Injectable,
  PLATFORM_ID,
} from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  UrlTree,
} from '@angular/router';

import {
  DaffAuthFacade,
  DaffResetPasswordLanding,
} from '@daffodil/auth/state';

import { DaffAuthResetPasswordGuardRedirectUrl } from './reset-password-guard-redirect.token';
import { DAFF_AUTH_ROUTING_CONFIG } from '../config/public_api';

@Injectable({
  providedIn: 'any',
})
export class DaffAuthResetPasswordGuard implements CanActivate {
  readonly facade = inject(DaffAuthFacade);
  readonly config = inject(DAFF_AUTH_ROUTING_CONFIG);
  readonly platformId = inject(PLATFORM_ID);
  readonly redirectUrl = inject(DaffAuthResetPasswordGuardRedirectUrl);
  readonly router = inject(Router);

  canActivate(route: ActivatedRouteSnapshot): boolean | UrlTree {
    if (isPlatformServer(this.platformId)) {
      return true;
    }

    const token = route.queryParamMap.get(this.config.resetPasswordTokenParam);

    if (!token) {
      return this.router.parseUrl(this.redirectUrl);
    }

    this.facade.dispatch(new DaffResetPasswordLanding(token));

    return true;
  }
}
