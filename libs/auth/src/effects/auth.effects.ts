import { Injectable, Inject } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { switchMap, map, catchError, mapTo, tap, switchMapTo } from 'rxjs/operators';
import { of, Observable, EMPTY } from 'rxjs';

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
  DaffAuthStorageFailure
} from '../actions/auth.actions';
import { DaffRegisterDriver, DaffRegisterServiceInterface } from '../drivers/interfaces/register-service.interface';
import { DaffLoginDriver, DaffLoginServiceInterface } from '../drivers/interfaces/login-service.interface';
import { DaffAuthToken } from '../models/auth-token';
import { DaffAccountRegistration } from '../models/account-registration';
import { DaffLoginInfo } from '../models/login-info';
import { DaffAuthDriver, DaffAuthServiceInterface } from '../drivers/interfaces/auth-service.interface';
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
    private storage: DaffAuthStorageService
  ) {}

  @Effect()
  check$ : Observable<DaffAuthCheckSuccess | DaffAuthCheckFailure> = this.actions$.pipe(
    ofType(DaffAuthActionTypes.AuthCheckAction),
    switchMap((action: DaffAuthCheck) =>
      this.checkToken().pipe(
        mapTo(new DaffAuthCheckSuccess()),
        catchError(error =>
          of(new DaffAuthCheckFailure('Auth token is not valid'))
        )
      )
    )
  )

  @Effect()
  login$ : Observable<DaffAuthLoginSuccess<U> | DaffAuthLoginFailure> = this.actions$.pipe(
    ofType(DaffAuthActionTypes.AuthLoginAction),
    switchMap((action: DaffAuthLogin<T>) =>
      this.loginDriver.login(action.loginInfo).pipe(
        map((resp) =>
          new DaffAuthLoginSuccess<U>(resp)
        ),
        catchError(error =>
          of(new DaffAuthLoginFailure('Failed to log in'))
        )
      )
    )
  )

  @Effect({
    dispatch: false
  })
  storeAuthToken$ = this.actions$.pipe(
    ofType(DaffAuthActionTypes.AuthLoginSuccessAction),
    tap((action: DaffAuthLoginSuccess<U>) => {
      this.storage.setAuthToken(action.auth.token)
    }),
    switchMapTo(EMPTY),
    catchError(error => of(new DaffAuthStorageFailure('Storage of auth token has failed.')))
  )

  @Effect()
  logout$ : Observable<DaffAuthLogoutSuccess | DaffAuthLogoutFailure> = this.actions$.pipe(
    ofType(DaffAuthActionTypes.AuthLogoutAction),
    switchMap((action: DaffAuthLogout) =>
      this.loginDriver.logout().pipe(
        mapTo(new DaffAuthLogoutSuccess()),
        catchError(error =>
          of(new DaffAuthLogoutFailure('Failed to log out'))
        )
      )
    )
  )

  @Effect()
  loginAfterRegister$: Observable<DaffAuthLogin<T>> = this.actions$.pipe(
    ofType(DaffAuthActionTypes.AuthRegisterSuccessAction),
    map((action: DaffAuthRegisterSuccess<T>) => new DaffAuthLogin(action.loginInfo))
  )

  @Effect()
  register$ : Observable<any> = this.actions$.pipe(
    ofType(DaffAuthActionTypes.AuthRegisterAction),
    switchMap((action: DaffAuthRegister<S>) =>
      this.registerDriver.register(action.registration).pipe(
        map((resp) =>
          new DaffAuthRegisterSuccess<T>(resp)
        ),
        catchError(error =>
          of(new DaffAuthRegisterFailure('Failed to register a new user'))
        )
      )
    )
  )

  @Effect()
  guardCheck$: Observable<DaffAuthGuardCheckCompletion> = this.actions$.pipe(
    ofType(DaffAuthActionTypes.AuthGuardCheckAction),
    switchMap((action: DaffAuthGuardCheck) =>
      this.checkToken().pipe(
        mapTo(new DaffAuthGuardCheckCompletion(true)),
        catchError(error =>
          of(new DaffAuthGuardCheckCompletion(false))
        )
      )
    )
  )

  private checkToken() {
    return this.authDriver.check()
  }
}
