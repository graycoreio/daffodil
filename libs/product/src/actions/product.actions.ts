import { Action } from '@ngrx/store';
import { DaffProduct } from '../models/product';

/**
 * Action types for Product Actions.
 */
export enum DaffProductActionTypes {
    ProductLoadAction = '[Product] Load Action',
    ProductLoadSuccessAction = '[Product] Load Success Action',
    ProductLoadFailureAction = '[Product] Load Failure Action',
    UpdateQtyAction = '[Product] Update Qty Action',
    ProductModifyAction = '[Product] Product Modify Action'
}

/**
 * Triggers a request for a Product.
 * 
 * @param payload - Id of requested Product
 */
export class DaffProductLoad implements Action {
  readonly type = DaffProductActionTypes.ProductLoadAction;

  constructor(public payload: string) {}
}

/**
 * An action called when a request for a Product succeeded.
 * 
 * @param payload - A Product
 */
export class DaffProductLoadSuccess<T extends DaffProduct = DaffProduct> implements Action {
    readonly type = DaffProductActionTypes.ProductLoadSuccessAction;

    constructor(public payload: T) {}
}

/**
 * An action called when a request for a Product failed.
 * 
 * @param payload - An error message
 */
export class DaffProductLoadFailure implements Action {
  readonly type = DaffProductActionTypes.ProductLoadFailureAction;

  constructor(public payload: string) {}
}

/**
 * Update the qty of a product in an redux store.
 * 
 * @param payload - The qty of the product.
 */
export class DaffProductUpdateQty implements Action {
    readonly type = DaffProductActionTypes.UpdateQtyAction;

    constructor(public payload: number) {}
}

export type DaffProductActions<T extends DaffProduct = DaffProduct> = 
    | DaffProductLoad 
    | DaffProductLoadSuccess<T>
    | DaffProductLoadFailure
    | DaffProductUpdateQty;