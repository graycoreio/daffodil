import { SortFieldsNode } from './sort-fields-node';
import { FilterNode } from './filters-node';

export interface CategorySortsAndFiltersNode {
  filters: FilterNode[];
  sort_fields: SortFieldsNode;
}