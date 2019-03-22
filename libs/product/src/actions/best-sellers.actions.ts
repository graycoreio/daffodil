import { Action } from '@ngrx/store';

import { Product } from '../models/product';

/**
 * Action types for Best Seller Actions.
 */
export enum BestSellersActionTypes {
    BestSellersLoadAction = "[BestSellers] Load Action",
    BestSellersLoadSuccessAction = "[BestSellers] Load Success Action",
    BestSellersLoadFailureAction = "[BestSellers] Load Failure Action",
    BestSellersResetAction = "[BestSellers] Reset Action"
}

/**
 * Triggers a request for best selling products.
 */
export class BestSellersLoad implements Action {
  readonly type = BestSellersActionTypes.BestSellersLoadAction;

  constructor() {}
}

/**
 * A request for best selling products succeeded.
 * 
 * @param payload - An array of Products
 */
export class BestSellersLoadSuccess implements Action {
    readonly type = BestSellersActionTypes.BestSellersLoadSuccessAction;

    constructor(public payload: Product[]) {}
}

/**
 * A request for best selling products failed.
 * 
 * @param payload - An error message
 */
export class BestSellersLoadFailure implements Action {
  readonly type = BestSellersActionTypes.BestSellersLoadFailureAction;

  constructor(public payload: string) {}
}

/**
 * Resets the state of the best sellers redux store to its initial state.
 */
export class BestSellersReset implements Action {
  readonly type = BestSellersActionTypes.BestSellersResetAction;

  constructor() {}
}

export type BestSellersActions = 
    | BestSellersLoad 
    | BestSellersLoadSuccess
    | BestSellersLoadFailure
    | BestSellersReset;
    