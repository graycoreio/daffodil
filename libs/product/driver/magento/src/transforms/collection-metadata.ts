import { DaffSortDirectionEnum } from '@daffodil/core';
import { DaffProductCollectionMetadata } from '@daffodil/product';
import { daffProductFilterArrayToDict } from '@daffodil/product';

import {
  MagentoAggregation,
  MagentoProduct,
  MagentoProductPageInfo,
  MagentoProductSortFields,
} from '../models/public_api';
import { magentoProductTransformAggregate } from './aggregate/public_api';
import { coerceDefaultSortOptionFirst } from './sort-options/sort-default-option-first';

/**
 * Builds a product collection metadata object.
 */
// TODO: make a single param?
export const magentoProductCollectionMetadataTransform = (
  aggregates: MagentoAggregation[],
  pageInfo: MagentoProductPageInfo,
  sortFields: MagentoProductSortFields,
  products: MagentoProduct[],
  appliedSortOption?: string,
  appliedSortDirection?: DaffSortDirectionEnum,
): DaffProductCollectionMetadata => ({
  ids: products.map(({ sku }) => sku),
  count: products.length,
  pageSize: pageInfo.page_size,
  currentPage: pageInfo.current_page,
  totalPages: pageInfo.total_pages,
  filters: daffProductFilterArrayToDict(aggregates.map(magentoProductTransformAggregate)),
  sortOptions: {
    default: sortFields.default,
    options: coerceDefaultSortOptionFirst(sortFields).options,
  },
  appliedSortDirection,
  appliedSortOption: appliedSortOption || sortFields.default,
});
