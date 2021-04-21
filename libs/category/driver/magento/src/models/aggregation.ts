import { MagentoCategoryFilterType } from './filter-type.enum';

/**
 * Filterable options for products.
 */
export interface MagentoAggregation {
	attribute_code: string;
	type?: MagentoCategoryFilterType;
	count?: number;
	label?: string;
	options?: MagentoAggregationOption[];
}

export interface MagentoAggregationOption {
	value: string;
	count?: number;
	label?: string;
}
