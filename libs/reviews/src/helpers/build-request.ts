import { daffCollectionBuildRequestFromMetadata } from '@daffodil/core';

import {
  DaffProductReviewsCollectionRequest,
  DaffProductReviewsMetadata,
} from '../models/public_api';

/**
 * Builds a {@link DaffReviewsCollectionRequest} from {@link DaffReviewsCollectionMetadata}.
 */
export const daffReviewsCollectionBuildRequestFromMetadata = (metadata: DaffProductReviewsMetadata): Partial<DaffProductReviewsCollectionRequest> => ({
  ...daffCollectionBuildRequestFromMetadata(metadata),
  appliedFilter: metadata.appliedFilter,
});
