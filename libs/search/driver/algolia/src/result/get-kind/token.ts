import { createSingleInjectionToken } from '@daffodil/core';

import { AlgoliaSearchResultGetKind } from './type';

export const {
  token: ALGOLIA_SEARCH_RESULT_GET_KIND,
  provider: provideAlgoliaSearchResultGetKind,
} = createSingleInjectionToken<AlgoliaSearchResultGetKind>('ALGOLIA_SEARCH_RESULT_GET_KIND');
