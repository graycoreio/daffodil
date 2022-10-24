import { Action } from '@ngrx/store';

import {
  DaffLoginInfo,
  DaffAuthToken,
} from '@daffodil/auth';
import { DaffStateError } from '@daffodil/core/state';

export enum DaffAuthLoginActionTypes {
  LoginAction = '[@daffodil/auth] Login Action',
  LoginSuccessAction = '[@daffodil/auth] Login Success Action',
  LoginFailureAction = '[@daffodil/auth] Login Failure Action',
  LogoutAction = '[@daffodil/auth] Logout Action',
  LogoutSuccessAction = '[@daffodil/auth] Logout Success Action',
  LogoutFailureAction = '[@daffodil/auth] Logout Failure Action',
}

/**
 * An action triggered to initialize a auth login request.
 */
export class DaffAuthLogin<T extends DaffLoginInfo = DaffLoginInfo> implements Action {
  readonly type = DaffAuthLoginActionTypes.LoginAction;

  constructor(public loginInfo: T) {}
}

/**
 * An action triggered upon a successful auth login.
 *
 * @param token - the customer access token
 */
export class DaffAuthLoginSuccess<T extends DaffAuthToken = DaffAuthToken> implements Action {
  readonly type = DaffAuthLoginActionTypes.LoginSuccessAction;

  constructor(public auth: T) {}
}

/**
 * An action triggered upon a failed auth login request.
 *
 * @param errorMessage - an error message
 */
export class DaffAuthLoginFailure implements Action {
  readonly type = DaffAuthLoginActionTypes.LoginFailureAction;

  constructor(public errorMessage: DaffStateError) {}
}

/**
 * An action triggered to initialize a logout request.
 */
export class DaffAuthLogout implements Action {
  readonly type = DaffAuthLoginActionTypes.LogoutAction;
}

/**
 * An action triggered upon a successful logout.
 *
 * @param token - the customer access token
 */
export class DaffAuthLogoutSuccess implements Action {
  readonly type = DaffAuthLoginActionTypes.LogoutSuccessAction;
}

/**
 * An action triggered upon a failed logout request.
 *
 * @param errorMessage - an error message
 */
export class DaffAuthLogoutFailure implements Action {
  readonly type = DaffAuthLoginActionTypes.LogoutFailureAction;

  constructor(public errorMessage: DaffStateError) {}
}

export type DaffAuthLoginActions<
  T extends DaffLoginInfo = DaffLoginInfo,
  U extends DaffAuthToken = DaffAuthToken,
> =
  | DaffAuthLogin<T>
  | DaffAuthLoginSuccess<U>
  | DaffAuthLoginFailure
  | DaffAuthLogout
  | DaffAuthLogoutSuccess
  | DaffAuthLogoutFailure;
