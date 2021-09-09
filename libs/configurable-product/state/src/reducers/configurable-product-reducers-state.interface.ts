import { EntityState } from '@ngrx/entity';

import { DaffConfigurableProductEntity } from './configurable-product-entities/configurable-product-entity';
import { DAFF_CONFIGURABLE_PRODUCT_STORE_FEATURE_KEY } from './configurable-product-store-feature-key';

/**
 * Interface for the redux store of the configurable product feature area.
 */
export interface DaffConfigurableProductReducersState {
	configurableProductAttributes: EntityState<DaffConfigurableProductEntity>;
}

export interface DaffConfigurableProductStateRootSlice {
  [DAFF_CONFIGURABLE_PRODUCT_STORE_FEATURE_KEY]: DaffConfigurableProductReducersState;
}
