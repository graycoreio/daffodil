import { Action } from '@ngrx/store';

import {
  DaffAuthorizenetPaymentRequest,
  DaffAuthorizeNetTokenRequest,
} from '@daffodil/authorizenet';
import { DaffCartAddress } from '@daffodil/cart';
import { DaffIdentifiable } from '@daffodil/core';
import { DaffStateError } from '@daffodil/core/state';
import { DaffPersonalAddress } from '@daffodil/geography';
import { DaffPaymentGenerateToken } from '@daffodil/payment/state';

export enum DaffAuthorizeNetActionTypes {
  UpdatePaymentAction = '[@daffodil/authorizenet] Update Payment',
  UpdatePaymentSuccessAction = '[@daffodil/authorizenet] Update Payment Success',
  UpdatePaymentFailureAction = '[@daffodil/authorizenet] Update Payment Failure',
  ApplyPaymentAction = '[@daffodil/authorizenet] Apply Payment',
  LoadAcceptJsAction = '[@daffodil/authorizenet] Load Accept Js',
  LoadAcceptJsSuccessAction = '[@daffodil/authorizenet] Load Accept Js Success',
  LoadAcceptJsFailureAction = '[@daffodil/authorizenet] Load Accept Js Failure'
}

/**
 * An action triggered to initialize a generate token request.
 *
 * @param payload - An DaffAuthorizeNetRequestData object.
 */
export class DaffAuthorizeNetUpdatePayment<
  T extends DaffAuthorizeNetTokenRequest = DaffAuthorizeNetTokenRequest,
  V extends DaffCartAddress = DaffCartAddress
> implements Action {
  readonly type = DaffAuthorizeNetActionTypes.UpdatePaymentAction;

  constructor(public tokenRequest: T, public address: Partial<V>) { }
}

/**
 * An action triggered upon successfully updating the payment method.
 *
 * @param payload - A string that is the payment nonce for a credit card.
 */
export class DaffAuthorizeNetUpdatePaymentSuccess implements Action {
  readonly type = DaffAuthorizeNetActionTypes.UpdatePaymentSuccessAction;
}

/**
 * An action triggered upon failing to update the payment method.
 *
 * @param payload - A string that is an error message.
 */
export class DaffAuthorizeNetUpdatePaymentFailure implements Action {
  readonly type = DaffAuthorizeNetActionTypes.UpdatePaymentFailureAction;

  constructor(public payload: DaffStateError) { }
}

export class DaffLoadAcceptJs implements Action {
  readonly type = DaffAuthorizeNetActionTypes.LoadAcceptJsAction;
}

/**
 * Indicates that the AcceptJs library has loaded successfully.
 */
export class DaffLoadAcceptJsSuccess implements Action {
  readonly type = DaffAuthorizeNetActionTypes.LoadAcceptJsSuccessAction;
}

/**
 * Indicates that the AcceptJs library has failed to load
 */
export class DaffLoadAcceptJsFailure implements Action {
  readonly type = DaffAuthorizeNetActionTypes.LoadAcceptJsFailureAction;

  constructor(public payload: DaffStateError) {};
}

/**
 * Triggers the application of an authorize.net payment.
 */
export class DaffAuthorizenetApplyPayment implements DaffPaymentGenerateToken<DaffAuthorizenetPaymentRequest> {
  readonly type = DaffAuthorizeNetActionTypes.ApplyPaymentAction;

  constructor(
    public request: DaffAuthorizenetPaymentRequest,
    public address?: DaffPersonalAddress | DaffIdentifiable,
  ) {};
}

export type DaffAuthorizeNetActions<
  T extends DaffAuthorizeNetTokenRequest = DaffAuthorizeNetTokenRequest
> =
	| DaffAuthorizeNetUpdatePayment<T>
	| DaffAuthorizeNetUpdatePaymentSuccess
	| DaffAuthorizeNetUpdatePaymentFailure
	| DaffAuthorizenetApplyPayment
	| DaffLoadAcceptJsSuccess
	| DaffLoadAcceptJsFailure
	| DaffLoadAcceptJs;
