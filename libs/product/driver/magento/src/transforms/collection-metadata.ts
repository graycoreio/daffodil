import { DaffSortDirectionEnum } from '@daffodil/core';
import { DaffProductCollectionMetadata } from '@daffodil/product';
import { daffProductFilterArrayToDict } from '@daffodil/product';

import {
  MagentoAggregation,
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
  productCount: number,
  applied_sort_option?: string,
  applied_sort_direction?: DaffSortDirectionEnum,
): DaffProductCollectionMetadata => ({
  total_products: productCount,
  page_size: pageInfo.page_size,
  current_page: pageInfo.current_page,
  total_pages: pageInfo.total_pages,
  filters: daffProductFilterArrayToDict(aggregates.map(magentoProductTransformAggregate)),
  sort_options: {
    default: sortFields.default,
    options: coerceDefaultSortOptionFirst(sortFields).options,
  },
  applied_sort_direction,
  applied_sort_option: applied_sort_option || sortFields.default,
});
