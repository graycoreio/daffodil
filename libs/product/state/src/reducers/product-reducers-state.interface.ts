import { EntityState } from '@ngrx/entity';

import { DaffProduct } from '@daffodil/product';

import { DaffBestSellersReducerState } from './best-sellers/best-sellers-reducer-state.interface';
import { DaffProductReducerState } from './product/product-reducer-state.interface';
import { DaffProductGridReducerState } from './product-grid/product-grid-reducer-state.interface';
import { DAFF_PRODUCT_STORE_FEATURE_KEY } from './product-store-feature-key';

/**
 * Interface for the redux store of the product feature area.
 */
export interface DaffProductReducersState<T extends DaffProduct = DaffProduct> {
  products: EntityState<T>;
  productGrid: DaffProductGridReducerState<T>;
  product: DaffProductReducerState;
  /**
   * @deprecated in favor of features from `@daffodil/related-products/state` and `@daffodil/upsell-products/state`. Deprecated in version 0.81.0. Will be removed in version 0.84.0.
   */
  bestSellers: DaffBestSellersReducerState;
}

export interface DaffProductStateRootSlice<T extends DaffProduct = DaffProduct> {
  [DAFF_PRODUCT_STORE_FEATURE_KEY]: DaffProductReducersState<T>;
}
