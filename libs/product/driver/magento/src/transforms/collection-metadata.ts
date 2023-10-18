import { DaffSortDirectionEnum } from '@daffodil/core';
import { DaffCollectionMetadata } from '@daffodil/core';
import { daffFilterArrayToDict } from '@daffodil/core';
import { MagentoSearchResultPageInfo } from '@daffodil/driver/magento';

import { magentoProductTransformAggregate } from './aggregate/public_api';
import { coerceDefaultSortOptionFirst } from './sort-options/sort-default-option-first';
import {
  MagentoAggregation,
  MagentoProduct,
  MagentoProductSortFields,
} from '../models/public_api';

/**
 * Builds a product collection metadata object.
 */
// TODO: make a single param?
export const magentoProductCollectionMetadataTransform = (
  aggregates: MagentoAggregation[],
  pageInfo: MagentoSearchResultPageInfo,
  sortFields: MagentoProductSortFields,
  products: MagentoProduct[],
  count: number,
  appliedSortOption?: string,
  appliedSortDirection?: DaffSortDirectionEnum,
): DaffCollectionMetadata => ({
  ids: products.map(({ sku }) => sku),
  count,
  pageSize: pageInfo.page_size,
  currentPage: pageInfo.current_page,
  totalPages: pageInfo.total_pages,
  filters: daffFilterArrayToDict(aggregates.map(magentoProductTransformAggregate)),
  sortOptions: {
    default: sortFields.default,
    options: coerceDefaultSortOptionFirst(sortFields).options,
  },
  appliedSortDirection,
  appliedSortOption: appliedSortOption || sortFields.default,
});
