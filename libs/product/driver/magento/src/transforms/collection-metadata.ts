import { DaffProductCollectionMetadata } from '@daffodil/product';
import { daffProductFilterArrayToDict } from '@daffodil/product';

import {
  MagentoAggregation,
  MagentoProductPageInfo,
  MagentoProductSortFields,
} from '../models/public_api';
import { magentoProductTransformAggregate } from './aggregate/public_api';
import { coerceDefaultSortOptionFirst } from './sort-options/sort-default-option-first';

export const magentoProductCollectionMetadataTransform = (aggregates: MagentoAggregation[], pageInfo: MagentoProductPageInfo, sortFields: MagentoProductSortFields): DaffProductCollectionMetadata => ({
  page_size: pageInfo.page_size,
  current_page: pageInfo.current_page,
  total_pages: pageInfo.total_pages,
  filters: daffProductFilterArrayToDict(aggregates.map(magentoProductTransformAggregate)),
  sort_options: {
    default: sortFields.default,
    options: coerceDefaultSortOptionFirst(sortFields).options,
  },
  // TODO: implement?
  applied_sort_direction: null,
  applied_sort_option: null,
});
