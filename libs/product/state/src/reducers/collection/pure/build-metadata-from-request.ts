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

export const buildMetadataFromRequest = (request: DaffProductCollectionRequest): Partial<DaffProductCollectionMetadata> =>
  allowedMetadataKeys.reduce(<K extends MetadataRequestIntersection>(acc: Partial<DaffProductCollectionMetadata>, key: K) => {
    if (request[key]) {
      acc[key] = request[key];
    }
    return acc;
  }, <Partial<DaffProductCollectionMetadata>>{});
