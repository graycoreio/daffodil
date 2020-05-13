import { EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import { DaffProductVariantAttributesDictionary } from '../../models/configurable-product';

/**
 * Configurable Product Applied Attributes Adapter for changing/overwriting entity state.
 */
export const daffConfigurableProductAppliedAttributesEntitiesAdapter = (() => {
	let cache;
  return (): EntityAdapter<DaffProductVariantAttributesDictionary> =>
    cache = cache || createEntityAdapter<DaffProductVariantAttributesDictionary>();
})();