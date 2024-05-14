import { Action } from '@ngrx/store';

import {
  DaffCartPaymentMethod,
  DaffCart,
  DaffCartAddress,
} from '@daffodil/cart';
import {
  DaffFailureAction,
  DaffStateError,
} from '@daffodil/core/state';

import { DaffCartRetrievalAction } from '../cart-retrieval/public_api';

/**
 * An enum for the cart payment action types.
 */
export enum DaffCartPaymentActionTypes {
  CartPaymentLoadAction = '[@daffodil/cart] Payment Load Action',
  CartPaymentLoadSuccessAction = '[@daffodil/cart] Payment Load Success Action',
  CartPaymentLoadFailureAction = '[@daffodil/cart] Payment Load Failure Action',
  CartPaymentUpdateAction = '[@daffodil/cart] Payment Update Action',
  CartPaymentUpdateSuccessAction = '[@daffodil/cart] Payment Update Success Action',
  CartPaymentUpdateFailureAction = '[@daffodil/cart] Payment Update Failure Action',
  CartPaymentUpdateWithBillingAction = '[@daffodil/cart] Payment Update With Billing Action',
  CartPaymentUpdateWithBillingSuccessAction = '[@daffodil/cart] Payment Update With Billing Success Action',
  CartPaymentUpdateWithBillingFailureAction = '[@daffodil/cart] Payment Update With Billing Failure Action',
  CartPaymentRemoveAction = '[@daffodil/cart] Payment Remove Action',
  CartPaymentRemoveSuccessAction = '[@daffodil/cart] Payment Remove Success Action',
  CartPaymentRemoveFailureAction = '[@daffodil/cart] Payment Remove Failure Action',
  CartPaymentMethodAddAction = '[@daffodil/cart] Payment Method Add Action'
}

/**
 * Triggers the load of the cart's selected payment method.
 */
export class DaffCartPaymentLoad implements Action {
  readonly type = DaffCartPaymentActionTypes.CartPaymentLoadAction;
}

/**
 * Indicates the successful load of the cart's selected payment method.
 */
export class DaffCartPaymentLoadSuccess<T extends DaffCart = DaffCart> implements Action {
  readonly type = DaffCartPaymentActionTypes.CartPaymentLoadSuccessAction;

  constructor(public payload: T['payment']) {}
}

/**
 * Indicates the failed load of the cart's selected payment method.
 */
export class DaffCartPaymentLoadFailure implements DaffFailureAction {
  readonly type = DaffCartPaymentActionTypes.CartPaymentLoadFailureAction;

  constructor(public payload: DaffStateError[]) {}
}

/**
 * Triggers the update of the cart's selected payment method.
 */
export class DaffCartPaymentUpdate<T extends DaffCart = DaffCart> implements Action {
  readonly type = DaffCartPaymentActionTypes.CartPaymentUpdateAction;

  constructor(public payload: Partial<T['payment']>) {}
}

/**
 * Indicates the successful update of the cart's selected payment method.
 */
export class DaffCartPaymentUpdateSuccess<T extends DaffCart = DaffCart> implements DaffCartRetrievalAction<T> {
  readonly type = DaffCartPaymentActionTypes.CartPaymentUpdateSuccessAction;

  constructor(public payload: Partial<T>) {}
}

/**
 * Indicates the failed update of the cart's selected payment method.
 */
export class DaffCartPaymentUpdateFailure implements DaffFailureAction {
  readonly type = DaffCartPaymentActionTypes.CartPaymentUpdateFailureAction;

  constructor(public payload: DaffStateError[]) {}
}

/**
 * Triggers an update of the cart's selected payment method and billing address.
 *
 * @param payment The payment method.
 * @param address The billing address.
 */
export class DaffCartPaymentUpdateWithBilling<T extends DaffCart = DaffCart> implements Action {
  readonly type = DaffCartPaymentActionTypes.CartPaymentUpdateWithBillingAction;

  constructor(public payment: Partial<T['payment']>, public address: Partial<T['billing_address']>) {}
}

/**
 * Indicates the success of an update of the cart's selected payment method and billing address.
 *
 * @param payload The updated cart.
 */
export class DaffCartPaymentUpdateWithBillingSuccess<T extends DaffCart = DaffCart> implements DaffCartRetrievalAction<T> {
  readonly type = DaffCartPaymentActionTypes.CartPaymentUpdateWithBillingSuccessAction;

  constructor(public payload: Partial<T>) {}
}

/**
 * Indicates the failure of an update of the cart's selected payment method and billing address.
 *
 * @param payload The error message.
 */
export class DaffCartPaymentUpdateWithBillingFailure implements DaffFailureAction {
  readonly type = DaffCartPaymentActionTypes.CartPaymentUpdateWithBillingFailureAction;

  constructor(public payload: DaffStateError[]) {}
}

/**
 * Triggers the removal of the cart's selected payment method.
 */
export class DaffCartPaymentRemove implements Action {
  readonly type = DaffCartPaymentActionTypes.CartPaymentRemoveAction;
}

/**
 * Indicates the successful removal of the cart's selected payment method.
 */
export class DaffCartPaymentRemoveSuccess implements Action {
  readonly type = DaffCartPaymentActionTypes.CartPaymentRemoveSuccessAction;
}

/**
 * Indicates the failed removal of the cart's selected payment method.
 */
export class DaffCartPaymentRemoveFailure implements DaffFailureAction {
  readonly type = DaffCartPaymentActionTypes.CartPaymentRemoveFailureAction;

  constructor(public payload: DaffStateError[]) {}
}

/**
 * This action is temporary until custom reducers can be injected by the @daffodil/paymentSource modules. Right now,
 * the payment modules need a way to update cart state with a payment token.
 *
 * todo: remove when possible.
 */
export class DaffCartPaymentMethodAdd<T extends DaffCart = DaffCart> implements Action {
  readonly type = DaffCartPaymentActionTypes.CartPaymentMethodAddAction;

  constructor(public payload: T['payment']) {}
}

/**
 * A union of all the cart payment action classes.
 */
export type DaffCartPaymentActions<T extends DaffCart = DaffCart> =
  | DaffCartPaymentLoad
  | DaffCartPaymentLoadSuccess<T>
  | DaffCartPaymentLoadFailure
  | DaffCartPaymentUpdate<T>
  | DaffCartPaymentUpdateSuccess<T>
  | DaffCartPaymentUpdateFailure
  | DaffCartPaymentUpdateWithBilling<T>
  | DaffCartPaymentUpdateWithBillingSuccess<T>
  | DaffCartPaymentUpdateWithBillingFailure
  | DaffCartPaymentRemove
  | DaffCartPaymentRemoveSuccess
  | DaffCartPaymentRemoveFailure
  | DaffCartPaymentMethodAdd<T>;
