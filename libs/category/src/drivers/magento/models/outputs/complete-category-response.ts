import { CategoryNode } from './category-node';

import { SortFieldsAndFiltersProductNode } from '@daffodil/product';

export interface CompleteCategoryResponse {
  category: CategoryNode,
  sortsAndFilters: SortFieldsAndFiltersProductNode
}