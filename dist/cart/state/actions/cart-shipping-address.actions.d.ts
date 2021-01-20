import { Action } from '@ngrx/store';
import { DaffStateError } from '@daffodil/core/state';
import { DaffCartAddress, DaffCart } from '@daffodil/cart';
export declare enum DaffCartShippingAddressActionTypes {
    CartShippingAddressLoadAction = "[DaffCart] Shipping Address Load Action",
    CartShippingAddressLoadSuccessAction = "[DaffCart] Shipping Address Load Success Action",
    CartShippingAddressLoadFailureAction = "[DaffCart] Shipping Address Load Failure Action",
    CartShippingAddressUpdateAction = "[DaffCart] Shipping Address Update Action",
    CartShippingAddressUpdateSuccessAction = "[DaffCart] Shipping Address Update Success Action",
    CartShippingAddressUpdateFailureAction = "[DaffCart] Shipping Address Update Failure Action"
}
export declare class DaffCartShippingAddressLoad implements Action {
    readonly type = DaffCartShippingAddressActionTypes.CartShippingAddressLoadAction;
}
export declare class DaffCartShippingAddressLoadSuccess<T extends DaffCartAddress = DaffCartAddress> implements Action {
    payload: T;
    readonly type = DaffCartShippingAddressActionTypes.CartShippingAddressLoadSuccessAction;
    constructor(payload: T);
}
export declare class DaffCartShippingAddressLoadFailure implements Action {
    payload: DaffStateError;
    readonly type = DaffCartShippingAddressActionTypes.CartShippingAddressLoadFailureAction;
    constructor(payload: DaffStateError);
}
export declare class DaffCartShippingAddressUpdate<T extends DaffCartAddress = DaffCartAddress> implements Action {
    payload: Partial<T>;
    readonly type = DaffCartShippingAddressActionTypes.CartShippingAddressUpdateAction;
    constructor(payload: Partial<T>);
}
export declare class DaffCartShippingAddressUpdateSuccess<T extends DaffCart = DaffCart> implements Action {
    payload: Partial<T>;
    readonly type = DaffCartShippingAddressActionTypes.CartShippingAddressUpdateSuccessAction;
    constructor(payload: Partial<T>);
}
export declare class DaffCartShippingAddressUpdateFailure implements Action {
    payload: DaffStateError;
    readonly type = DaffCartShippingAddressActionTypes.CartShippingAddressUpdateFailureAction;
    constructor(payload: DaffStateError);
}
export declare type DaffCartShippingAddressActions<T extends DaffCartAddress = DaffCartAddress, V extends DaffCart = DaffCart> = DaffCartShippingAddressLoad | DaffCartShippingAddressLoadSuccess<T> | DaffCartShippingAddressLoadFailure | DaffCartShippingAddressUpdate<T> | DaffCartShippingAddressUpdateSuccess<V> | DaffCartShippingAddressUpdateFailure;
