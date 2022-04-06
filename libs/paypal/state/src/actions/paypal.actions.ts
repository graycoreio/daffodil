import { Action } from '@ngrx/store';

import { DaffStateError } from '@daffodil/core/state';
import {
  DaffPaypalTokenRequest,
  DaffPaypalTokenResponse,
} from '@daffodil/paypal';

export enum DaffPaypalActionTypes {
  GeneratePaypalExpressTokenAction = '[Daff Paypal] Generate Express Token Action',
  GeneratePaypalExpressTokenSuccessAction = '[Daff Paypal] Generate Express Token Success Action',
  GeneratePaypalExpressTokenFailureAction = '[Daff Paypal] Generate Express Token Failure Action'
}

export class DaffGeneratePaypalExpressToken<T extends DaffPaypalTokenRequest = DaffPaypalTokenRequest> implements Action {
  readonly type = DaffPaypalActionTypes.GeneratePaypalExpressTokenAction;

  constructor(public payload: T) {}
}

export class DaffGeneratePaypalExpressTokenSuccess<T extends DaffPaypalTokenResponse = DaffPaypalTokenResponse> implements Action {
  readonly type = DaffPaypalActionTypes.GeneratePaypalExpressTokenSuccessAction;

  constructor(public payload: T) {}
}

export class DaffGeneratePaypalExpressTokenFailure implements Action {
  readonly type = DaffPaypalActionTypes.GeneratePaypalExpressTokenFailureAction;

  constructor(public payload: DaffStateError) {}
}

export type DaffPaypalActions<
  T extends DaffPaypalTokenRequest = DaffPaypalTokenRequest,
  V extends DaffPaypalTokenResponse = DaffPaypalTokenResponse
> =
    | DaffGeneratePaypalExpressToken<T>
    | DaffGeneratePaypalExpressTokenSuccess<V>
    | DaffGeneratePaypalExpressTokenFailure;
