import { FilterNode } from './filter-node';
import { SortFieldsNode } from './sort-fields-node';

export interface SortFieldsAndFiltersNode {
  sortFields: SortFieldsNode,
  filters: FilterNode[];
}