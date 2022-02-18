import { CollectionPage } from 'schema-dts';

import { DaffSearchResult } from '@daffodil/search';

import { DAFF_SEARCH_CATEGORY_RESULT_KIND } from '../constants/public_api';

/**
 * An extension of a {@link DaffSearchResult} for categories.
 */
export type DaffSearchCategoryResult = Extract<DaffSearchResult, CollectionPage> & {
  kind: typeof DAFF_SEARCH_CATEGORY_RESULT_KIND;
};
