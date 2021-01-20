import { Action } from '@ngrx/store';
import { DaffStateError } from '@daffodil/core/state';
import { DaffCartPaymentMethod, DaffCartOrderResult } from '@daffodil/cart';
export declare enum DaffCartOrderActionTypes {
    CartPlaceOrderAction = "[DaffCart] Cart Place Order Action",
    CartPlaceOrderSuccessAction = "[DaffCart] Cart Place Order Success Action",
    CartPlaceOrderFailureAction = "[DaffCart] Cart Place Order Failure Action"
}
export declare class DaffCartPlaceOrder<T extends DaffCartPaymentMethod = DaffCartPaymentMethod> implements Action {
    payload?: T;
    readonly type = DaffCartOrderActionTypes.CartPlaceOrderAction;
    constructor(payload?: T);
}
export declare class DaffCartPlaceOrderSuccess<T extends DaffCartOrderResult = DaffCartOrderResult> implements Action {
    payload: T;
    readonly type = DaffCartOrderActionTypes.CartPlaceOrderSuccessAction;
    constructor(payload: T);
}
export declare class DaffCartPlaceOrderFailure implements Action {
    payload: DaffStateError;
    readonly type = DaffCartOrderActionTypes.CartPlaceOrderFailureAction;
    constructor(payload: DaffStateError);
}
export declare type DaffCartOrderActions<T extends DaffCartOrderResult = DaffCartOrderResult, V extends DaffCartPaymentMethod = DaffCartPaymentMethod> = DaffCartPlaceOrder<V> | DaffCartPlaceOrderSuccess<T> | DaffCartPlaceOrderFailure;
