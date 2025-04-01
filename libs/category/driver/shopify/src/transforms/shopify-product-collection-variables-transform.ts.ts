import {
  DaffCategoryIdRequest,
  DaffCategoryUrlRequest,
} from '@daffodil/category';
import { DaffSortDirectionEnum } from '@daffodil/core';
import { ShopifyProductCollectionSortKeys } from '@daffodil/driver/shopify';

import { shopifyProductFilterRequestTransformer } from './shopify-daff-filter-request-transformer';
import { ShopifyCollectionProductVariables } from '../queries/variables.types';

/**
 * Transforms a categoryRequest into a {@link ShopifyCollectionProductVariables} object.
 *
 * @param categoryRequest - {@link DaffCategoryIdRequest} or {@link DaffCategoryUrlRequest} object
 * @returns A ShopifyCollectionProductVariables object
 */
export const shopifyProductCollectionVariablesTransformer = (categoryRequest: DaffCategoryIdRequest | DaffCategoryUrlRequest): ShopifyCollectionProductVariables => ({
  sortKey: categoryRequest.appliedSortOption ?? ShopifyProductCollectionSortKeys.CollectionDefault,
  reverse: categoryRequest.appliedSortDirection === DaffSortDirectionEnum.Descending ? true : false,
  filters: shopifyProductFilterRequestTransformer(categoryRequest.filterRequests),
});
