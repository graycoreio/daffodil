/**
 * Filterable options for products.
 */
export interface MagentoAggregation {
	attribute_code: string;
	count?: number;
	label?: string;
	options?: MagentoAggregationOption[];
}

export interface MagentoAggregationOption {
	value: string;
	count?: number;
	label?: string;
}
