import { Action } from '@ngrx/store';
import { DaffStateError } from '@daffodil/core/state';
import { DaffCartPaymentMethod, DaffCart, DaffCartAddress } from '@daffodil/cart';
export declare enum DaffCartPaymentActionTypes {
    CartPaymentLoadAction = "[DaffCart] Payment Load Action",
    CartPaymentLoadSuccessAction = "[DaffCart] Payment Load Success Action",
    CartPaymentLoadFailureAction = "[DaffCart] Payment Load Failure Action",
    CartPaymentUpdateAction = "[DaffCart] Payment Update Action",
    CartPaymentUpdateSuccessAction = "[DaffCart] Payment Update Success Action",
    CartPaymentUpdateFailureAction = "[DaffCart] Payment Update Failure Action",
    CartPaymentUpdateWithBillingAction = "[DaffCart] Payment Update With Billing Action",
    CartPaymentUpdateWithBillingSuccessAction = "[DaffCart] Payment Update With Billing Success Action",
    CartPaymentUpdateWithBillingFailureAction = "[DaffCart] Payment Update With Billing Failure Action",
    CartPaymentRemoveAction = "[DaffCart] Payment Remove Action",
    CartPaymentRemoveSuccessAction = "[DaffCart] Payment Remove Success Action",
    CartPaymentRemoveFailureAction = "[DaffCart] Payment Remove Failure Action",
    CartPaymentMethodAddAction = "[DaffCart] Payment Method Add Action"
}
export declare class DaffCartPaymentLoad implements Action {
    readonly type = DaffCartPaymentActionTypes.CartPaymentLoadAction;
}
export declare class DaffCartPaymentLoadSuccess<T extends DaffCartPaymentMethod = DaffCartPaymentMethod> implements Action {
    payload: T;
    readonly type = DaffCartPaymentActionTypes.CartPaymentLoadSuccessAction;
    constructor(payload: T);
}
export declare class DaffCartPaymentLoadFailure implements Action {
    payload: DaffStateError;
    readonly type = DaffCartPaymentActionTypes.CartPaymentLoadFailureAction;
    constructor(payload: DaffStateError);
}
export declare class DaffCartPaymentUpdate<T extends DaffCartPaymentMethod = DaffCartPaymentMethod> implements Action {
    payload: Partial<T>;
    readonly type = DaffCartPaymentActionTypes.CartPaymentUpdateAction;
    constructor(payload: Partial<T>);
}
export declare class DaffCartPaymentUpdateSuccess<T extends DaffCart = DaffCart> implements Action {
    payload: Partial<T>;
    readonly type = DaffCartPaymentActionTypes.CartPaymentUpdateSuccessAction;
    constructor(payload: Partial<T>);
}
export declare class DaffCartPaymentUpdateFailure implements Action {
    payload: DaffStateError;
    readonly type = DaffCartPaymentActionTypes.CartPaymentUpdateFailureAction;
    constructor(payload: DaffStateError);
}
/**
 * Triggers an update of the cart's selected payment method and billing address.
 *
 * @param payment The payment method.
 * @param address The billing address.
 */
export declare class DaffCartPaymentUpdateWithBilling<T extends DaffCartPaymentMethod = DaffCartPaymentMethod, R extends DaffCartAddress = DaffCartAddress> implements Action {
    payment: Partial<T>;
    address: Partial<R>;
    readonly type = DaffCartPaymentActionTypes.CartPaymentUpdateWithBillingAction;
    constructor(payment: Partial<T>, address: Partial<R>);
}
/**
 * Indicates the success of an update of the cart's selected payment method and billing address.
 *
 * @param payload The updated cart.
 */
export declare class DaffCartPaymentUpdateWithBillingSuccess<T extends DaffCart = DaffCart> implements Action {
    payload: Partial<T>;
    readonly type = DaffCartPaymentActionTypes.CartPaymentUpdateWithBillingSuccessAction;
    constructor(payload: Partial<T>);
}
/**
 * Indicates the failure of an update of the cart's selected payment method and billing address.
 *
 * @param payload The error message.
 */
export declare class DaffCartPaymentUpdateWithBillingFailure implements Action {
    payload: DaffStateError;
    readonly type = DaffCartPaymentActionTypes.CartPaymentUpdateWithBillingFailureAction;
    constructor(payload: DaffStateError);
}
export declare class DaffCartPaymentRemove implements Action {
    readonly type = DaffCartPaymentActionTypes.CartPaymentRemoveAction;
}
export declare class DaffCartPaymentRemoveSuccess implements Action {
    readonly type = DaffCartPaymentActionTypes.CartPaymentRemoveSuccessAction;
}
export declare class DaffCartPaymentRemoveFailure implements Action {
    payload: DaffStateError;
    readonly type = DaffCartPaymentActionTypes.CartPaymentRemoveFailureAction;
    constructor(payload: DaffStateError);
}
/**
 * This action is temporary until custom reducers can be injected by the @daffodil/paymentSource modules. Right now,
 * the payment modules need a way to update cart state with a payment token.
 *
 * todo: remove when possible.
 */
export declare class DaffCartPaymentMethodAdd<T extends DaffCartPaymentMethod = DaffCartPaymentMethod> implements Action {
    payload: T;
    readonly type = DaffCartPaymentActionTypes.CartPaymentMethodAddAction;
    constructor(payload: T);
}
export declare type DaffCartPaymentActions<T extends DaffCartPaymentMethod = DaffCartPaymentMethod, V extends DaffCart = DaffCart, R extends DaffCartAddress = DaffCartAddress> = DaffCartPaymentLoad | DaffCartPaymentLoadSuccess<T> | DaffCartPaymentLoadFailure | DaffCartPaymentUpdate<T> | DaffCartPaymentUpdateSuccess<V> | DaffCartPaymentUpdateFailure | DaffCartPaymentUpdateWithBilling<T, R> | DaffCartPaymentUpdateWithBillingSuccess<V> | DaffCartPaymentUpdateWithBillingFailure | DaffCartPaymentRemove | DaffCartPaymentRemoveSuccess | DaffCartPaymentRemoveFailure | DaffCartPaymentMethodAdd<T>;
