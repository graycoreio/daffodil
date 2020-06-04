import { Action } from '@ngrx/store';

import { DaffLoginInfo } from '../models/login-info';
import { DaffAuthToken } from '../models/auth-token';
import { DaffAccountRegistration } from '../models/account-registration';

export enum DaffAuthActionTypes {
  AuthGuardCheckAction = '[Daff-Auth] Auth Guard Check Action',
  AuthGuardCheckCompletionAction = '[Daff-Auth] Auth Guard Check Completion Action',
  AuthStorageFailureAction = '[Daff-Auth] Auth Storage Failure Action',
  AuthLoginAction = '[Daff-Auth] Auth Login Action',
  AuthLoginSuccessAction = '[Daff-Auth] Auth Login Success Action',
  AuthLoginFailureAction = '[Daff-Auth] Auth Login Failure Action',
  AuthLogoutAction = '[Daff-Auth] Auth Logout Action',
  AuthLogoutSuccessAction = '[Daff-Auth] Auth Logout Success Action',
  AuthLogoutFailureAction = '[Daff-Auth] Auth Logout Failure Action',
  AuthCheckAction = '[Daff-Auth] Auth Check Action',
  AuthCheckSuccessAction = '[Daff-Auth] Auth Check Success Action',
  AuthCheckFailureAction = '[Daff-Auth] Auth Check Failure Action',
  AuthRegisterAction = '[Daff-Auth] Auth Register Action',
  AuthRegisterSuccessAction = '[Daff-Auth] Auth Register Success Action',
  AuthRegisterFailureAction = '[Daff-Auth] Auth Register Failure Action',
}

/**
 * An action triggered by guards to initialize an auth check request.
 */
export class DaffAuthGuardCheck implements Action {
  readonly type = DaffAuthActionTypes.AuthGuardCheckAction;
}

/**
 * An action triggered on the completion of a guard token check.
 */
export class DaffAuthGuardCheckCompletion implements Action {
  readonly type = DaffAuthActionTypes.AuthGuardCheckCompletionAction;

  constructor(public result: boolean) {}
}

/*
 * An action triggered upon a failed auth storage operation.
 */
export class DaffAuthStorageFailure implements Action {
  readonly type = DaffAuthActionTypes.AuthStorageFailureAction;

  constructor(public errorMessage: string) {}
}

/**
 * An action triggered to initialize a auth login request.
 */
export class DaffAuthLogin<T extends DaffLoginInfo = DaffLoginInfo> implements Action {
  readonly type = DaffAuthActionTypes.AuthLoginAction;

  constructor(public loginInfo: T) {}
}

/**
 * An action triggered upon a successful auth login.
 *
 * @param token - the customer access token
 */
export class DaffAuthLoginSuccess<T extends DaffAuthToken = DaffAuthToken> implements Action {
  readonly type = DaffAuthActionTypes.AuthLoginSuccessAction;

  constructor(public auth: T) {}
}

/**
 * An action triggered upon a failed auth login request.
 *
 * @param errorMessage - an error message
 */
export class DaffAuthLoginFailure implements Action {
  readonly type = DaffAuthActionTypes.AuthLoginFailureAction;

  constructor(public errorMessage: string) {}
}

/**
 * An action triggered to initialize a logout request.
 */
export class DaffAuthLogout implements Action {
  readonly type = DaffAuthActionTypes.AuthLogoutAction;
}

/**
 * An action triggered upon a successful logout.
 *
 * @param token - the customer access token
 */
export class DaffAuthLogoutSuccess implements Action {
  readonly type = DaffAuthActionTypes.AuthLogoutSuccessAction;
}

/**
 * An action triggered upon a failed logout request.
 *
 * @param errorMessage - an error message
 */
export class DaffAuthLogoutFailure implements Action {
  readonly type = DaffAuthActionTypes.AuthLogoutFailureAction;

  constructor(public errorMessage: string) {}
}


/**
 * An action triggered to initialize an auth check request.
 */
export class DaffAuthCheck implements Action {
  readonly type = DaffAuthActionTypes.AuthCheckAction;
}

/**
 * An action triggered upon a successful auth check.
 *
 * @param token - the customer access token
 */
export class DaffAuthCheckSuccess implements Action {
  readonly type = DaffAuthActionTypes.AuthCheckSuccessAction;
}

/**
 * An action triggered upon a failed auth check request.
 *
 * @param errorMessage - an error message
 */
export class DaffAuthCheckFailure implements Action {
  readonly type = DaffAuthActionTypes.AuthCheckFailureAction;

  constructor(public errorMessage: string) {}
}

/**
 * An action triggered to initialize a auth register request.
 *
 * @param registration
 */
export class DaffAuthRegister<T extends DaffAccountRegistration = DaffAccountRegistration> implements Action {
  readonly type = DaffAuthActionTypes.AuthRegisterAction;

  constructor(public registration: T) {}
}

/**
 * An action triggered upon a successful auth register request.
 *
 * @param token - the customer access token
 */
export class DaffAuthRegisterSuccess<T extends DaffLoginInfo = DaffLoginInfo> implements Action {
  readonly type = DaffAuthActionTypes.AuthRegisterSuccessAction;

  constructor(public loginInfo: T) {}
}

/**
 * An action triggered upon a failed auth request.
 *
 * @param errorMessage - an error message
 */
export class DaffAuthRegisterFailure implements Action {
  readonly type = DaffAuthActionTypes.AuthRegisterFailureAction;

  constructor(public errorMessage: string) {}
}

export type DaffAuthActions<
  T extends DaffLoginInfo = DaffLoginInfo,
  U extends DaffAuthToken= DaffAuthToken,
  S extends DaffAccountRegistration= DaffAccountRegistration,
> =
  | DaffAuthGuardCheckCompletion
  | DaffAuthGuardCheck
  | DaffAuthStorageFailure
  | DaffAuthLogin<T>
  | DaffAuthLoginSuccess<U>
  | DaffAuthLoginFailure
  | DaffAuthLogout
  | DaffAuthLogoutSuccess
  | DaffAuthLogoutFailure
  | DaffAuthCheck
  | DaffAuthCheckSuccess
  | DaffAuthCheckFailure
  | DaffAuthRegister<S>
  | DaffAuthRegisterSuccess<T>
  | DaffAuthRegisterFailure
