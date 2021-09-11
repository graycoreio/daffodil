import { DaffProduct } from '@daffodil/product';
import { DaffProductStateRootSlice } from '@daffodil/product/state';

import { DAFF_UPSELL_PRODUCTS_STORE_FEATURE_KEY } from './store-feature-key';
import { DaffUpsellProductsReducerState } from './upsell-products/reducer-state.interface';

/**
 * Interface for the redux store of the upsell product feature area.
 */
export interface DaffUpsellProductsReducersState {
  upsellProducts: DaffUpsellProductsReducerState;
}

/**
 * The footprint of the upsell product feature in the root state.
 */
export interface DaffUpsellProductStateRootSlice<T extends DaffProduct = DaffProduct> extends DaffProductStateRootSlice<T> {
  [DAFF_UPSELL_PRODUCTS_STORE_FEATURE_KEY]: DaffUpsellProductsReducersState;
}
