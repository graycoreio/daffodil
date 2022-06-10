import { DaffCategory } from '@daffodil/category';
import { DaffSearchResult } from '@daffodil/search';

import { DAFF_SEARCH_CATEGORY_RESULT_KIND } from '../constants/public_api';

/**
 * An extension of a {@link DaffSearchResult} for categories.
 */
export interface DaffSearchCategoryResult extends DaffSearchResult, DaffCategory {
  kind: typeof DAFF_SEARCH_CATEGORY_RESULT_KIND;
};
