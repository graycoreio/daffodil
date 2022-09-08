import { daffCollectionBuildMetadataFromRequest } from '@daffodil/core';

import {
  DaffProductReviewsCollectionRequest,
  DaffProductReviewsMetadata,
} from '../models/public_api';

/**
 * Extracts the part of the {@link DaffProductReviewsCollectionRequest} that can be directly set in {@link DaffProductReviewsMetadata}.
 */
export const daffReviewsCollectionBuildMetadataFromRequest = (request: DaffProductReviewsCollectionRequest): Partial<DaffProductReviewsMetadata> => {
  const metadata = <DaffProductReviewsMetadata>daffCollectionBuildMetadataFromRequest(request);

  if (request.appliedFilter) {
    metadata.appliedFilter = request.appliedFilter;
  }

  return metadata;
};
