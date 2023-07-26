import {
  ActivatedRoute,
  Router,
} from '@angular/router';
import {
  from,
  of,
} from 'rxjs';

import {
  DaffAuthActionTypes,
  DaffAuthLoginActionTypes,
  DaffAuthUnauthenticatedHook,
} from '@daffodil/auth/state';

import { DaffAuthRoutingConfig } from '../config/public_api';

export function daffAuthRoutingRedirectUnauthenticatedHookFactory(router: Router, route: ActivatedRoute, config: DaffAuthRoutingConfig): DaffAuthUnauthenticatedHook {
  return (trigger) => {
    switch (trigger) {
      case DaffAuthLoginActionTypes.LogoutSuccessAction:
        return from(router.navigateByUrl(route.snapshot.queryParamMap.get(config.redirectUrlParam) || config.logoutRedirectPath));

      case DaffAuthActionTypes.AuthCheckFailureAction:
      case DaffAuthActionTypes.AuthGuardLogoutAction:
        return from(router.navigateByUrl(route.snapshot.queryParamMap.get(config.redirectUrlParam) || config.tokenExpirationRedirectPath));

      default:
        return of(null);
    }
  };
}
