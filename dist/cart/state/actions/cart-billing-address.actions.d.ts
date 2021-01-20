import { Action } from '@ngrx/store';
import { DaffStateError } from '@daffodil/core/state';
import { DaffCartAddress, DaffCart } from '@daffodil/cart';
export declare enum DaffCartBillingAddressActionTypes {
    CartBillingAddressLoadAction = "[DaffCart] Billing Address Load Action",
    CartBillingAddressLoadSuccessAction = "[DaffCart] Billing Address Load Success Action",
    CartBillingAddressLoadFailureAction = "[DaffCart] Billing Address Load Failure Action",
    CartBillingAddressUpdateAction = "[DaffCart] Billing Address Update Action",
    CartBillingAddressUpdateSuccessAction = "[DaffCart] Billing Address Update Success Action",
    CartBillingAddressUpdateFailureAction = "[DaffCart] Billing Address Update Failure Action"
}
export declare class DaffCartBillingAddressLoad implements Action {
    readonly type = DaffCartBillingAddressActionTypes.CartBillingAddressLoadAction;
}
export declare class DaffCartBillingAddressLoadSuccess<T extends DaffCartAddress> implements Action {
    payload: T;
    readonly type = DaffCartBillingAddressActionTypes.CartBillingAddressLoadSuccessAction;
    constructor(payload: T);
}
export declare class DaffCartBillingAddressLoadFailure implements Action {
    payload: DaffStateError;
    readonly type = DaffCartBillingAddressActionTypes.CartBillingAddressLoadFailureAction;
    constructor(payload: DaffStateError);
}
export declare class DaffCartBillingAddressUpdate<T extends DaffCartAddress = DaffCartAddress> implements Action {
    payload: Partial<T>;
    readonly type = DaffCartBillingAddressActionTypes.CartBillingAddressUpdateAction;
    constructor(payload: Partial<T>);
}
export declare class DaffCartBillingAddressUpdateSuccess<T extends DaffCart = DaffCart> implements Action {
    payload: Partial<T>;
    readonly type = DaffCartBillingAddressActionTypes.CartBillingAddressUpdateSuccessAction;
    constructor(payload: Partial<T>);
}
export declare class DaffCartBillingAddressUpdateFailure implements Action {
    payload: DaffStateError;
    readonly type = DaffCartBillingAddressActionTypes.CartBillingAddressUpdateFailureAction;
    constructor(payload: DaffStateError);
}
export declare type DaffCartBillingAddressActions<T extends DaffCartAddress = DaffCartAddress, V extends DaffCart = DaffCart> = DaffCartBillingAddressLoad | DaffCartBillingAddressLoadSuccess<T> | DaffCartBillingAddressLoadFailure | DaffCartBillingAddressUpdate<T> | DaffCartBillingAddressUpdateSuccess<V> | DaffCartBillingAddressUpdateFailure;
