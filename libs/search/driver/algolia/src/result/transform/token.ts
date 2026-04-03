import { createMultiInjectionToken } from '@daffodil/core';

import { AlgoliaSearchResultTransformInjection } from './type';

export const {
  token: ALGOLIA_SEARCH_RESULT_TRANSFORMS,
  provider: provideAlgoliaSearchResultTransforms,
} = createMultiInjectionToken<AlgoliaSearchResultTransformInjection>('ALGOLIA_SEARCH_RESULT_TRANSFORMS');
