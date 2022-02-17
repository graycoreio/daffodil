import {
  EntityAdapter,
  createEntityAdapter,
} from '@ngrx/entity';

import { DaffSearchResult } from '@daffodil/search';

/**
 * Search Adapter for changing/overwriting entity state.
 */
export const daffGetSearchAdapter = (() => {
  let cache;
  return <T extends DaffSearchResult = DaffSearchResult>(): EntityAdapter<T> =>
    cache = cache || createEntityAdapter<T>();
})();
