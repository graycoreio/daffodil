import { FilterItemNode } from './filter-item-node';

export interface FilterNode {
  name: string;
  filter_items_count: number;
  request_var: string;
  __typename: string;
  filter_items: FilterItemNode[];
}