import { Action } from '@ngrx/store';
import { Product } from '../models/product';

/**
 * Action types for Product Actions.
 */
export enum ProductActionTypes {
    ProductLoadAction = "[Product] Load Action",
    ProductLoadSuccessAction = "[Product] Load Success Action",
    ProductLoadFailureAction = "[Product] Load Failure Action",
    UpdateQtyAction = "[Product] Update Qty Action"
}

/**
 * Triggers a request for a Product.
 * 
 * @param payload - Id of requested Product
 */
export class ProductLoad implements Action {
  readonly type = ProductActionTypes.ProductLoadAction;

  constructor(public payload: string) {}
}

/**
 * A request for a Product succeeded.
 * 
 * @param payload - A Product
 */
export class ProductLoadSuccess implements Action {
    readonly type = ProductActionTypes.ProductLoadSuccessAction;

    constructor(public payload: Product) {}
}

/**
 * A request for a Product failed.
 * 
 * @param payload - An error message
 */
export class ProductLoadFailure implements Action {
  readonly type = ProductActionTypes.ProductLoadFailureAction;

  constructor(public payload: string) {}
}

/**
 * Update the qty of a product in an redux store.
 * 
 * @param payload - The qty of the product.
 */
export class UpdateQty implements Action {
    readonly type = ProductActionTypes.UpdateQtyAction;

    constructor(public payload: number) {}
}

export type ProductActions = 
    | ProductLoad 
    | ProductLoadSuccess
    | ProductLoadFailure
    | UpdateQty;