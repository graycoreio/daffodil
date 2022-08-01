import { daffCollectionBuildRequestFromMetadata } from '@daffodil/core';

import { daffProductFiltersToRequests } from '../../filters/public_api';
import {
  DaffProductCollectionMetadata,
  DaffProductCollectionRequest,
} from '../../models/public_api';

/**
 * Builds a {@link DaffProductCollectionRequest} from {@link DaffProductCollectionMetadata}.
 */
export const daffProductCollectionBuildRequestFromMetadata = (metadata: DaffProductCollectionMetadata): Partial<DaffProductCollectionRequest> => ({
  ...daffCollectionBuildRequestFromMetadata(metadata),
  filterRequests: daffProductFiltersToRequests(metadata.filters),
});
