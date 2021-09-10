import { EntityState } from '@ngrx/entity';

import { DaffProduct } from '@daffodil/product';
import { DaffProductStateRootSlice } from '@daffodil/product/state';

import { DaffCompositeProductEntity } from './composite-product-entities/composite-product-entity';
import { DAFF_COMPOSITE_PRODUCT_STORE_FEATURE_KEY } from './composite-product-store-feature-key';

/**
 * Interface for the redux store of the composite product feature area.
 */
export interface DaffCompositeProductReducersState {
	compositeProductOptions: EntityState<DaffCompositeProductEntity>;
}

export interface DaffCompositeProductStateRootSlice<T extends DaffProduct = DaffProduct> extends DaffProductStateRootSlice<T> {
  [DAFF_COMPOSITE_PRODUCT_STORE_FEATURE_KEY]: DaffCompositeProductReducersState;
}
