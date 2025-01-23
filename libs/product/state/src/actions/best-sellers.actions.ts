import { Action } from '@ngrx/store';

import { DaffStateError } from '@daffodil/core/state';
import { DaffProduct } from '@daffodil/product';

/**
 * Action types for Best Seller Actions.
 * @deprecated in favor of features from `@daffodil/related-products/state` and `@daffodil/upsell-products/state`.
 */
export enum DaffBestSellersActionTypes {
  BestSellersLoadAction = '[@daffodil/product] BestSellers Load Action',
  BestSellersLoadSuccessAction = '[@daffodil/product] BestSellers Load Success Action',
  BestSellersLoadFailureAction = '[@daffodil/product] BestSellers Load Failure Action',
  BestSellersResetAction = '[@daffodil/product] BestSellers Reset Action'
}

/**
 * Triggers a request for best selling products.
 * @deprecated in favor of features from `@daffodil/related-products/state` and `@daffodil/upsell-products/state`.
 */
export class DaffBestSellersLoad implements Action {
  readonly type = DaffBestSellersActionTypes.BestSellersLoadAction;

  constructor() {}
}

/**
 * An action called when a request for best selling products succeeded.
 *
 * @param payload - An array of Products
 * @deprecated in favor of features from `@daffodil/related-products/state` and `@daffodil/upsell-products/state`.
 */
export class DaffBestSellersLoadSuccess<T extends DaffProduct = DaffProduct> implements Action {
  readonly type = DaffBestSellersActionTypes.BestSellersLoadSuccessAction;

  constructor(public payload: T[]) {}
}

/**
 * An action called when a request for best selling products failed.
 *
 * @param payload - An error message
 * @deprecated in favor of features from `@daffodil/related-products/state` and `@daffodil/upsell-products/state`.
 */
export class DaffBestSellersLoadFailure implements Action {
  readonly type = DaffBestSellersActionTypes.BestSellersLoadFailureAction;

  constructor(public payload: DaffStateError) {}
}

/**
 * Resets the state of the best sellers redux store to its initial state.
 *
 * @deprecated in favor of features from `@daffodil/related-products/state` and `@daffodil/upsell-products/state`.
 */
export class DaffBestSellersReset implements Action {
  readonly type = DaffBestSellersActionTypes.BestSellersResetAction;

  constructor() {}
}

/**
 * @deprecated in favor of features from `@daffodil/related-products/state` and `@daffodil/upsell-products/state`.
 */
export type DaffBestSellersActions<T extends DaffProduct = DaffProduct> =
    | DaffBestSellersLoad
    | DaffBestSellersLoadSuccess<T>
    | DaffBestSellersLoadFailure
    | DaffBestSellersReset;
