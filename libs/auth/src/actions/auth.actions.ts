import { Action } from '@ngrx/store';

import { DaffLoginRequest } from '../models/login-request';
import { DaffLoginResponse } from '../models/login-response';
import { DaffRegisterResponse } from '../models/register-response';
import { DaffRegisterRequest } from '../models/register-request';

export enum DaffAuthActionTypes {
  AuthLoginAction = '[Daff-Auth] Auth Login Action',
  AuthLoginSuccessAction = '[Daff-Auth] Auth Login Success Action',
  AuthLoginFailureAction = '[Daff-Auth] Auth Login Failure Action',
  AuthRegisterAction = '[Daff-Auth] Auth Register Action',
  AuthRegisterSuccessAction = '[Daff-Auth] Auth Register Success Action',
  AuthRegisterFailureAction = '[Daff-Auth] Auth Register Failure Action',
}

/**
 * An action triggered to initialize a auth login request.
 */
export class DaffAuthLogin<T extends DaffLoginRequest> implements Action {
  readonly type = DaffAuthActionTypes.AuthLoginAction;

  constructor(public loginInfo: T) { }
}

/**
 * An action triggered upon a successful auth login.
 *
 * @param token - the customer access token
 */
export class DaffAuthLoginSuccess<T extends DaffLoginResponse> implements Action {
  readonly type = DaffAuthActionTypes.AuthLoginSuccessAction;

  constructor(public auth: T) { }
}

/**
 * An action triggered upon a failed auth login request.
 *
 * @param errorMessage - an error message
 */
export class DaffAuthLoginFailure implements Action {
  readonly type = DaffAuthActionTypes.AuthLoginFailureAction;

  constructor(public errorMessage: string) { }
}

/**
 * An action triggered to initialize a auth register request.
 *
 * @param registration
 */
export class DaffAuthRegister<T extends DaffRegisterRequest> implements Action {
  readonly type = DaffAuthActionTypes.AuthRegisterAction;

  constructor(public registration: T) { }
}

/**
 * An action triggered upon a successful auth register request.
 *
 * @param token - the customer access token
 */
export class DaffAuthRegisterSuccess<T extends DaffRegisterResponse> implements Action {
  readonly type = DaffAuthActionTypes.AuthRegisterSuccessAction;

  constructor(public auth: T) { }
}

/**
 * An action triggered upon a failed auth request.
 *
 * @param errorMessage - an error message
 */
export class DaffAuthRegisterFailure implements Action {
  readonly type = DaffAuthActionTypes.AuthRegisterFailureAction;

  constructor(public errorMessage: string) { }
}

export type DaffAuthActions<
  T extends DaffLoginRequest,
  U extends DaffLoginResponse,
  S extends DaffRegisterRequest,
  V extends DaffRegisterResponse
> =
  | DaffAuthLogin<T>
  | DaffAuthLoginSuccess<U>
  | DaffAuthLoginFailure
  | DaffAuthRegister<S>
  | DaffAuthRegisterSuccess<V>
  | DaffAuthRegisterFailure
