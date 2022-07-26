import { DaffCollectionMetadata } from './metadata.interface';
import { DaffCollectionRequest } from './request.interface';

/**
 * Builds a {@link DaffCollectionRequest} from {@link DaffCollectionMetadata}.
 */
export const daffCollectionBuildRequestFromMetadata = (metadata: DaffCollectionMetadata): Partial<DaffCollectionRequest> => ({
  appliedSortOption: metadata.appliedSortOption,
  appliedSortDirection: metadata.appliedSortDirection,
  currentPage: metadata.currentPage,
  pageSize: metadata.pageSize,
});
