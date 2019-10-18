import { CategoryNode } from './category-node';

import { SortFieldsAndFiltersNode } from '@daffodil/product';

export interface CompleteCategoryResponse {
  category: CategoryNode,
  sortsAndFilters: SortFieldsAndFiltersNode
}