import {
  Inject,
  Injectable,
} from '@angular/core';
import { Router } from '@angular/router';
import {
  Actions,
  createEffect,
  ofType,
} from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import {
  switchMap,
  tap,
} from 'rxjs/operators';

import {
  DaffAuthActionTypes,
  DaffAuthComplete,
  DaffAuthLoginActionTypes,
} from '@daffodil/auth/state';

import {
  DaffAuthRoutingConfig,
  DAFF_AUTH_ROUTING_CONFIG,
} from '../config/public_api';

/**
 * Redirects the user to certain pages based on certain auth actions.
 */
@Injectable()
export class DaffAuthRedirectEffects {
  constructor(
    private actions$: Actions,
    private router: Router,
    @Inject(DAFF_AUTH_ROUTING_CONFIG) private config: DaffAuthRoutingConfig,
  ) {}

  redirectAfterLoginOrRegister$ = createEffect(() => this.actions$.pipe(
    ofType<DaffAuthComplete>(DaffAuthActionTypes.AuthCompleteAction),
    tap(() => {
      this.router.navigateByUrl(this.config.authCompleteRedirectPath);
    }),
    switchMap(() => EMPTY),
  ), { dispatch: false });

  redirectAfterLogout$ = createEffect(() => this.actions$.pipe(
    ofType(DaffAuthActionTypes.AuthRevokeAction),
    tap(() => {
      this.router.navigateByUrl(this.config.logoutRedirectPath);
    }),
    switchMap(() => EMPTY),
  ), { dispatch: false });
}
