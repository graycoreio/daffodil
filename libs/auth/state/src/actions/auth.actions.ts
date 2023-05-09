import { Action } from '@ngrx/store';

import { DaffStateError } from '@daffodil/core/state';

export enum DaffAuthActionTypes {
  AuthStorageFailureAction = '[@daffodil/auth] Auth Storage Failure Action',
  AuthGuardLogoutAction = '[@daffodil/auth] Auth Guard Logout Action',
  AuthServerSideAction = '[@daffodil/auth] Auth Server Side Action',
  AuthCheckAction = '[@daffodil/auth] Auth Check Action',
  AuthCheckSuccessAction = '[@daffodil/auth] Auth Check Success Action',
  AuthCheckFailureAction = '[@daffodil/auth] Auth Check Failure Action',
}

/*
 * An action triggered upon a failed auth storage operation.
 */
export class DaffAuthStorageFailure implements Action {
  readonly type = DaffAuthActionTypes.AuthStorageFailureAction;

  constructor(public errorMessage: DaffStateError) {}
}

/*
 * An action triggered when an auth token is cleared from storage by a routing guard.
 */
export class DaffAuthGuardLogout implements Action {
  readonly type = DaffAuthActionTypes.AuthGuardLogoutAction;

  constructor(public errorMessage: DaffStateError) {}
}

/*
 * An action triggered when an invalid operation is performed in the server environment.
 * A common example is trying to access the auth token from storage.
 */
export class DaffAuthServerSide implements Action {
  readonly type = DaffAuthActionTypes.AuthServerSideAction;

  constructor(public errorMessage: DaffStateError) {}
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

  constructor(public errorMessage: DaffStateError) {}
}

export type DaffAuthActions =
  | DaffAuthStorageFailure
  | DaffAuthGuardLogout
  | DaffAuthServerSide
  | DaffAuthCheck
  | DaffAuthCheckSuccess
  | DaffAuthCheckFailure;
