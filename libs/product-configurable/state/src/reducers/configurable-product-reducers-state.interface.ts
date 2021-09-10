import { EntityState } from '@ngrx/entity';

import { DaffProduct } from '@daffodil/product';
import { DaffProductStateRootSlice } from '@daffodil/product/state';

import { DaffConfigurableProductEntity } from './configurable-product-entities/configurable-product-entity';
import { DAFF_CONFIGURABLE_PRODUCT_STORE_FEATURE_KEY } from './configurable-product-store-feature-key';

/**
 * Interface for the redux store of the configurable product feature area.
 */
export interface DaffConfigurableProductReducersState {
	configurableProductAttributes: EntityState<DaffConfigurableProductEntity>;
}

export interface DaffConfigurableProductStateRootSlice<T extends DaffProduct = DaffProduct> extends DaffProductStateRootSlice<T> {
  [DAFF_CONFIGURABLE_PRODUCT_STORE_FEATURE_KEY]: DaffConfigurableProductReducersState;
}
