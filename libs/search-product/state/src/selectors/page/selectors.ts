import { defaultMemoize } from '@ngrx/store';

import { daffSearchGetPageSelectors } from '@daffodil/search/state';

import {
  daffSearchProductCreateSelectors,
  DaffSearchProductSelectors,
} from '../search.selector';

export const daffSearchProductGetPageSelectors: () => DaffSearchProductSelectors = defaultMemoize(() => daffSearchProductCreateSelectors(daffSearchGetPageSelectors().selectSearchResultIds)).memoized;
