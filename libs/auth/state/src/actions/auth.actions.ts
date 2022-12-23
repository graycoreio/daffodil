import { Action } from '@ngrx/store';

import { DaffStateError } from '@daffodil/core/state';

export enum DaffAuthActionTypes {
  AuthGuardCheckAction = '[@daffodil/auth] Auth Guard Check Action',
  AuthGuardCheckCompletionAction = '[@daffodil/auth] Auth Guard Check Completion Action',
  AuthStorageFailureAction = '[@daffodil/auth] Auth Storage Failure Action',
  AuthServerSideAction = '[@daffodil/auth] Auth Server Side Action',
  AuthCheckAction = '[@daffodil/auth] Auth Check Action',
  AuthCheckSuccessAction = '[@daffodil/auth] Auth Check Success Action',
  AuthCheckFailureAction = '[@daffodil/auth] Auth Check Failure Action',
  AuthCompleteAction = '[@daffodil/auth] Auth Complete Action',
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

/**
 * An action triggered when the user authentication flow is completed.
 * The auth token is in storage at this point.
 */
export class DaffAuthComplete implements Action {
  readonly type = DaffAuthActionTypes.AuthCompleteAction;
}

export type DaffAuthActions =
  | DaffAuthGuardCheckCompletion
  | DaffAuthGuardCheck
  | DaffAuthStorageFailure
  | DaffAuthServerSide
  | DaffAuthCheck
  | DaffAuthCheckSuccess
  | DaffAuthCheckFailure
  | DaffAuthComplete;
