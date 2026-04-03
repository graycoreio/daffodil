import { defaultMemoize } from '@ngrx/store';

import { daffSearchGetPageSelectors } from '@daffodil/search/state';

import {
  daffSearchDocsCreateSelectors,
  DaffSearchDocsSelectors,
} from '../search.selector';

export const daffSearchDocsGetPageSelectors: () => DaffSearchDocsSelectors = defaultMemoize(() => daffSearchDocsCreateSelectors(daffSearchGetPageSelectors().selectSearchResultIds)).memoized;
