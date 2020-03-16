import { MagentoAggregation } from '../models/aggregation';
import { MagentoCustomMetadataAttribute } from '../models/requests/custom-metadata-attribute';
import { MagentoCustomAttributeMetadataResponse } from '../models/custom-attribute-metadata-response';
import { MagentoGetCategoryAggregationsResponse } from '../models/get-category-aggregations-response';

export function buildCustomMetadataAttribute(filter: MagentoAggregation): MagentoCustomMetadataAttribute {
	return {
		attribute_code: filter.attribute_code,
		entity_type: '4'
	}
}

export function addMetadataTypesToAggregates(
	attributeResponse: MagentoCustomAttributeMetadataResponse, 
	aggregationResponse: MagentoGetCategoryAggregationsResponse
): MagentoGetCategoryAggregationsResponse {

	return {
		...aggregationResponse,
		products: {
			...aggregationResponse.products,
			aggregations: [
				...aggregationResponse.products.aggregations.map((aggregate) => {
					return {
						...aggregate,
						type: getMatchedAttributeType(aggregate, attributeResponse)
					}
				})
			]
		}
	}
}

function getMatchedAttributeType(aggregate: MagentoAggregation, attributes: MagentoCustomAttributeMetadataResponse): string {
	if(aggregate.attribute_code === 'category_id') return 'select';

	return attributes.customAttributeMetadata.items.filter(item => item.attribute_code === aggregate.attribute_code)[0].input_type;
}
