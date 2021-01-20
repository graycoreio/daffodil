import { Action } from '@ngrx/store';
import { DaffStateError } from '@daffodil/core/state';
import { DaffCartAddress, DaffCart } from '@daffodil/cart';
export declare enum DaffCartAddressActionTypes {
    CartAddressUpdateAction = "[DaffCart] Cart Address Update Action",
    CartAddressUpdateSuccessAction = "[DaffCart] Cart Address Update Success Action",
    CartAddressUpdateFailureAction = "[DaffCart] Cart Address Update Failure Action"
}
/**
 * Triggers the update of both the shipping and billing address of the cart.
 */
export declare class DaffCartAddressUpdate<T extends DaffCartAddress = DaffCartAddress> implements Action {
    payload: T;
    readonly type = DaffCartAddressActionTypes.CartAddressUpdateAction;
    constructor(payload: T);
}
/**
 * Indicates the successful update of both the shipping and billing address of the cart.
 */
export declare class DaffCartAddressUpdateSuccess<T extends DaffCart = DaffCart> implements Action {
    payload: Partial<T>;
    readonly type = DaffCartAddressActionTypes.CartAddressUpdateSuccessAction;
    constructor(payload: Partial<T>);
}
/**
 * Indicates the failed update of either the shipping or billing address of the cart.
 */
export declare class DaffCartAddressUpdateFailure implements Action {
    payload: DaffStateError;
    readonly type = DaffCartAddressActionTypes.CartAddressUpdateFailureAction;
    constructor(payload: DaffStateError);
}
export declare type DaffCartAddressActions<T extends DaffCartAddress = DaffCartAddress, V extends DaffCart = DaffCart> = DaffCartAddressUpdate<T> | DaffCartAddressUpdateSuccess<V> | DaffCartAddressUpdateFailure;
