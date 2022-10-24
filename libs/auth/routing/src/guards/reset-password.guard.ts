import {
  Inject,
  Injectable,
} from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
} from '@angular/router';
import {
  Observable,
  of,
} from 'rxjs';

import {
  DaffAuthFacade,
  DaffResetPasswordLanding,
} from '@daffodil/auth/state';

import {
  DaffAuthRoutingConfig,
  DAFF_AUTH_ROUTING_CONFIG,
} from '../config/public_api';

@Injectable({
  providedIn: 'any',
})
export class DaffAuthResetPasswordGuard implements CanActivate {
  constructor(
    private facade: DaffAuthFacade,
    @Inject(DAFF_AUTH_ROUTING_CONFIG) private config: DaffAuthRoutingConfig,
  ) {}

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    const token = route.queryParamMap.get(this.config.resetPasswordTokenParam);

    if (!token) {
      return of(false);
    }

    this.facade.dispatch(new DaffResetPasswordLanding(token));

    return of(true);
  }
}
