import { SearchResponse } from '@algolia/client-search';

import {
  DaffCountable,
  DaffNumericallyPaginable,
} from '@daffodil/core';

export const algoliaSearchCollectionTransform = (response: SearchResponse): DaffNumericallyPaginable & DaffCountable => ({
  currentPage: response.page,
  totalPages: response.nbPages,
  pageSize: response.hitsPerPage,
  count: response.nbHits,
});
