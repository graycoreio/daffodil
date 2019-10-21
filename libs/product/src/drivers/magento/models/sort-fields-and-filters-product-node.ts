import { SortFieldsNode } from './sort-fields-node';
import { FilterNode } from './filter-node';

export interface SortFieldsAndFiltersProductNode {
  sort_fields: SortFieldsNode,
  filters: FilterNode[];
}