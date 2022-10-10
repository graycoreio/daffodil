import { Action } from '@ngrx/store';

import { DaffStateError } from '@daffodil/core/state';
import { DaffPaymentGenerateToken } from '@daffodil/payment/state';
import {
  DaffPaypalPaymentRequest,
  DaffPaypalExpressTokenRequest,
  DaffPaypalExpressTokenResponse,
} from '@daffodil/paypal';

export enum DaffPaypalActionTypes {
  ApplyPaymentAction = '[@daffodil/paypal] Apply Payment Action',
  GeneratePaypalExpressTokenAction = '[@daffodil/paypal] Generate Express Token Action',
  GeneratePaypalExpressTokenSuccessAction = '[@daffodil/paypal] Generate Express Token Success Action',
  GeneratePaypalExpressTokenFailureAction = '[@daffodil/paypal] Generate Express Token Failure Action'
}

export class DaffPaypalApplyPayment<T extends DaffPaypalPaymentRequest = DaffPaypalPaymentRequest> implements DaffPaymentGenerateToken<T> {
  readonly type = DaffPaypalActionTypes.ApplyPaymentAction;

  constructor(public request: T) {}
}

export class DaffGeneratePaypalExpressToken<T extends DaffPaypalExpressTokenRequest = DaffPaypalExpressTokenRequest> implements Action {
  readonly type = DaffPaypalActionTypes.GeneratePaypalExpressTokenAction;

  constructor(public payload: T) {}
}

export class DaffGeneratePaypalExpressTokenSuccess<T extends DaffPaypalExpressTokenResponse = DaffPaypalExpressTokenResponse> implements Action {
  readonly type = DaffPaypalActionTypes.GeneratePaypalExpressTokenSuccessAction;

  constructor(public payload: T) {}
}

export class DaffGeneratePaypalExpressTokenFailure implements Action {
  readonly type = DaffPaypalActionTypes.GeneratePaypalExpressTokenFailureAction;

  constructor(public payload: DaffStateError) {}
}

export type DaffPaypalActions<
  T extends DaffPaypalExpressTokenRequest = DaffPaypalExpressTokenRequest,
  V extends DaffPaypalExpressTokenResponse = DaffPaypalExpressTokenResponse
> =
    | DaffGeneratePaypalExpressToken<T>
    | DaffGeneratePaypalExpressTokenSuccess<V>
    | DaffGeneratePaypalExpressTokenFailure;
