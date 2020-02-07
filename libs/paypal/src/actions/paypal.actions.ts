import { Action } from '@ngrx/store';

import { DaffPaypalTokenRequest } from '../models/paypal-token-request';
import { DaffPaypalTokenResponse } from '../models/paypal-token-response';

export enum DaffPaypalActionTypes {
  GeneratePaypalExpressTokenAction = '[Daff Paypal] Generate Express Token Action',
  GeneratePaypalExpressTokenSuccessAction = '[Daff Paypal] Generate Express Token Success Action',
  GeneratePaypalExpressTokenFailureAction = '[Daff Paypal] Generate Express Token Failure Action'
}

export class DaffGeneratePaypalExpressToken<T extends DaffPaypalTokenRequest> implements Action {
  readonly type = DaffPaypalActionTypes.GeneratePaypalExpressTokenAction;

  constructor(public payload: T) {}
}

export class DaffGeneratePaypalExpressTokenSuccess<T extends DaffPaypalTokenResponse> implements Action {
  readonly type = DaffPaypalActionTypes.GeneratePaypalExpressTokenSuccessAction;

  constructor(public payload: T) {}
}

export class DaffGeneratePaypalExpressTokenFailure implements Action {
	readonly type = DaffPaypalActionTypes.GeneratePaypalExpressTokenFailureAction;
	
	constructor(public payload: string) {}
}

export type DaffPaypalActions<T extends DaffPaypalTokenRequest, V extends DaffPaypalTokenResponse> =
    | DaffGeneratePaypalExpressToken<T>
    | DaffGeneratePaypalExpressTokenSuccess<V>
    | DaffGeneratePaypalExpressTokenFailure;
