import {
  DaffCategoryIdRequest,
  DaffCategoryUrlRequest,
} from '@daffodil/category';
import { DaffSortDirectionEnum } from '@daffodil/core';
import { shopifyProductCollectionSortKeyCoercer } from '@daffodil/driver/shopify';

import { shopifyProductFilterRequestsTransformer } from './shopify-daff-filter-requests-transformer';
import { ShopifyCollectionProductVariables } from '../queries/variables.types';

/**
 * Transforms a categoryRequest into a {@link ShopifyCollectionProductVariables} object.
 *
 * @param categoryRequest
 * @returns shopify-readable product collection variables for the Storefront API query
 */
export const shopifyProductCollectionVariablesTransformer = (categoryRequest: DaffCategoryIdRequest | DaffCategoryUrlRequest): ShopifyCollectionProductVariables => ({
  sortKey: shopifyProductCollectionSortKeyCoercer(categoryRequest.appliedSortOption),
  reverse: categoryRequest.appliedSortDirection === DaffSortDirectionEnum.Descending ? true : false,
  filters: shopifyProductFilterRequestsTransformer(categoryRequest.filterRequests),
  first: categoryRequest.pageSize,
});
