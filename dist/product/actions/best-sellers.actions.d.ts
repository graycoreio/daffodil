import { Action } from '@ngrx/store';
import { DaffProduct } from '../models/product';
/**
 * Action types for Best Seller Actions.
 */
export declare enum DaffBestSellersActionTypes {
    BestSellersLoadAction = "[BestSellers] Load Action",
    BestSellersLoadSuccessAction = "[BestSellers] Load Success Action",
    BestSellersLoadFailureAction = "[BestSellers] Load Failure Action",
    BestSellersResetAction = "[BestSellers] Reset Action"
}
/**
 * Triggers a request for best selling products.
 */
export declare class DaffBestSellersLoad implements Action {
    readonly type = DaffBestSellersActionTypes.BestSellersLoadAction;
    constructor();
}
/**
 * An action called when a request for best selling products succeeded.
 *
 * @param payload - An array of Products
 */
export declare class DaffBestSellersLoadSuccess<T extends DaffProduct = DaffProduct> implements Action {
    payload: T[];
    readonly type = DaffBestSellersActionTypes.BestSellersLoadSuccessAction;
    constructor(payload: T[]);
}
/**
 * An action called when a request for best selling products failed.
 *
 * @param payload - An error message
 */
export declare class DaffBestSellersLoadFailure implements Action {
    payload: string;
    readonly type = DaffBestSellersActionTypes.BestSellersLoadFailureAction;
    constructor(payload: string);
}
/**
 * Resets the state of the best sellers redux store to its initial state.
 */
export declare class DaffBestSellersReset implements Action {
    readonly type = DaffBestSellersActionTypes.BestSellersResetAction;
    constructor();
}
export declare type DaffBestSellersActions<T extends DaffProduct = DaffProduct> = DaffBestSellersLoad | DaffBestSellersLoadSuccess<T> | DaffBestSellersLoadFailure | DaffBestSellersReset;
