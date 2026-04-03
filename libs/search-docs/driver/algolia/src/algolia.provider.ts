import { makeEnvironmentProviders } from '@angular/core';

import {
  provideAlgoliaSearchResultGetKind,
  provideAlgoliaSearchResultTransforms,
  provideDaffAlgoliaSearchDriver,
  provideDaffSearchAlgoliaConfig,
} from '@daffodil/search/driver/algolia';
import { DAFF_SEARCH_DOCS_RESULT_KIND } from '@daffodil/search-docs';

import { algoliaSearchDocsResultTransform } from './transforms/result';

export const provideAlgoliaSearchDocs = (
  config: Parameters<typeof provideDaffSearchAlgoliaConfig>[0],
  getSearchResultKind: Parameters<typeof provideAlgoliaSearchResultGetKind>[0],
) => makeEnvironmentProviders([
  provideDaffAlgoliaSearchDriver(config),
  provideAlgoliaSearchResultTransforms({
    kind: DAFF_SEARCH_DOCS_RESULT_KIND,
    transform: algoliaSearchDocsResultTransform,
  }),
  provideAlgoliaSearchResultGetKind(getSearchResultKind),
]);
