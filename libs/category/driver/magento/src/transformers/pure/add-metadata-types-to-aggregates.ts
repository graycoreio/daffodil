import {
  MagentoProductGetFilterTypesResponse,
  magentoProductGetMatchedAttributeType,
} from '@daffodil/product/driver/magento';

import { MagentoGetProductsResponse } from '../../models/public_api';

export function addMetadataTypesToProductsResponse(
  attributeResponse: MagentoProductGetFilterTypesResponse,
  aggregationResponse: MagentoGetProductsResponse,
): MagentoGetProductsResponse {
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
