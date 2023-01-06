import {
  Injectable,
  Inject,
} from '@angular/core';
import {
  Actions,
  createEffect,
  ofType,
} from '@ngrx/effects';
import {
  of,
  Observable,
  EMPTY,
} from 'rxjs';
import {
  switchMap,
  map,
  catchError,
  tap,
} from 'rxjs/operators';

import {
  DaffLoginInfo,
  DaffAuthToken,
  DAFF_AUTH_ERROR_MATCHER,
  DaffAuthStorageService,
} from '@daffodil/auth';
import {
  DaffLoginDriver,
  DaffLoginServiceInterface,
} from '@daffodil/auth/driver';
import {
  DaffError,
  DaffServerSideStorageError,
  DaffStorageServiceError,
} from '@daffodil/core';
import { ErrorTransformer } from '@daffodil/core/state';

import {
  DaffAuthLoginActionTypes,
  DaffAuthLogin,
  DaffAuthLoginSuccess,
  DaffAuthLoginFailure,
  DaffAuthLogoutSuccess,
  DaffAuthLogoutFailure,
  DaffAuthLogout,
  DaffAuthStorageFailure,
  DaffAuthComplete,
  DaffAuthServerSide,
  DaffAuthRevoke,
} from '../actions/public_api';

@Injectable()
export class DaffAuthLoginEffects<
  T extends DaffLoginInfo = DaffLoginInfo,
  U extends DaffAuthToken = DaffAuthToken,
> {
  constructor(
    private actions$: Actions,
    @Inject(DaffLoginDriver) private loginDriver: DaffLoginServiceInterface<T, U>,
    @Inject(DAFF_AUTH_ERROR_MATCHER) private errorMatcher: ErrorTransformer,
    private storage: DaffAuthStorageService,
  ) {}

  login$ = createEffect(() => this.actions$.pipe(
    ofType(DaffAuthLoginActionTypes.LoginAction),
    switchMap((action: DaffAuthLogin<T>) =>
      this.loginDriver.login(action.loginInfo).pipe(
        map((resp) =>
          new DaffAuthLoginSuccess<U>(resp),
        ),
        catchError((error: DaffError) =>
          of(new DaffAuthLoginFailure(this.errorMatcher(error))),
        ),
      ),
    ),
  ));

  logout$ = createEffect(() => this.actions$.pipe(
    ofType(DaffAuthLoginActionTypes.LogoutAction),
    switchMap((action: DaffAuthLogout) =>
      this.loginDriver.logout().pipe(
        map(() => new DaffAuthLogoutSuccess()),
        catchError((error: DaffError) =>
          of(new DaffAuthLogoutFailure(this.errorMatcher(error))),
        ),
      ),
    ),
  ));

  removeAuthToken$ = createEffect(() => this.actions$.pipe(
    ofType<DaffAuthLogoutSuccess>(
      DaffAuthLoginActionTypes.LogoutSuccessAction,
    ),
    tap(() => {
      this.storage.removeAuthToken();
    }),
    map(() => new DaffAuthRevoke()),
    catchError((error: Error) => {
      switch (true) {
        case error instanceof DaffServerSideStorageError:
          return of(new DaffAuthServerSide(this.errorMatcher(error)));

        case error instanceof DaffStorageServiceError:
        default:
          return of(new DaffAuthStorageFailure(this.errorMatcher(error)));
      }
    }),
  ));

  storeAuthToken$ = createEffect(() => this.actions$.pipe(
    ofType(DaffAuthLoginActionTypes.LoginSuccessAction),
    tap((action: DaffAuthLoginSuccess<U>) => {
      this.storage.setAuthToken(action.auth.token);
    }),
    map(() => new DaffAuthComplete()),
    catchError((error: Error) => {
      switch (true) {
        case error instanceof DaffServerSideStorageError:
          return of(new DaffAuthServerSide(this.errorMatcher(error)));

        case error instanceof DaffStorageServiceError:
        default:
          return of(new DaffAuthStorageFailure(this.errorMatcher(error)));
      }
    }),
  ));
}
