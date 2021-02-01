import {
  EntityAdapter,
  createEntityAdapter,
} from '@ngrx/entity';

import { DaffConfigurableProductEntity } from './configurable-product-entity';

/**
 * Configurable Product Applied Attributes Adapter for changing/overwriting entity state.
 */
export const daffConfigurableProductAppliedAttributesEntitiesAdapter = (() => {
  let cache;
  return (): EntityAdapter<DaffConfigurableProductEntity> =>
    cache = cache || createEntityAdapter<DaffConfigurableProductEntity>();
})();
