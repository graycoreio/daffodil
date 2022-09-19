import { DaffCollectionRequest } from '@daffodil/core';

/**
 * A list of request fields that can be transformed to and from query params.
 */
export const DAFF_PRODUCT_COLLECTION_REQUEST_FIELDS: (keyof DaffCollectionRequest)[] = [
  'filterRequests',
  'appliedSortOption',
  'appliedSortDirection',
  'currentPage',
  'pageSize',
];
