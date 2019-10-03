import { DaffCategoryFilterOption } from './category-filter-option';

export interface DaffCategoryFilter {
  name: string;
  attribute_name: string;
  type: any;
  items_count: number;
  options: DaffCategoryFilterOption[]
}
