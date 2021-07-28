import { DaffProduct } from '@daffodil/product';
import { DaffProductStateRootSlice } from '@daffodil/product/state';

import { DaffRelatedProductsReducerState } from './related-products/reducer-state.interface';
import { DAFF_RELATED_PRODUCTS_STORE_FEATURE_KEY } from './store-feature-key';

/**
 * Interface for the redux store of the related product feature area.
 */
export interface DaffRelatedProductsReducersState {
  relatedProducts: DaffRelatedProductsReducerState;
}

/**
 * The footprint of the related product feature in the root state.
 */
export interface DaffRelatedProductStateRootSlice<T extends DaffProduct = DaffProduct> extends DaffProductStateRootSlice<T> {
  [DAFF_RELATED_PRODUCTS_STORE_FEATURE_KEY]: DaffRelatedProductsReducersState;
}
