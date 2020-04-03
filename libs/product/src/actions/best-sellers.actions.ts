import { Action } from '@ngrx/store';

import { DaffProduct } from '../models/product';

/**
 * Action types for Best Seller Actions.
 */
export enum DaffBestSellersActionTypes {
  BestSellersLoadAction = '[BestSellers] Load Action',
  BestSellersLoadSuccessAction = '[BestSellers] Load Success Action',
  BestSellersLoadFailureAction = '[BestSellers] Load Failure Action',
  BestSellersResetAction = '[BestSellers] Reset Action'
}

/**
 * Triggers a request for best selling products.
 */
export class DaffBestSellersLoad implements Action {
  readonly type = DaffBestSellersActionTypes.BestSellersLoadAction;

  constructor() {}
}

/**
 * An action called when a request for best selling products succeeded.
 * 
 * @param payload - An array of Products
 */
export class DaffBestSellersLoadSuccess<T extends DaffProduct> implements Action {
  readonly type = DaffBestSellersActionTypes.BestSellersLoadSuccessAction;

  constructor(public payload: T[]) {}
}

/**
 * An action called when a request for best selling products failed.
 * 
 * @param payload - An error message
 */
export class DaffBestSellersLoadFailure implements Action {
  readonly type = DaffBestSellersActionTypes.BestSellersLoadFailureAction;

  constructor(public payload: string) {}
}

/**
 * Resets the state of the best sellers redux store to its initial state.
 */
export class DaffBestSellersReset implements Action {
  readonly type = DaffBestSellersActionTypes.BestSellersResetAction;

  constructor() {}
}

export type DaffBestSellersActions<T extends DaffProduct> = 
    | DaffBestSellersLoad 
    | DaffBestSellersLoadSuccess<T>
    | DaffBestSellersLoadFailure
    | DaffBestSellersReset;
    