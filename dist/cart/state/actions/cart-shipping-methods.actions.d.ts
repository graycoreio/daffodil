import { Action } from '@ngrx/store';
import { DaffStateError } from '@daffodil/core/state';
import { DaffCartShippingRate } from '@daffodil/cart';
export declare enum DaffCartShippingMethodsActionTypes {
    CartShippingMethodsLoadAction = "[DaffCart] Shipping Methods Load Action",
    CartShippingMethodsLoadSuccessAction = "[DaffCart] Shipping Methods Load Success Action",
    CartShippingMethodsLoadFailureAction = "[DaffCart] Shipping Methods Load Failure Action"
}
export declare class DaffCartShippingMethodsLoad implements Action {
    readonly type = DaffCartShippingMethodsActionTypes.CartShippingMethodsLoadAction;
    constructor();
}
export declare class DaffCartShippingMethodsLoadSuccess<T extends DaffCartShippingRate = DaffCartShippingRate> implements Action {
    payload: T[];
    readonly type = DaffCartShippingMethodsActionTypes.CartShippingMethodsLoadSuccessAction;
    constructor(payload: T[]);
}
export declare class DaffCartShippingMethodsLoadFailure implements Action {
    payload: DaffStateError;
    readonly type = DaffCartShippingMethodsActionTypes.CartShippingMethodsLoadFailureAction;
    constructor(payload: DaffStateError);
}
export declare type DaffCartShippingMethodsActions<T extends DaffCartShippingRate = DaffCartShippingRate> = DaffCartShippingMethodsLoad | DaffCartShippingMethodsLoadSuccess<T> | DaffCartShippingMethodsLoadFailure;
