import {
  EntityAdapter,
  createEntityAdapter,
} from '@ngrx/entity';

import { DaffCountry } from '@daffodil/geography';

/**
 * Country Adapter for changing/overwriting entity state.
 */
export const getCountryAdapter = (() => {
  let cache;
  return <T extends DaffCountry = DaffCountry>(): EntityAdapter<T> =>
    cache = cache || createEntityAdapter<T>();
})();
