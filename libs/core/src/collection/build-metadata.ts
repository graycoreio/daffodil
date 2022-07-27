import { DaffCollectionMetadata } from './metadata.interface';
import { DaffCollectionRequest } from './request.interface';

type MetadataRequestIntersection = keyof DaffCollectionMetadata & keyof DaffCollectionRequest;

const allowedMetadataKeys: MetadataRequestIntersection[] = [
  'appliedSortOption',
  'appliedSortDirection',
  'currentPage',
  'pageSize',
];

/**
 * Extracts the part of the {@link DaffCollectionRequest} that can be directly set in {@link DaffCollectionMetadata}.
 */
export const daffCollectionBuildMetadataFromRequest = (request: DaffCollectionRequest): Partial<DaffCollectionMetadata> =>
  allowedMetadataKeys.reduce(<K extends MetadataRequestIntersection>(acc: Partial<DaffCollectionMetadata>, key: K) => {
    if (request[key]) {
      acc[key] = request[key];
    }
    return acc;
  }, <Partial<DaffCollectionMetadata>>{});
