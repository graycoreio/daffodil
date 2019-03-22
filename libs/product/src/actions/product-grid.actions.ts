import { Action } from '@ngrx/store';

import { Product } from '../models/product';

/** 
 * Action types for Product Grid Actions.
*/
export enum ProductGridActionTypes {
    ProductGridLoadAction = "[ProductGrid] Load Action",
    ProductGridLoadSuccessAction = "[ProductGrid] Load Success Action",
    ProductGridLoadFailureAction = "[ProductGrid] Load Failure Action",
    ProductGridResetAction = "[ProductGrid] Reset Action"
}

/**
 * Triggers a request for an array of products.
 */
export class ProductGridLoad implements Action {
  readonly type = ProductGridActionTypes.ProductGridLoadAction;

  constructor() {}
}

/**
 * A request for of an array of products succeeded.
 * 
 * @param payload - An array of Products
 */
export class ProductGridLoadSuccess implements Action {
    readonly type = ProductGridActionTypes.ProductGridLoadSuccessAction;

    constructor(public payload: Product[]) {}
}

/**
 * A request for an array of products failed.
 * 
 * @param payload - An error message
 */
export class ProductGridLoadFailure implements Action {
  readonly type = ProductGridActionTypes.ProductGridLoadFailureAction;

  constructor(public payload: string) {}
}

/**
 * Resets the state of the product grid redux store to its initial state.
 */
export class ProductGridReset implements Action {
    readonly type = ProductGridActionTypes.ProductGridResetAction;

    constructor() {}
}

export type ProductGridActions = 
    | ProductGridLoad 
    | ProductGridLoadSuccess
    | ProductGridLoadFailure
    | ProductGridReset;