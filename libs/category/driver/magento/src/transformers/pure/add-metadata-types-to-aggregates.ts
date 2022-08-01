import {
  MagentoProductGetFilterTypesResponse,
  magentoProductGetMatchedAttributeType,
} from '@daffodil/product/driver/magento';

import { MagentoGetCategoryAndProductsResponse } from '../../models/public_api';

export function addMetadataTypesToProductsResponse(
  attributeResponse: MagentoProductGetFilterTypesResponse,
  aggregationResponse: MagentoGetCategoryAndProductsResponse,
): MagentoGetCategoryAndProductsResponse {
  return {
    ...aggregationResponse,
    products: {
      ...aggregationResponse.products,
      aggregations: [
        ...aggregationResponse.products.aggregations.map((aggregate) => ({
          ...aggregate,
          type: magentoProductGetMatchedAttributeType(aggregate, attributeResponse.__type.inputFields),
        })),
      ],
    },
  };
}
