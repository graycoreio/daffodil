import { Action } from '@ngrx/store';

import { DaffProduct } from '../models/product';

/** 
 * Action types for Product Grid Actions.
*/
export enum DaffProductGridActionTypes {
    ProductGridLoadAction = "[ProductGrid] Load Action",
    ProductGridLoadSuccessAction = "[ProductGrid] Load Success Action",
    ProductGridLoadFailureAction = "[ProductGrid] Load Failure Action",
    ProductGridResetAction = "[ProductGrid] Reset Action"
}

/**
 * Triggers a request for an array of products.
 */
export class DaffProductGridLoad implements Action {
  readonly type = DaffProductGridActionTypes.ProductGridLoadAction;

  constructor() {}
}

/**
 * An action called when a request for of an array of products succeeded.
 * 
 * @param payload - An array of Products
 */
export class DaffProductGridLoadSuccess implements Action {
    readonly type = DaffProductGridActionTypes.ProductGridLoadSuccessAction;

    constructor(public payload: DaffProduct[]) {}
}

/**
 * An action called when a request for an array of products failed.
 * 
 * @param payload - An error message
 */
export class DaffProductGridLoadFailure implements Action {
  readonly type = DaffProductGridActionTypes.ProductGridLoadFailureAction;

  constructor(public payload: string) {}
}

/**
 * Resets the state of the product grid redux store to its initial state.
 */
export class DaffProductGridReset implements Action {
    readonly type = DaffProductGridActionTypes.ProductGridResetAction;

    constructor() {}
}

export type DaffProductGridActions = 
    | DaffProductGridLoad 
    | DaffProductGridLoadSuccess
    | DaffProductGridLoadFailure
    | DaffProductGridReset;