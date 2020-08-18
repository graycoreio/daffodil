import { Action } from '@ngrx/store';

import { DaffCartAddress } from '@daffodil/cart';

import { DaffAuthorizeNetTokenRequest } from '../models/request/authorize-net-token-request';

export enum DaffAuthorizeNetActionTypes {
  UpdatePaymentAction = '[Daff-Authorize-Net] Update Payment',
  UpdatePaymentSuccessAction = '[Daff-Authorize-Net] Update Payment Success',
	UpdatePaymentFailureAction = '[Daff-Authorize-Net] Update Payment Failure',
	LoadAcceptJsAction = '[Daff-Authorize-Net] Load Accept Js',
	LoadAcceptJsSuccessAction = '[Daff-Authorize-Net] Load Accept Js Success',
	LoadAcceptJsFailureAction = '[Daff-Authorize-Net] Load Accept Js Failure'
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

	constructor(public tokenRequest: T, public address: V) { }
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

	constructor(public payload: string) { }
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

	constructor(public payload: string) {};
}

export type DaffAuthorizeNetActions<
	T extends DaffAuthorizeNetTokenRequest = DaffAuthorizeNetTokenRequest
> =
	| DaffAuthorizeNetUpdatePayment<T>
	| DaffAuthorizeNetUpdatePaymentSuccess
	| DaffAuthorizeNetUpdatePaymentFailure
	| DaffLoadAcceptJsSuccess
	| DaffLoadAcceptJsFailure
	| DaffLoadAcceptJs;
