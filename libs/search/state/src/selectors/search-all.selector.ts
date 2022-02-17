import { DaffSearchResult } from '@daffodil/search';

import {
  DaffSearchEntitySelectors,
  getDaffSearchEntitySelectors,
} from './search-entities.selector';
import {
  DaffSearchFeatureSelector,
  getDaffSearchReducersStateSelector,
} from './search-feature.selector';
import {
  DaffSearchSelectors,
  getSearchSelectors,
} from './search.selector';

/**
 * All the search selectors.
 */
export interface DaffSearchAllSelectors<T extends DaffSearchResult = DaffSearchResult> extends
  DaffSearchEntitySelectors<T>,
  DaffSearchSelectors<T>,
  DaffSearchFeatureSelector<T> {}

/**
 * Gets all the selectors for search state.
 */
export const getDaffSearchSelectors = (() => {
  let cache;
  return <T extends DaffSearchResult = DaffSearchResult>(): DaffSearchAllSelectors<T> =>
    cache = cache || {
      ...getSearchSelectors<T>(),
      ...getDaffSearchEntitySelectors<T>(),
      ...getDaffSearchReducersStateSelector<T>(),
    };
})();
