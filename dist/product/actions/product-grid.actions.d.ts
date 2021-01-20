import { Action } from '@ngrx/store';
import { DaffProduct } from '../models/product';
/**
 * Action types for Product Grid Actions.
*/
export declare enum DaffProductGridActionTypes {
    ProductGridLoadAction = "[ProductGrid] Load Action",
    ProductGridLoadSuccessAction = "[ProductGrid] Load Success Action",
    ProductGridLoadFailureAction = "[ProductGrid] Load Failure Action",
    ProductGridResetAction = "[ProductGrid] Reset Action"
}
/**
 * Triggers a request for an array of products.
 */
export declare class DaffProductGridLoad implements Action {
    readonly type = DaffProductGridActionTypes.ProductGridLoadAction;
    constructor();
}
/**
 * An action called when a request for of an array of products succeeded.
 *
 * @param payload - An array of Products
 */
export declare class DaffProductGridLoadSuccess<T extends DaffProduct = DaffProduct> implements Action {
    payload: T[];
    readonly type = DaffProductGridActionTypes.ProductGridLoadSuccessAction;
    constructor(payload: T[]);
}
/**
 * An action called when a request for an array of products failed.
 *
 * @param payload - An error message
 */
export declare class DaffProductGridLoadFailure implements Action {
    payload: string;
    readonly type = DaffProductGridActionTypes.ProductGridLoadFailureAction;
    constructor(payload: string);
}
/**
 * Resets the state of the product grid redux store to its initial state.
 */
export declare class DaffProductGridReset implements Action {
    readonly type = DaffProductGridActionTypes.ProductGridResetAction;
    constructor();
}
export declare type DaffProductGridActions<T extends DaffProduct = DaffProduct> = DaffProductGridLoad | DaffProductGridLoadSuccess<T> | DaffProductGridLoadFailure | DaffProductGridReset;
