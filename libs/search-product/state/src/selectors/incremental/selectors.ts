import { defaultMemoize } from '@ngrx/store';

import { daffSearchGetIncrementalSelectors } from '@daffodil/search/state';

import {
  daffSearchProductCreateSelectors,
  DaffSearchProductSelectors,
} from '../search.selector';

export const daffSearchProductGetIncrementalSelectors: () => DaffSearchProductSelectors = defaultMemoize(() => daffSearchProductCreateSelectors(daffSearchGetIncrementalSelectors().selectSearchResultIds)).memoized;
