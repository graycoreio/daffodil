import {
  Injectable,
  Inject,
} from '@angular/core';
import {
  Actions,
  Effect,
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
  mapTo,
  tap,
  switchMapTo,
} from 'rxjs/operators';

import { DaffError } from '@daffodil/core';
import { ErrorTransformer } from '@daffodil/core/state';

import {
  DaffAuthActionTypes,
  DaffAuthLogin,
  DaffAuthLoginSuccess,
  DaffAuthLoginFailure,
  DaffAuthRegister,
  DaffAuthRegisterSuccess,
  DaffAuthRegisterFailure,
  DaffAuthCheckSuccess,
  DaffAuthCheckFailure,
  DaffAuthCheck,
  DaffAuthLogoutSuccess,
  DaffAuthLogoutFailure,
  DaffAuthLogout,
  DaffAuthGuardCheckCompletion,
  DaffAuthGuardCheck,
  DaffAuthStorageFailure,
} from '../actions/auth.actions';
import {
  DaffAuthDriver,
  DaffAuthServiceInterface,
} from '../drivers/interfaces/auth-service.interface';
import {
  DaffLoginDriver,
  DaffLoginServiceInterface,
} from '../drivers/interfaces/login-service.interface';
import {
  DaffRegisterDriver,
  DaffRegisterServiceInterface,
} from '../drivers/interfaces/register-service.interface';
import { DAFF_AUTH_ERROR_MATCHER } from '../injection-tokens/public_api';
import { DaffAccountRegistration } from '../models/account-registration';
import { DaffAuthToken } from '../models/auth-token';
import { DaffLoginInfo } from '../models/login-info';
import { DaffAuthStorageService } from '../storage/auth-storage.service';

@Injectable()
export class DaffAuthEffects<
  T extends DaffLoginInfo,
  U extends DaffAuthToken,
  S extends DaffAccountRegistration,
> {
  constructor(
    private actions$: Actions,
    @Inject(DaffRegisterDriver) private registerDriver: DaffRegisterServiceInterface<S, T>,
    @Inject(DaffLoginDriver) private loginDriver: DaffLoginServiceInterface<T, U>,
    @Inject(DaffAuthDriver) private authDriver: DaffAuthServiceInterface,
		@Inject(DAFF_AUTH_ERROR_MATCHER) private errorMatcher: ErrorTransformer,
    private storage: DaffAuthStorageService,
  ) {}

  @Effect()
  check$: Observable<DaffAuthCheckSuccess | DaffAuthCheckFailure> = this.actions$.pipe(
    ofType(DaffAuthActionTypes.AuthCheckAction),
    switchMap((action: DaffAuthCheck) =>
      this.checkToken().pipe(
        mapTo(new DaffAuthCheckSuccess()),
        catchError((error: DaffError) =>
          of(new DaffAuthCheckFailure(this.errorMatcher(error))),
        ),
      ),
    ),
  );

  @Effect()
  login$: Observable<DaffAuthLoginSuccess<U> | DaffAuthLoginFailure> = this.actions$.pipe(
    ofType(DaffAuthActionTypes.AuthLoginAction),
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
  );

  @Effect({
    dispatch: false,
  })
  storeAuthToken$ = this.actions$.pipe(
    ofType(DaffAuthActionTypes.AuthLoginSuccessAction),
    tap((action: DaffAuthLoginSuccess<U>) => {
      this.storage.setAuthToken(action.auth.token);
    }),
    switchMapTo(EMPTY),
    catchError((error: DaffError) => of(new DaffAuthStorageFailure(this.errorMatcher(error)))),
  );

  @Effect()
  logout$: Observable<DaffAuthLogoutSuccess | DaffAuthLogoutFailure> = this.actions$.pipe(
    ofType(DaffAuthActionTypes.AuthLogoutAction),
    switchMap((action: DaffAuthLogout) =>
      this.loginDriver.logout().pipe(
        mapTo(new DaffAuthLogoutSuccess()),
        catchError((error: DaffError) =>
          of(new DaffAuthLogoutFailure(this.errorMatcher(error))),
        ),
      ),
    ),
  );

  @Effect()
  loginAfterRegister$: Observable<DaffAuthLogin<T>> = this.actions$.pipe(
    ofType(DaffAuthActionTypes.AuthRegisterSuccessAction),
    map((action: DaffAuthRegisterSuccess<T>) => new DaffAuthLogin(action.loginInfo)),
  );

  @Effect()
  register$: Observable<any> = this.actions$.pipe(
    ofType(DaffAuthActionTypes.AuthRegisterAction),
    switchMap((action: DaffAuthRegister<S>) =>
      this.registerDriver.register(action.registration).pipe(
        map((resp) =>
          new DaffAuthRegisterSuccess<T>(resp),
        ),
        catchError((error: DaffError) =>
          of(new DaffAuthRegisterFailure(this.errorMatcher(error))),
        ),
      ),
    ),
  );

  @Effect()
  guardCheck$: Observable<DaffAuthGuardCheckCompletion> = this.actions$.pipe(
    ofType(DaffAuthActionTypes.AuthGuardCheckAction),
    switchMap((action: DaffAuthGuardCheck) =>
      this.checkToken().pipe(
        mapTo(new DaffAuthGuardCheckCompletion(true)),
        catchError((error: DaffError) =>
          of(new DaffAuthGuardCheckCompletion(false)),
        ),
      ),
    ),
  );

  private checkToken() {
    return this.authDriver.check();
  }
}
