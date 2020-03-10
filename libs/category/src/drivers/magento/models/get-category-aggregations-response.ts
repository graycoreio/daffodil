import { MagentoAggregation } from './aggregation';
import { MagentoSortFields } from './sort-fields';

export interface MagentoGetCategoryAggregationsResponse {
	products: {
		aggregations: MagentoAggregation[];
		sort_fields: MagentoSortFields;
	}
}
