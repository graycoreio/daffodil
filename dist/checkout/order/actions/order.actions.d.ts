import { Action } from '@ngrx/store';
import { DaffCart } from '@daffodil/cart';
import { DaffOrder } from '../../models/order/order';
/**
 * @deprecated
 */
export declare enum DaffOrderActionTypes {
    PlaceOrderAction = "[Order] Place Order Action",
    PlaceOrderSuccessAction = "[Order] Place Order Success Action",
    PlaceOrderFailureAction = "[Order] Place Order Failure Action"
}
/**
 * @deprecated
 */
export declare enum OrderActionTypes {
    PlaceOrderAction = "[Order] Place Order Action",
    PlaceOrderSuccessAction = "[Order] Place Order Success Action",
    PlaceOrderFailureAction = "[Order] Place Order Failure Action"
}
/**
 * @deprecated
 */
export declare class PlaceOrder implements Action {
    payload: DaffCart;
    readonly type = DaffOrderActionTypes.PlaceOrderAction;
    constructor(payload: DaffCart);
}
/**
 * @deprecated
 */
export declare class DaffPlaceOrder implements Action {
    payload: DaffCart;
    readonly type = DaffOrderActionTypes.PlaceOrderAction;
    constructor(payload: DaffCart);
}
/**
 * @deprecated
 */
export declare class DaffPlaceOrderSuccess implements Action {
    payload: DaffOrder;
    readonly type = DaffOrderActionTypes.PlaceOrderSuccessAction;
    constructor(payload: DaffOrder);
}
/**
 * @deprecated
 */
export declare class DaffPlaceOrderFailure implements Action {
    payload: string;
    readonly type = DaffOrderActionTypes.PlaceOrderFailureAction;
    constructor(payload: string);
}
/**
 * @deprecated
 */
export declare type DaffOrderActions = DaffPlaceOrder | PlaceOrder | DaffPlaceOrderSuccess | DaffPlaceOrderFailure;
