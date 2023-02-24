import { Action } from '@ngrx/store';

import { DaffIdentifiable } from '@daffodil/core';
import { DaffStateError } from '@daffodil/core/state';
import { DaffPersonalAddress } from '@daffodil/geography';
import {
  DaffPaymentRequest,
  DaffPaymentResponse,
} from '@daffodil/payment';

/**
 * The payment action types enum.
 */
export enum DaffPaymentActionTypes {
  GenerateTokenSuccessAction = '[@daffodil/payment] Generate Token Success Action',
  GenerateTokenFailureAction = '[@daffodil/payment] Generate Token Failure Action',
}

/**
 * Generates a payment token.
 *
 * @param query The payment query.
 */
export interface DaffPaymentGenerateToken<T extends DaffPaymentRequest = DaffPaymentRequest> extends Action {
  readonly request: T;
  readonly address?: DaffPersonalAddress | DaffIdentifiable;
}

/**
 * Indicates a successful generation of a payment token.
 */
export class DaffPaymentGenerateTokenSuccess<T extends DaffPaymentResponse = DaffPaymentResponse> implements Action {
  readonly type = DaffPaymentActionTypes.GenerateTokenSuccessAction;

  constructor(public payload: T) {}
}

/**
 * A failed payment with the error message.
 */
export class DaffPaymentGenerateTokenFailure implements Action {
  readonly type = DaffPaymentActionTypes.GenerateTokenFailureAction;

  constructor(public payload: DaffStateError) {}
}

/**
 * A union of the payment action types.
 */
export type DaffPaymentActions<
  T extends DaffPaymentResponse = DaffPaymentResponse,
  R extends DaffPaymentRequest = DaffPaymentRequest,
> =
  | DaffPaymentGenerateToken<R>
  | DaffPaymentGenerateTokenSuccess<T>
  | DaffPaymentGenerateTokenFailure;
