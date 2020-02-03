import { Injectable, Inject } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of, Observable } from 'rxjs';

import {
  DaffAuthActionTypes,
  DaffAuthLogin,
  DaffAuthLoginSuccess,
  DaffAuthLoginFailure,
  DaffAuthRegister,
  DaffAuthRegisterSuccess,
  DaffAuthRegisterFailure
} from '../actions/auth.actions';
import { DaffRegisterDriver } from '../drivers/injection-tokens/register-driver.token';
import { DaffRegisterServiceInterface } from '../drivers/interfaces/register-service.interface';
import { DaffLoginDriver } from '../drivers/injection-tokens/login-driver.token';
import { DaffLoginServiceInterface } from '../drivers/interfaces/login-service.interface';
import { DaffRegisterRequest } from '../models/register-request';
import { DaffRegisterResponse } from '../models/register-response';
import { DaffLoginRequest } from '../models/login-request';
import { DaffLoginResponse } from '../models/login-response';

@Injectable()
export class DaffAuthEffects<
  T extends DaffLoginRequest,
  U extends DaffLoginResponse,
  S extends DaffRegisterRequest,
  V extends DaffRegisterResponse
> {
  constructor(
    private actions$: Actions,
    @Inject(DaffRegisterDriver) private registerDriver: DaffRegisterServiceInterface<S, V>,
    @Inject(DaffLoginDriver) private loginDriver: DaffLoginServiceInterface<T, U>,
  ) {}

  @Effect()
  login$ : Observable<any> = this.actions$.pipe(
    ofType(DaffAuthActionTypes.AuthLoginAction),
    switchMap((action: DaffAuthLogin<T>) =>
      this.loginDriver.login(action.loginInfo)
        .pipe(
          map((resp) =>
            new DaffAuthLoginSuccess<U>(resp)
          ),
          catchError(error =>
            // TODO: find out if we should be passing along the captured error
            of(new DaffAuthLoginFailure('Failed to log in'))
          )
        )
    )
  )

  @Effect()
  register$ : Observable<any> = this.actions$.pipe(
    ofType(DaffAuthActionTypes.AuthRegisterAction),
    switchMap((action: DaffAuthRegister<S>) =>
      this.registerDriver.register(action.registration)
        .pipe(
          map((resp) =>
            new DaffAuthRegisterSuccess<V>(resp)
          ),
          catchError(error =>
            of(new DaffAuthRegisterFailure('Failed to register a new user'))
          )
        )
    )
  )
}
