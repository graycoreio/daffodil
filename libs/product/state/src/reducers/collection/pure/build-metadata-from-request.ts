import {
  DaffProductCollectionMetadata,
  DaffProductCollectionRequest,
} from '@daffodil/product';

type MetadataRequestIntersection = keyof DaffProductCollectionMetadata & keyof DaffProductCollectionRequest;

const allowedMetadataKeys: MetadataRequestIntersection[] = [
  'applied_sort_option',
  'applied_sort_direction',
  'current_page',
  'page_size',
];

/**
 * Extracts the part of the product collection request that should be directly set in metadata state.
 */
export const buildMetadataFromRequest = (request: DaffProductCollectionRequest): Partial<DaffProductCollectionMetadata> =>
  allowedMetadataKeys.reduce(<K extends MetadataRequestIntersection>(acc: Partial<DaffProductCollectionMetadata>, key: K) => {
    if (request[key]) {
      acc[key] = request[key];
    }
    return acc;
  }, <Partial<DaffProductCollectionMetadata>>{});
