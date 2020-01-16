import { Action } from '@ngrx/store';

import { DaffAuthorizeNetTokenRequest } from '../models/request/authorize-net-token-request';

export enum DaffAuthorizeNetActionTypes {
  GenerateTokenAction = '[Daff-Authorize-Net] Generate Token',
  GenerateTokenSuccessAction = '[Daff-Authorize-Net] Generate Token Success',
  GenerateTokenFailureAction = '[Daff-Authorize-Net] Generate Token Failure'
}

/**
 * An action triggered to initialize a generate token request.
 * 
 * @param payload - An DaffAuthorizeNetRequestData object.
 */
export class DaffAuthorizeNetGenerateToken implements Action {
	readonly type = DaffAuthorizeNetActionTypes.GenerateTokenAction;

	constructor(public payload: DaffAuthorizeNetTokenRequest) { }
}

/**
 * An action triggered upon a successful token generation.
 * 
 * @param payload - A string that is the payment nonce for a credit card.
 */
export class DaffAuthorizeNetGenerateTokenSuccess implements Action {
  readonly type = DaffAuthorizeNetActionTypes.GenerateTokenSuccessAction;

  constructor(public payload: string) { }
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

export type DaffAuthorizeNetActions =
	| DaffAuthorizeNetGenerateToken
	| DaffAuthorizeNetGenerateTokenSuccess
	| DaffAuthorizeNetGenerateTokenFailure;
