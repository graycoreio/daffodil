import { DaffCategory } from '@daffodil/category';

import { DAFF_SEARCH_CATEGORY_RESULT_KIND } from '../constants/public_api';
import { DaffSearchCategoryResult } from '../models/public_api';

/**
 * Transforms a list of categories into a list of category search results.
 */
export const daffTransformCategoriesToSearchResults = (categories: DaffCategory[]): DaffSearchCategoryResult[] =>
  categories.map(category => ({
    ...category,
    kind: DAFF_SEARCH_CATEGORY_RESULT_KIND,
  }));
