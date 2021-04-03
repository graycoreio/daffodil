import {
  MagentoCustomAttributeMetadataResponse,
  MagentoGetCategoryAggregationsResponse,
} from '../../../models/public_api';
import { getMatchedAttributeType } from './get-matched-attribute-type';

export function addMetadataTypesToAggregates(
  attributeResponse: MagentoCustomAttributeMetadataResponse,
  aggregationResponse: MagentoGetCategoryAggregationsResponse,
): MagentoGetCategoryAggregationsResponse {

  return {
    ...aggregationResponse,
    products: {
      ...aggregationResponse.products,
      aggregations: [
        ...aggregationResponse.products.aggregations.map((aggregate) => ({
          ...aggregate,
          type: getMatchedAttributeType(aggregate, attributeResponse),
        })),
      ],
    },
  };
}
