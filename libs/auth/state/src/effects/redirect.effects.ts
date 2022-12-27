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
} from '../actions/public_api';
import {
  DaffAuthStateConfig,
  DAFF_AUTH_STATE_CONFIG,
} from '../config/public_api';

/**
 * Redirects the user to certain pages based on certain auth actions.
 */
@Injectable()
export class DaffAuthRedirectEffects {
  constructor(
    private actions$: Actions,
    private router: Router,
    @Inject(DAFF_AUTH_STATE_CONFIG) private config: DaffAuthStateConfig,
  ) {}

  redirectAfterLoginOrRegister$ = createEffect(() => this.actions$.pipe(
    ofType<DaffAuthComplete>(DaffAuthActionTypes.AuthCompleteAction),
    tap(() => {
      this.router.navigateByUrl(this.config.authCompleteRedirectPath);
    }),
    switchMap(() => EMPTY),
  ), { dispatch: false });

  redirectAfterLogout$ = createEffect(() => this.actions$.pipe(
    ofType(DaffAuthLoginActionTypes.LogoutSuccessAction),
    tap(() => {
      this.router.navigateByUrl(this.config.logoutRedirectPath);
    }),
    switchMap(() => EMPTY),
  ), { dispatch: false });
}
