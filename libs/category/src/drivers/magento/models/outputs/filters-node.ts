import { FilterItemNode } from './filter-item-node';

export interface FilterNode {
  filter_items: FilterItemNode[];
  filter_items_count: number;
  name: string;
  request_var: string;
  __typename: string;
}