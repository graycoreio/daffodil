import { Action } from '@ngrx/store';

import { DaffAuthorizeNetTokenRequest } from '../models/request/authorize-net-token-request';
import { DaffAuthorizeNetTokenResponse } from '../models/response/authorize-net-token-response';

export enum DaffAuthorizeNetActionTypes {
  GenerateTokenAction = '[Daff-Authorize-Net] Generate Token',
  GenerateTokenSuccessAction = '[Daff-Authorize-Net] Generate Token Success',
	GenerateTokenFailureAction = '[Daff-Authorize-Net] Generate Token Failure',
	LoadAcceptJsAction = '[Daff-Authorize-Net] Load Accept Js'
}

/**
 * An action triggered to initialize a generate token request.
 * 
 * @param payload - An DaffAuthorizeNetRequestData object.
 */
export class DaffAuthorizeNetGenerateToken<T extends DaffAuthorizeNetTokenRequest> implements Action {
	readonly type = DaffAuthorizeNetActionTypes.GenerateTokenAction;

	constructor(public payload: T) { }
}

/**
 * An action triggered upon a successful token generation.
 * 
 * @param payload - A string that is the payment nonce for a credit card.
 */
export class DaffAuthorizeNetGenerateTokenSuccess<T extends DaffAuthorizeNetTokenResponse> implements Action {
  readonly type = DaffAuthorizeNetActionTypes.GenerateTokenSuccessAction;

  constructor(public payload: T) { }
}

/**
 * An action triggered upon a failed token generation.
 * 
 * @param payload - A string that is an error message.
 */
export class DaffAuthorizeNetGenerateTokenFailure implements Action {
	readonly type = DaffAuthorizeNetActionTypes.GenerateTokenFailureAction;

	constructor(public payload: string) { }
}

export class DaffLoadAcceptJs implements Action {
	readonly type = DaffAuthorizeNetActionTypes.LoadAcceptJsAction;
}

export type DaffAuthorizeNetActions<T extends DaffAuthorizeNetTokenRequest, V extends DaffAuthorizeNetTokenResponse> =
	| DaffAuthorizeNetGenerateToken<T>
	| DaffAuthorizeNetGenerateTokenSuccess<V>
	| DaffAuthorizeNetGenerateTokenFailure
	| DaffLoadAcceptJs;
