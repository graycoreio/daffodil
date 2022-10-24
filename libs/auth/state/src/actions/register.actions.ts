import { Action } from '@ngrx/store';

import { DaffAccountRegistration } from '@daffodil/auth';
import { DaffStateError } from '@daffodil/core/state';

export enum DaffAuthRegisterActionTypes {
  RegisterAction = '[@daffodil/auth] Register Action',
  RegisterSuccessAction = '[@daffodil/auth] Register Success Action',
  RegisterFailureAction = '[@daffodil/auth] Register Failure Action',
}

/**
 * An action triggered to initialize a auth register request.
 *
 * @param registration
 */
export class DaffAuthRegister<T extends DaffAccountRegistration = DaffAccountRegistration> implements Action {
  readonly type = DaffAuthRegisterActionTypes.RegisterAction;

  constructor(public registration: T, public autoLogin = true) {}
}

/**
 * An action triggered upon a successful auth register request.
 *
 * @param token - the customer access token
 */
export class DaffAuthRegisterSuccess implements Action {
  readonly type = DaffAuthRegisterActionTypes.RegisterSuccessAction;

  constructor(public token?: string) {}
}

/**
 * An action triggered upon a failed auth request.
 *
 * @param errorMessage - an error message
 */
export class DaffAuthRegisterFailure implements Action {
  readonly type = DaffAuthRegisterActionTypes.RegisterFailureAction;

  constructor(public errorMessage: DaffStateError) {}
}

export type DaffAuthRegisterActions<
  T extends DaffAccountRegistration = DaffAccountRegistration,
> =
  | DaffAuthRegister<T>
  | DaffAuthRegisterSuccess
  | DaffAuthRegisterFailure;
