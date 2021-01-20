import { Action } from '@ngrx/store';
import { DaffCart } from '@daffodil/cart';
import { DaffOrder } from '@daffodil/order';
export declare enum DaffOrderActionTypes {
    OrderLoadAction = "[Order] Order Load Action",
    OrderLoadSuccessAction = "[Order] Order Load Success Action",
    OrderLoadFailureAction = "[Order] Order Load Failure Action",
    OrderListAction = "[Order] Order List Action",
    OrderListSuccessAction = "[Order] Order List Success Action",
    OrderListFailureAction = "[Order] Order List Failure Action"
}
/**
 * Triggers the loading of the specified order.
 *
 * @param orderId The order ID.
 * @param cartId The optional guest cart ID.
 */
export declare class DaffOrderLoad<T extends DaffOrder = DaffOrder, V extends DaffCart = DaffCart> implements Action {
    orderId: T['id'];
    cartId?: V['id'];
    readonly type = DaffOrderActionTypes.OrderLoadAction;
    constructor(orderId: T['id'], cartId?: V['id']);
}
export declare class DaffOrderLoadSuccess<T extends DaffOrder = DaffOrder> implements Action {
    payload: T;
    readonly type = DaffOrderActionTypes.OrderLoadSuccessAction;
    constructor(payload: T);
}
export declare class DaffOrderLoadFailure implements Action {
    payload: string;
    readonly type = DaffOrderActionTypes.OrderLoadFailureAction;
    constructor(payload: string);
}
/**
 * Triggers the loading of the orders for either the currently logged-in user or the specified guest cart.
 *
 * @param payload The guest cart ID.
 */
export declare class DaffOrderList<T extends DaffCart = DaffCart> implements Action {
    payload?: T['id'];
    readonly type = DaffOrderActionTypes.OrderListAction;
    constructor(payload?: T['id']);
}
export declare class DaffOrderListSuccess<T extends DaffOrder = DaffOrder> implements Action {
    payload: T[];
    readonly type = DaffOrderActionTypes.OrderListSuccessAction;
    constructor(payload: T[]);
}
export declare class DaffOrderListFailure implements Action {
    payload: string;
    readonly type = DaffOrderActionTypes.OrderListFailureAction;
    constructor(payload: string);
}
export declare type DaffOrderActions<T extends DaffOrder = DaffOrder, V extends DaffCart = DaffCart> = DaffOrderLoad<T, V> | DaffOrderLoadSuccess<T> | DaffOrderLoadFailure | DaffOrderList | DaffOrderListSuccess<T> | DaffOrderListFailure;
