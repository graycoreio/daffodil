import {
  EntityAdapter,
  createEntityAdapter,
} from '@ngrx/entity';

import { DaffCompositeProductEntity } from './composite-product-entity';

/**
 * Composite Product Item Options Adapter for changing/overwriting entity state.
 *
 * @deprecated import from @daffodil/composite-product/state instead.
 */
export const daffCompositeProductAppliedOptionsEntitiesAdapter = (() => {
  let cache;
  return (): EntityAdapter<DaffCompositeProductEntity> =>
    cache = cache || createEntityAdapter<DaffCompositeProductEntity>();
})();
