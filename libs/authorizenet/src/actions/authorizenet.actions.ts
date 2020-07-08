import { Action } from '@ngrx/store';

import { DaffAuthorizeNetTokenRequest } from '../models/request/authorize-net-token-request';
import { DaffCartAddress } from '@daffodil/cart';

export enum DaffAuthorizeNetActionTypes {
  UpdatePaymentAction = '[Daff-Authorize-Net] Generate Token',
  UpdatePaymentSuccessAction = '[Daff-Authorize-Net] Generate Token Success',
	UpdatePaymentFailureAction = '[Daff-Authorize-Net] Generate Token Failure',
	LoadAcceptJsAction = '[Daff-Authorize-Net] Load Accept Js'
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

export type DaffAuthorizeNetActions<
	T extends DaffAuthorizeNetTokenRequest = DaffAuthorizeNetTokenRequest
> =
	| DaffAuthorizeNetUpdatePayment<T>
	| DaffAuthorizeNetUpdatePaymentSuccess
	| DaffAuthorizeNetUpdatePaymentFailure
	| DaffLoadAcceptJs;
