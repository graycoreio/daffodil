import { Injectable } from '@angular/core';

import { MagentoAggregation } from '../models/aggregation';
import { MagentoCustomMetadataAttribute } from '../models/requests/custom-metadata-attribute';
import { MagentoCustomAttributeMetadataResponse } from '../models/custom-attribute-metadata-response';
import { MagentoCompleteCategoryResponse } from '../models/complete-category-response';

@Injectable({
  providedIn: 'root'
})
export class DaffMagentoCustomMetadataAttributeTransformerService {

  transform(filter: MagentoAggregation): MagentoCustomMetadataAttribute {
		return {
			attribute_code: filter.attribute_code,
			entity_type: '4'
		}
	}
	
	addTypesToAggregates(attributeResponse: MagentoCustomAttributeMetadataResponse, completeResponse: MagentoCompleteCategoryResponse)
		: MagentoCompleteCategoryResponse {

		return {
			...completeResponse,
			aggregates: [
				...completeResponse.aggregates.map((aggregate) => {
					return {
						...aggregate,
						type: this.getMatchedAttributeType(aggregate, attributeResponse)
					}
				})
			]
		}
	}

	private getMatchedAttributeType(aggregate: MagentoAggregation, attributes: MagentoCustomAttributeMetadataResponse): string {
		if(aggregate.attribute_code === 'category_id') return 'select';

		return attributes.customAttributeMetadata.items.filter(item => item.attribute_code === aggregate.attribute_code)[0].input_type;
	}
}
