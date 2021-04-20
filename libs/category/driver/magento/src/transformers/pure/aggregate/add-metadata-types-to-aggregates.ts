import {
  MagentoGetCategoryFilterTypesResponse,
  MagentoGetProductsResponse,
} from '../../../models/public_api';
import { getMatchedAttributeType } from './get-matched-attribute-type';

export function addMetadataTypesToAggregates(
  attributeResponse: MagentoGetCategoryFilterTypesResponse,
  aggregationResponse: MagentoGetProductsResponse,
): MagentoGetProductsResponse {

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
