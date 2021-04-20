import {
  DaffCategoryPageMetadata,
  DaffCategoryRequestReplacement,
} from '@daffodil/category';

type MetadataRequestIntersection = keyof DaffCategoryPageMetadata & keyof DaffCategoryRequestReplacement;

const allowedMetadataKeys: MetadataRequestIntersection[] = [
  'id',
  'applied_sort_option',
  'applied_sort_direction',
  'current_page',
  'page_size',
];

export const buildMetadataFromRequest = (request: DaffCategoryRequestReplacement): Partial<DaffCategoryPageMetadata> =>
  allowedMetadataKeys.reduce(<K extends MetadataRequestIntersection>(acc: Partial<DaffCategoryPageMetadata>, key: K) => {
    if (request[key]) {
      acc[key] = request[key];
    }
    return acc;
  }, <Partial<DaffCategoryPageMetadata>>{});
