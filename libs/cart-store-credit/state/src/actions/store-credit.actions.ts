import { Action } from '@ngrx/store';

import { DaffCartWithStoreCredit } from '@daffodil/cart-store-credit';
import { DaffStateError } from '@daffodil/core/state';

/**
 * The cart store credit action types enum.
 */
export enum DaffCartStoreCreditActionTypes {
  StoreCreditApplyAction = '[@daffodil/cart-store-credit] Store Credit Apply Action',
  StoreCreditApplySuccessAction = '[@daffodil/cart-store-credit] Store Credit Apply Success Action',
  StoreCreditApplyFailureAction = '[@daffodil/cart-store-credit] Store Credit Apply Failure Action',
  StoreCreditRemoveAction = '[@daffodil/cart-store-credit] Store Credit Remove Action',
  StoreCreditRemoveSuccessAction = '[@daffodil/cart-store-credit] Store Credit Remove Success Action',
  StoreCreditRemoveFailureAction = '[@daffodil/cart-store-credit] Store Credit Remove Failure Action',
  StoreCreditClearErrorsAction = '[@daffodil/cart-store-credit] Store Credit Clear Errors Action',
}

/**
 * Loads the store credit of the current cart.
 */
export class DaffCartStoreCreditApply implements Action {
  readonly type = DaffCartStoreCreditActionTypes.StoreCreditApplyAction;
}

/**
 * Indicates a successful apply of the cart's store credit.
 */
export class DaffCartStoreCreditApplySuccess<T extends DaffCartWithStoreCredit = DaffCartWithStoreCredit> implements Action {
  readonly type = DaffCartStoreCreditActionTypes.StoreCreditApplySuccessAction;

  constructor(public payload: T) {}
}

/**
 * A failed cart store credit apply with the error message.
 */
export class DaffCartStoreCreditApplyFailure implements Action {
  readonly type = DaffCartStoreCreditActionTypes.StoreCreditApplyFailureAction;

  constructor(public payload: DaffStateError[]) {}
}

/**
 * Loads the store credit of the current cart.
 */
export class DaffCartStoreCreditRemove implements Action {
  readonly type = DaffCartStoreCreditActionTypes.StoreCreditRemoveAction;
}

/**
 * Indicates a successful apply of the cart's store credit.
 */
export class DaffCartStoreCreditRemoveSuccess<T extends DaffCartWithStoreCredit = DaffCartWithStoreCredit> implements Action {
  readonly type = DaffCartStoreCreditActionTypes.StoreCreditRemoveSuccessAction;

  constructor(public payload: T) {}
}

/**
 * A failed cart store credit apply with the error message.
 */
export class DaffCartStoreCreditRemoveFailure implements Action {
  readonly type = DaffCartStoreCreditActionTypes.StoreCreditRemoveFailureAction;

  constructor(public payload: DaffStateError[]) {}
}

/**
 * An action to clear all errors in state.
 */
export class DaffCartStoreCreditClearErrors implements Action {
  readonly type = DaffCartStoreCreditActionTypes.StoreCreditClearErrorsAction;
}

/**
 * A union of the cart action types.
 */
export type DaffCartStoreCreditActions<
  TCart extends DaffCartWithStoreCredit = DaffCartWithStoreCredit,
> =
  | DaffCartStoreCreditApply
  | DaffCartStoreCreditApplySuccess<TCart>
  | DaffCartStoreCreditApplyFailure
  | DaffCartStoreCreditRemove
  | DaffCartStoreCreditRemoveSuccess<TCart>
  | DaffCartStoreCreditRemoveFailure
  | DaffCartStoreCreditClearErrors;
