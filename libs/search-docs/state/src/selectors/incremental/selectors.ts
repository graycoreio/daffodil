import { defaultMemoize } from '@ngrx/store';

import { daffSearchGetIncrementalSelectors } from '@daffodil/search/state';

import {
  daffSearchDocsCreateSelectors,
  DaffSearchDocsSelectors,
} from '../search.selector';

export const daffSearchDocsGetIncrementalSelectors: () => DaffSearchDocsSelectors = defaultMemoize(() => daffSearchDocsCreateSelectors(daffSearchGetIncrementalSelectors().selectSearchResultIds)).memoized;
