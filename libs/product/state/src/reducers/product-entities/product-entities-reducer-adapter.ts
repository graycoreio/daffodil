import {
  EntityAdapter,
  createEntityAdapter,
} from '@ngrx/entity';

import { DaffProduct } from '@daffodil/product';

/**
 * Product Adapter for changing/overwriting entity state.
 */
export const daffProductEntitiesAdapter = (() => {
  let cache;
  return <T extends DaffProduct>(): EntityAdapter<T> =>
    cache = cache || createEntityAdapter<T>();
})();
