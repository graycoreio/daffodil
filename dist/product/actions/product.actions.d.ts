import { Action } from '@ngrx/store';
import { DaffProduct } from '../models/product';
/**
 * Action types for Product Actions.
 */
export declare enum DaffProductActionTypes {
    ProductLoadAction = "[Product] Load Action",
    ProductLoadSuccessAction = "[Product] Load Success Action",
    ProductLoadFailureAction = "[Product] Load Failure Action",
    UpdateQtyAction = "[Product] Update Qty Action",
    ProductModifyAction = "[Product] Product Modify Action"
}
/**
 * Triggers a request for a Product.
 *
 * @param payload - Id of requested Product
 */
export declare class DaffProductLoad implements Action {
    payload: string;
    readonly type = DaffProductActionTypes.ProductLoadAction;
    constructor(payload: string);
}
/**
 * An action called when a request for a Product succeeded.
 *
 * @param payload - A Product
 */
export declare class DaffProductLoadSuccess<T extends DaffProduct = DaffProduct> implements Action {
    payload: T;
    readonly type = DaffProductActionTypes.ProductLoadSuccessAction;
    constructor(payload: T);
}
/**
 * An action called when a request for a Product failed.
 *
 * @param payload - An error message
 */
export declare class DaffProductLoadFailure implements Action {
    payload: string;
    readonly type = DaffProductActionTypes.ProductLoadFailureAction;
    constructor(payload: string);
}
/**
 * Update the qty of a product in an redux store.
 *
 * @param payload - The qty of the product.
 */
export declare class DaffProductUpdateQty implements Action {
    payload: number;
    readonly type = DaffProductActionTypes.UpdateQtyAction;
    constructor(payload: number);
}
export declare type DaffProductActions<T extends DaffProduct = DaffProduct> = DaffProductLoad | DaffProductLoadSuccess<T> | DaffProductLoadFailure | DaffProductUpdateQty;
