import { Action } from '@ngrx/store';

import { DaffAuthResetPasswordInfo } from '@daffodil/auth';
import { DaffStateError } from '@daffodil/core/state';

export enum DaffAuthResetPasswordActionTypes {
  SendResetEmailAction = '[@daffodil/auth] Send Reset Email Action',
  SendResetEmailSuccessAction = '[@daffodil/auth] Send Reset Email Success Action',
  SendResetEmailFailureAction = '[@daffodil/auth] Send Reset Email Failure Action',
  ResetPasswordAction = '[@daffodil/auth] Reset Password Action',
  ResetPasswordSuccessAction = '[@daffodil/auth] Reset Password Success Action',
  ResetPasswordFailureAction = '[@daffodil/auth] Reset Password Failure Action',
  ResetPasswordLandingAction = '[@daffodil/auth] Reset Password Landing Action',
}

/**
 * An action triggered to send the specified customer an email to reset their password.
 */
export class DaffSendResetEmail implements Action {
  readonly type = DaffAuthResetPasswordActionTypes.SendResetEmailAction;

  constructor(public email: string) {}
}

/**
 * An action triggered upon a successfully sent reset password email.
 */
export class DaffSendResetEmailSuccess implements Action {
  readonly type = DaffAuthResetPasswordActionTypes.SendResetEmailSuccessAction;
}

/**
 * An action triggered upon a failure to send the reset password email.
 *
 * @param errorMessage - an error message
 */
export class DaffSendResetEmailFailure implements Action {
  readonly type = DaffAuthResetPasswordActionTypes.SendResetEmailFailureAction;

  constructor(public errorMessage: DaffStateError) {}
}

/**
 * An action triggered to initialize a logout request.
 */
export class DaffResetPassword<T extends DaffAuthResetPasswordInfo = DaffAuthResetPasswordInfo> implements Action {
  readonly type = DaffAuthResetPasswordActionTypes.ResetPasswordAction;

  constructor(public info: T, public autoLogin = true) {}
}

/**
 * An action triggered upon a successful logout.
 */
export class DaffResetPasswordSuccess implements Action {
  readonly type = DaffAuthResetPasswordActionTypes.ResetPasswordSuccessAction;
}

/**
 * An action triggered upon a failed logout request.
 *
 * @param errorMessage - an error message
 */
export class DaffResetPasswordFailure implements Action {
  readonly type = DaffAuthResetPasswordActionTypes.ResetPasswordFailureAction;

  constructor(public errorMessage: DaffStateError) {}
}

/**
 * An action triggered upon the user navigating to the reset password page from the link in their email.
 *
 * @param token - The token with which the password can be reset
 */
export class DaffResetPasswordLanding implements Action {
  readonly type = DaffAuthResetPasswordActionTypes.ResetPasswordLandingAction;

  constructor(public token: DaffAuthResetPasswordInfo['token']) {}
}

export type DaffAuthResetPasswordActions<
  T extends DaffAuthResetPasswordInfo = DaffAuthResetPasswordInfo,
> =
  | DaffSendResetEmail
  | DaffSendResetEmailSuccess
  | DaffSendResetEmailFailure
  | DaffResetPassword<T>
  | DaffResetPasswordSuccess
  | DaffResetPasswordFailure
  | DaffResetPasswordLanding;
