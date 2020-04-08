import { EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import { DaffCountry } from '../../models/country';

/**
 * Country Adapter for changing/overwriting entity state.
 */
export const getCountryAdapter = (() => {
  let cache;
  return <T extends DaffCountry>(): EntityAdapter<T> =>
    cache = cache || createEntityAdapter<T>();
})();
