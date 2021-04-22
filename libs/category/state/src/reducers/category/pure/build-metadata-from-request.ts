import {
  DaffCategoryPageMetadata,
  DaffCategoryIdRequest,
  DaffCategoryRequest,
} from '@daffodil/category';

type MetadataRequestIntersection = keyof DaffCategoryPageMetadata & keyof DaffCategoryRequest;

const allowedMetadataKeys: MetadataRequestIntersection[] = [
  'applied_sort_option',
  'applied_sort_direction',
  'current_page',
  'page_size',
];

export const buildMetadataFromRequest = (request: DaffCategoryRequest): Partial<DaffCategoryPageMetadata> =>
  allowedMetadataKeys.reduce(<K extends MetadataRequestIntersection>(acc: Partial<DaffCategoryPageMetadata>, key: K) => {
    if (request[key]) {
      acc[key] = request[key];
    }
    return acc;
  }, <Partial<DaffCategoryPageMetadata>>{});
