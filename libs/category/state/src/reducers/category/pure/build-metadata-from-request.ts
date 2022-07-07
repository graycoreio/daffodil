import {
  DaffCategoryPageMetadata,
  DaffCategoryIdRequest,
  DaffCategoryRequest,
} from '@daffodil/category';

type MetadataRequestIntersection = keyof DaffCategoryPageMetadata & keyof DaffCategoryRequest;

const allowedMetadataKeys: MetadataRequestIntersection[] = [
  'appliedSortOption',
  'appliedSortDirection',
  'currentPage',
  'pageSize',
];

export const buildMetadataFromRequest = (request: DaffCategoryRequest): Partial<DaffCategoryPageMetadata> =>
  allowedMetadataKeys.reduce(<K extends MetadataRequestIntersection>(acc: Partial<DaffCategoryPageMetadata>, key: K) => {
    if (request[key]) {
      acc[key] = request[key];
    }
    return acc;
  }, <Partial<DaffCategoryPageMetadata>>{});
