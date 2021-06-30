import { Action } from '@ngrx/store';

import {
  DaffCartPaymentMethod,
  DaffCart,
  DaffCartAddress,
} from '@daffodil/cart';
import { DaffStateError } from '@daffodil/core/state';

/**
 * An enum for the cart payment action types.
 */
export enum DaffCartPaymentActionTypes {
  CartPaymentLoadAction = '[DaffCart] Payment Load Action',
  CartPaymentLoadSuccessAction = '[DaffCart] Payment Load Success Action',
  CartPaymentLoadFailureAction = '[DaffCart] Payment Load Failure Action',
  CartPaymentUpdateAction = '[DaffCart] Payment Update Action',
  CartPaymentUpdateSuccessAction = '[DaffCart] Payment Update Success Action',
  CartPaymentUpdateFailureAction = '[DaffCart] Payment Update Failure Action',
  CartPaymentUpdateWithBillingAction = '[DaffCart] Payment Update With Billing Action',
  CartPaymentUpdateWithBillingSuccessAction = '[DaffCart] Payment Update With Billing Success Action',
  CartPaymentUpdateWithBillingFailureAction = '[DaffCart] Payment Update With Billing Failure Action',
  CartPaymentRemoveAction = '[DaffCart] Payment Remove Action',
  CartPaymentRemoveSuccessAction = '[DaffCart] Payment Remove Success Action',
  CartPaymentRemoveFailureAction = '[DaffCart] Payment Remove Failure Action',
	CartPaymentMethodAddAction = '[DaffCart] Payment Method Add Action'
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
export class DaffCartPaymentLoadSuccess<T extends DaffCartPaymentMethod = DaffCartPaymentMethod> implements Action {
  readonly type = DaffCartPaymentActionTypes.CartPaymentLoadSuccessAction;

  constructor(public payload: T) {}
}

/**
 * Indicates the failed load of the cart's selected payment method.
 */
export class DaffCartPaymentLoadFailure implements Action {
  readonly type = DaffCartPaymentActionTypes.CartPaymentLoadFailureAction;

  constructor(public payload: DaffStateError) {}
}

/**
 * Triggers the update of the cart's selected payment method.
 */
export class DaffCartPaymentUpdate<T extends DaffCartPaymentMethod = DaffCartPaymentMethod> implements Action {
  readonly type = DaffCartPaymentActionTypes.CartPaymentUpdateAction;

  constructor(public payload: Partial<T>) {}
}

/**
 * Indicates the successful update of the cart's selected payment method.
 */
export class DaffCartPaymentUpdateSuccess<T extends DaffCart = DaffCart> implements Action {
  readonly type = DaffCartPaymentActionTypes.CartPaymentUpdateSuccessAction;

  constructor(public payload: Partial<T>) {}
}

/**
 * Indicates the failed update of the cart's selected payment method.
 */
export class DaffCartPaymentUpdateFailure implements Action {
  readonly type = DaffCartPaymentActionTypes.CartPaymentUpdateFailureAction;

  constructor(public payload: DaffStateError) {}
}

/**
 * Triggers an update of the cart's selected payment method and billing address.
 *
 * @param payment The payment method.
 * @param address The billing address.
 */
export class DaffCartPaymentUpdateWithBilling<
  T extends DaffCartPaymentMethod = DaffCartPaymentMethod,
  R extends DaffCartAddress = DaffCartAddress
> implements Action {
  readonly type = DaffCartPaymentActionTypes.CartPaymentUpdateWithBillingAction;

  constructor(public payment: Partial<T>, public address: Partial<R>) {}
}

/**
 * Indicates the success of an update of the cart's selected payment method and billing address.
 *
 * @param payload The updated cart.
 */
export class DaffCartPaymentUpdateWithBillingSuccess<T extends DaffCart = DaffCart> implements Action {
  readonly type = DaffCartPaymentActionTypes.CartPaymentUpdateWithBillingSuccessAction;

  constructor(public payload: Partial<T>) {}
}

/**
 * Indicates the failure of an update of the cart's selected payment method and billing address.
 *
 * @param payload The error message.
 */
export class DaffCartPaymentUpdateWithBillingFailure implements Action {
  readonly type = DaffCartPaymentActionTypes.CartPaymentUpdateWithBillingFailureAction;

  constructor(public payload: DaffStateError) {}
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
export class DaffCartPaymentRemoveFailure implements Action {
  readonly type = DaffCartPaymentActionTypes.CartPaymentRemoveFailureAction;

  constructor(public payload: DaffStateError) {}
}

/**
 * This action is temporary until custom reducers can be injected by the @daffodil/paymentSource modules. Right now,
 * the payment modules need a way to update cart state with a payment token.
 *
 * todo: remove when possible.
 */
export class DaffCartPaymentMethodAdd<T extends DaffCartPaymentMethod = DaffCartPaymentMethod> implements Action {
	readonly type = DaffCartPaymentActionTypes.CartPaymentMethodAddAction;

	constructor(public payload: T) {}
}

/**
 * A union of all the cart payment action classes.
 */
export type DaffCartPaymentActions<
  T extends DaffCartPaymentMethod = DaffCartPaymentMethod,
  V extends DaffCart = DaffCart,
  R extends DaffCartAddress = DaffCartAddress,
> =
  | DaffCartPaymentLoad
  | DaffCartPaymentLoadSuccess<T>
  | DaffCartPaymentLoadFailure
  | DaffCartPaymentUpdate<T>
  | DaffCartPaymentUpdateSuccess<V>
  | DaffCartPaymentUpdateFailure
  | DaffCartPaymentUpdateWithBilling<T, R>
  | DaffCartPaymentUpdateWithBillingSuccess<V>
  | DaffCartPaymentUpdateWithBillingFailure
  | DaffCartPaymentRemove
  | DaffCartPaymentRemoveSuccess
  | DaffCartPaymentRemoveFailure
	| DaffCartPaymentMethodAdd<T>;
