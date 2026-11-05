import { MagentoProductFilterType } from './filter-type.enum';

/**
 * Filterable options for products.
 */
export interface MagentoAggregation {
  __typename?: string;
  attribute_code: string;
  type?: MagentoProductFilterType;
  count?: number;
  label?: string;
  options?: MagentoAggregationOption[];
}

export interface MagentoAggregationOption {
  value: string;
  count?: number;
  label?: string;
}
