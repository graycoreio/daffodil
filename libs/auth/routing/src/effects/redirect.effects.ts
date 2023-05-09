import {
  Inject,
  Injectable,
} from '@angular/core';
import {
  ActivatedRoute,
  Router,
} from '@angular/router';
import {
  Actions,
  createEffect,
  ofType,
} from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import {
  filter,
  switchMap,
  tap,
} from 'rxjs/operators';

import {
  DaffAuthActionTypes,
  DaffAuthActions,
  DaffAuthLoginActionTypes,
  DaffAuthLoginActions,
  DaffAuthRegisterActionTypes,
  DaffAuthRegisterActions,
  DaffAuthResetPasswordActionTypes,
  DaffAuthResetPasswordActions,
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
    private actions$: Actions<DaffAuthLoginActions | DaffAuthActions | DaffAuthRegisterActions | DaffAuthResetPasswordActions>,
    private router: Router,
    private route: ActivatedRoute,
    @Inject(DAFF_AUTH_ROUTING_CONFIG) private config: DaffAuthRoutingConfig,
  ) {}

  redirectAfterLoginOrRegister$ = createEffect(() => this.actions$.pipe(
    ofType(
      DaffAuthLoginActionTypes.LoginSuccessAction,
      DaffAuthRegisterActionTypes.RegisterSuccessAction,
      DaffAuthResetPasswordActionTypes.ResetPasswordSuccessAction,
    ),
    filter((action) => {
      if ((action.type === DaffAuthRegisterActionTypes.RegisterSuccessAction || action.type === DaffAuthResetPasswordActionTypes.ResetPasswordSuccessAction) && !action.token) {
        return false;
      }
      return true;
    }),
    tap((action) => {
      this.router.navigateByUrl(this.route.snapshot.queryParamMap.get(this.config.redirectUrlParam) || this.config.authCompleteRedirectPath);
    }),
    switchMap(() => EMPTY),
  ), { dispatch: false });

  redirectAfterLogout$ = createEffect(() => this.actions$.pipe(
    ofType(DaffAuthLoginActionTypes.LogoutSuccessAction),
    tap((action) => {
      this.router.navigateByUrl(this.route.snapshot.queryParamMap.get(this.config.redirectUrlParam) || this.config.logoutRedirectPath);
    }),
    switchMap(() => EMPTY),
  ), { dispatch: false });

  redirectAfterExpiration$ = createEffect(() => this.actions$.pipe(
    ofType(
      DaffAuthActionTypes.AuthCheckFailureAction,
      DaffAuthActionTypes.AuthGuardLogoutAction,
    ),
    tap(() => {
      this.router.navigateByUrl(this.route.snapshot.queryParamMap.get(this.config.redirectUrlParam) || this.config.tokenExpirationRedirectPath);
    }),
    switchMap(() => EMPTY),
  ), { dispatch: false });
}
