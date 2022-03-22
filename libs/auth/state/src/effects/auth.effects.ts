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
  mapTo,
  tap,
  switchMapTo,
} from 'rxjs/operators';

import {
  DaffLoginInfo,
  DaffAuthToken,
  DaffAccountRegistration,
  DAFF_AUTH_ERROR_MATCHER,
  DaffAuthStorageService,
} from '@daffodil/auth';
import {
  DaffRegisterDriver,
  DaffRegisterServiceInterface,
  DaffLoginDriver,
  DaffLoginServiceInterface,
  DaffAuthDriver,
  DaffAuthServiceInterface,
} from '@daffodil/auth/driver';
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


  check$: Observable<DaffAuthCheckSuccess | DaffAuthCheckFailure> = createEffect(() => this.actions$.pipe(
    ofType(DaffAuthActionTypes.AuthCheckAction),
    switchMap((action: DaffAuthCheck) =>
      this.checkToken().pipe(
        mapTo(new DaffAuthCheckSuccess()),
        catchError((error: DaffError) =>
          of(new DaffAuthCheckFailure(this.errorMatcher(error))),
        ),
      ),
    ),
  ));


  login$: Observable<DaffAuthLoginSuccess<U> | DaffAuthLoginFailure> = createEffect(() => this.actions$.pipe(
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
  ));


  storeAuthToken$ = createEffect(() => this.actions$.pipe(
    ofType(DaffAuthActionTypes.AuthLoginSuccessAction),
    tap((action: DaffAuthLoginSuccess<U>) => {
      this.storage.setAuthToken(action.auth.token);
    }),
    switchMapTo(EMPTY),
    catchError((error: DaffError) => of(new DaffAuthStorageFailure(this.errorMatcher(error)))),
  ), {
    dispatch: false,
  });


  logout$: Observable<DaffAuthLogoutSuccess | DaffAuthLogoutFailure> = createEffect(() => this.actions$.pipe(
    ofType(DaffAuthActionTypes.AuthLogoutAction),
    switchMap((action: DaffAuthLogout) =>
      this.loginDriver.logout().pipe(
        mapTo(new DaffAuthLogoutSuccess()),
        catchError((error: DaffError) =>
          of(new DaffAuthLogoutFailure(this.errorMatcher(error))),
        ),
      ),
    ),
  ));


  loginAfterRegister$: Observable<DaffAuthLogin<T>> = createEffect(() => this.actions$.pipe(
    ofType(DaffAuthActionTypes.AuthRegisterSuccessAction),
    map((action: DaffAuthRegisterSuccess<T>) => new DaffAuthLogin(action.loginInfo)),
  ));


  register$: Observable<any> = createEffect(() => this.actions$.pipe(
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
  ));


  guardCheck$: Observable<DaffAuthGuardCheckCompletion> = createEffect(() => this.actions$.pipe(
    ofType(DaffAuthActionTypes.AuthGuardCheckAction),
    switchMap((action: DaffAuthGuardCheck) =>
      this.checkToken().pipe(
        mapTo(new DaffAuthGuardCheckCompletion(true)),
        catchError((error: DaffError) =>
          of(new DaffAuthGuardCheckCompletion(false)),
        ),
      ),
    ),
  ));

  private checkToken() {
    return this.authDriver.check();
  }
}
